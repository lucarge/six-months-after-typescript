<p align="center">
  <img src="./typescript.svg">
</p>
<h2 align="center">
  Six months after TypeScript
</h2>
<p align="center">
  <b>A retrospective</b>
</p>

[See it online](https://six-months-after-typescript.lucarge.now.sh/)

This repository contains the presentation where I analyzed how the introduction of TypeScript in [ProntoPro](https://www.prontopro.it) impacted the engineering team.

Transcript available below.

---

Hi, I'm Luca, I'm 25 and I work as a Frontend Software Engineer in ProntoPro, developing both the website and the mobile applications our customers are using everyday.

We're always looking for talented engineers to join our team, so if you find this talk interesting, and you think it would be great to work with us, please apply.

Today I'm gonna tell you about how to migrate a gigantic React codebase from JavaScript to TypeScript.

...

Just kidding. I think there's plenty of material online around this topic, and I really wouldn't be able to add much to what has already been said on it.

What I'm gonna do, instead, is talking with you about why we, the ProntoPro Frontend Team, started this journey in the first place, what were the issues we were trying to solve, what are the solutions we adopted to make it happen and what we achieved so far.

Before starting, though, let's put some context in place, so that the narration will make more sense.

# useContext(ProntoPro)

The Frontend codebase is a monorepo consisting of around 150.000 lines of code.

From there we package four separate applicatives:

1. The web application our consumers and merchants use
2. The iOS app
3. The Android app
4. An SDK used by first and third-party partners

We leverage code sharing **a lot**. I won't go deep into details on how we're doing this: if you're interested in the topic, I gave a talk about it a couple of months ago, and you can find the slides here: https://write-once-run-everywhere.lucarge.now.sh/

Why I'm saying this? Because when I say that our repo counts 150.000 lines of code, that doesn't mean that we implemented the same product three times; that means, instead, that the product complexity can fit that lines of code at the moment, and then those lines are transformed to target different platforms.

And we'll see why this is important to know shortly.

# Let's talk problems

When dealing with such a massive codebase, two probems arises.

The first one can be described as **Fog of War**, borrowing the term from a fantastic talk Gabriele Petronella gave at Codemotion Rome last year.
If you're familiar with strategic games, you know the feeling of being into a big map, of which only a small part is visible to you at a given time.
You know that the world your character is into is bigger than what you're seeing, but to know what's happening in another place of the map you need to reach that place first.

In a similar way, I started experiencing the same feeling inside our codebase at the beginning of this year.
The codebase was too big to fit all in my brain, and to keep dryiness at an acceptable level I needed to dig through implementations more often than not, just to remember how something we developed a year ago worked.

We were using prop-types to define contracts between components, but they have two pitfalls unfortunately:

1. To know you're violating the contract, you have to run the code.
2. They lack expressiveness.

`PropTypes.func.isRequired`? Thanks to let me know!

_Can you tell me what information my function will receive as input?_ Nope.

_Can you tell me if this function can do asyncronous work?_ Nope.

_Will my output be consumed by someone else? Should I give them back something in particular?_ Dunno, sorry 🤷‍♂️

You get the point.

---

The second issue relates to a simple question: if I change this small thing, **what breaks**?
It's impossible to know for sure. You might become a find-in-project guru, and use global searches inside the repo like a pro, but you have **no guarantees** that your code is still functional after you introduce a breaking change.
At that point you have two options:

1. If you're lucky, you have a test suite with 100% code coverage. You run it all, go for a run in the meantime, and when you will be back you'll probably know if you broke something.
2. You ask the QA guys to _test everything_. They'll love you for that.

To summarize, what issues we were trying to address?

1. Shorten the feedback loop. If I break something I wanna know right away.
2. Have better contracts: if my function should expect a number as input, I don't wanna wait until I run the code to discover that I got a string.

# Why TypeScript

Once we pin-pointed the issues we wanted to solve, it started to be clear that we needed to offload this work to more efficient tools.

At the beginning it wasn't strictly about TypeScript, but we knew that a static type checker was the solution we were seeking; that's why, at the beginning of the year, I gave both Flow and TypeScript a try. If you look at my Github, you'll see that around that time I made a bunch of investigations: ts-immutable-playground, io-ts-poc, blog-poc: I was trying to understand the better way to plan a transition for our repo.

Than two things happened:

1. While the Flow team was unresponsive to the community requests, TypeScript gained a lot of momentum in the open-source community. From TypeScript 2.8, the Microsoft team consistently delivered features and improvements, putting the community at the forefront of their planning.
2. The Microsoft team worked together with babel to bring first class support to TS in the tool: all of the sudden, we were able to start using TypeScript with minimum infrastructural changes to our repo, and without changing the whole Frontend toolset: Webpack, Jest, Eslint, Metro all gained TypeScript support in a matter of months.

In the end, during our team trip to Bruxelles to attend the Fosdem, we finally introduced TypeScript support inside our codebase: from there, it was just a matter of transitioning the team to this new, and unfamiliar to some, technology.

# How to transition the team to a world of strongly-typed code

Thanks to the work that Babel mantainers and the TypeScript team did to better integrate the two tools, introducing TypeScript support in our codebase has been _the easy part_, so to speak. Convincing the team that the transition was worth it, though, it's a different story; if you don't see the value of a compiler yelling at you because you code has flaws, you'll probably be frustrated, and you'll stick to JavaScript.

## Secure your core technologies first

The first thing we did was a team session dedicated to type Immutable.js better. I don't mean that the typings that ships with the library are wrong or bad, but we use Immutable in a precise way, using only some of the features available, and because of that I saw a possibility in there to do two things:

1. Acquainting the team to concepts that were mostly new: generics, type inference, overloads and so on, all while working on code that would never hit production.
2. Prove that TypeScript gives a better development experience.

Here's an example:

```typescript
const Map = (payload: { [x: string]: any }) => ({
  get: (key: string): any => payload[key],
});
```

This code is not wrong per se, but it doesn't enhance the developer experience that much.
The following, instead, is another story:

```typescript
const Map = <T>(payload: T) => ({
  get: <K extends keyof T>(key: K): T[K] => payload[key],
});
```

When you use the second one, and you get IDE suggestions while inside the `.get`, with the types of the relative properties alongside the suggestions, the value of a typechecker is immediately clear to you, even if you never used one before.
I still remember when this ha-ha moment happened inside our team. It was great.

## Secure your application boundaries second

After you experience this level of DX, the first reaction is: _I want this everywhere_; it won't take much to realise that, as soon as you interact with the outside world (an API, the localStorage, the values of a form, query params, whatever) all this goodness is lost.

You can write the types of every possible input by hand, but then you'll be getting a better DX with the same, unsafe runtime.
You can write the types _and_ the validators by hand, but then you'll feel bored to write the same concept twice.

Once again, I saw an opportunity to introduce a new tool in our arsenal: `io-ts` (thanks for the lib Giulio, by the way).

If you're not familiar with it already, I recommend checking it out on [Github](https://github.com/gcanti/io-ts).

Our current setup is made of three steps, that runs every time we get a new input into the app:

1. Decoder: ensure the input is valid for us
2. Serializer: transform the input into its immutable equivalent, as we only deal with immutable data structures downstream
3. Mapper: if the input needs to be transformed to let us work better with it downstream, all the transformations should happen here. The rest of the code won't even know that this input was of a different type before.

We also built two custom reporters, so that if something is wrong with the input we know as soon as possible:

- Console Reporter: runs in dev mode, and it's super useful to see why the input is wrong while developing. We developed it to benefit ourselfs first, but also our backenders started appreciating its capabilities recently.
- Sentry Reporter: conceptually the same thing as the Console Reporter, but running in production and logging on Sentry, allowing us to collect all the things while keeping the user's console clean.

Combining the typechecker and the boundary-checks together, we have been able to validate changes less often in production, resulting in a performance boost for our end users. Win-Win.

## Provide a swiss-knife to work with types

Types are not that helpful if you're not able to manipulate them properly. TypeScript provides loads of helper types to deal with them (`NonNullable`, `ReturnType`, `Arguments`, `Partial` and so on), but for our custom types we needed to build them by ourself.

That why we introduced `MapExtractor`, `ListExtractor`, `MapKey`, `PromisedReturnType` as soon as possible in our codebase: avoiding types duplication is the key for a better developer experience.

## Give the team members time to adapt

Lastly, but still super important, we need to aknowledge that the leaning curve for becoming a fluent TypeScript developer is steep. It goes without saying that the team will not reach the same level of knowledge of the tooling and the language at the same time.

That's why we have been clear with everyone in the team about the fact that _until you feel comfortable writing TS, keep using JS and you'll be fine_.

Finally, the thing I will be hated for: _if you can't get the compiler to understand you, put an any, a fixme, and go ahead with your work_.

Our brain can only deal with so much complexity at a time, and trying to pass that limit is pointless and counter-productive. Either way, if the compiler was right we'll ship a bug, and in a couple of days we'll be dealing with that bug with a fresh set of eyes; if the compiler was wrong, you'll probably find a better way to communicate your intentions to it, and in a couple of months you'll probably be able to remove that `any` with ease.

# Did TypeScript delivered on its promises?

The TypeScript tagline is _JavaScript that scales_. It took me a while to understand the meaning of it, probably because the only concept of _scaling_ I knew before was related to server autoscaling on AWS. But now I think I got it: it's not about runtime performances, it's about complexity and people.

Scaling complexity means reducing the risk of breaking features while touching code that's not new. We are a lot more confident today in introducing breaking changes to existing components compared to six months ago, and that's because the more TypeScript prevent us from shipping bugs, the more we trust it to be accurate. While the number of hotfixes increased a bit right after the TypeScript adoption, because of large refactorings mostly, nowadays we hardly need to hotfix because of a broken runtime. So I would confidently say that, on scaling complexity, it delivers.

Scaling people, to me, means reducing the amount of communication needed to do knowledge-sharing/inductions to new team members: our newest colleagues are now able to ship code to production within a couple of weeks after their arrival and TypeScript demonstrated to be quite helpful in that regard.
About knowledge sharing: as we are separated into squads we have only a partial vision what's going on in the codebase; since TypeScript though, cross-squads code-reviews are mostly not needed, since we'll be notified if we break something we didn't knew even existed.

We also saw improvements to our common language, learning to better convey meaning: another -unexpected- benefit of switching to TS.
The whole team knows the difference between `type inputType = 'checkbox-group' | 'radio-group'` and `type inputType = string`, and thus we're able to concisely express our point in code-reviews and remote communications; before TypeScript, we were resorting to prosaic descriptions of concepts a lot more, resulting in slower and more error-prone communication.

In conclusion, I'd say that TypeScript delivered more than we expected.

# What would we do differently if we were starting the transition today with the level of knowledge we gained so far?

## Some lessons we learned on our skin

### Design for efficiency

While TypeScript makes large teams scale better, the underlying tooling doesn't scale as well.

Since the introduction of TypeScript in our codebase, we started experiencing some troubles with memory consumption on our machines. Typechecking is costly from a memory point of view, and we set up the monorepo to be checked all at once; while we exposed the need for more powerful computers to the company, this issue is mostly an architectural fault we didn't foresaw six months ago, and we're now actively working on a reshape of the repo that allows, among other things, to reduce the amount of code that needs to be typechecked after a change to prove the applications is still functional.

If starting the transition today, we would probably avoid this scenario with every possible alternative solution: waiting minutes before getting any kind of feedback from the IDE after a change, and being able to type-check the whole monorepo only in CI, is one of the biggest threat to delivering a superior developer experience when working in our repo.

### Assign the right responsibilities

Another thing that I personally would do differently today is defining the boundaries of the tool earlier and better. As I said before, we're using TypeScript to get answers related to code correctness, and to get them as soon as possible. Probably because of the early days of TypeScript, though, the compiler is able to do a lot more than that, and having a lot of different tools yelling at you for the same thing is not _the perfect developer experience_, so to speak.
An example of this is the `noUnusedLocal` compiler flag: having an unused local variable spells nothing about the correctness of the code, and thus for us is not a TypeScript responsibility to report it. Unfortunately, in the early days we were seeking for the stricter configuration possible for the compiler, which caused duplicated warnings and errors to pop up on our machines. We also had both `eslint` and `tslint` in the repo for a short period of time, which was onestly too much to digest from a feedback point of view.

Here's what we're doing today instead:

- Does the code work? => TypeScript
- Does the code work as intended? => Jest
- Does the code respect the team coding standards? => Eslint
- Is the code formatted correctly? Prettier (in progress, not yet enabled by default)

### On types vs interfaces

When we started migrating to TypeScript, we were coming from a world where an object created on the fly and an entity used across the whole codebase had no semantic difference: they were both objects.

With that said, it's not surprising that we decided to avoid using interfaces in favour of types.

I know there are many differences between types and interfaces, and there's no community agreement around how to _explain me like I'm 5_ the difference between the two; if asked about the difference today, though, I would reply the following: _if, given an error, you want to see what's inside the data-structure, go for types. If you don't, go for interfaces_.

With this definition, having a `type` describing a function parameter makes sense, but the `User` shape? Not so much.

The types-only approach worked well for us for a bit, because it was closer to the paradigm we had before; but today, we get errors that are _miles_ long, and decipher them has become an art on its own. We get error truncation even though we disabled it in the compiler configuration, just because they're so long that even `tsc` gives up in writing them all, and in CI ReviewDog ignores errors that are too long to parse: 🤷‍♂️.

If starting today, I would try to better leverage the charateristics of the two constructs to deliver a better DX overall.

# In conclusion

TypeScript has been a great addition for us. We made mistakes, we took suboptimal decisions during this short journey, but we're working on correcting them in the future, convinced that the value that TypeScript brought to us is far superior than the painpoints we faced while migrating.

I don't feel to suggest TypeScript to _everyone_: if you're not facing _scale_ issues, in the meaning we discussed before, it might seem an overkill that slows you down; but for us, given our context, it's a deal breaker.

We have just completed the migration of a third of the codebase to TS: if you wanna help migrating the remaining 2/3, join us in this journey. I swear it will be fun.

---

This is all I got for you today. Thanks for listening.
