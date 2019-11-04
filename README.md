![ci report](https://github.com/lucarge/six-months-after-typescript/workflows/ci/badge.svg)

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

This repository contains the presentation where I analyzed how the introduction of TypeScript in [ProntoPro](https://www.prontopro.it) impacted the Engineering team.

Transcript available below.

---

Hi, I'm Luca, I'm 25 and I work as a Frontend Software Engineer in ProntoPro, developing both the website and the mobile applications our customers use everyday.

We're always looking for talented engineers to join our team, so if you find this talk interesting and you think it would be great to work with us, you're welcome to apply.

Today I'm gonna tell you about how to migrate a gigantic React codebase from JavaScript to TypeScript.

...

Just kidding. I think there's plenty of material online about this topic, and I really wouldn't be able to add much to what has already been said on it.

What I'm gonna do, instead, is talking with you about why we, the ProntoPro Frontend Team, started this journey in the first place, what were the issues we were trying to solve, what are the solutions we adopted to make it happen and what we achieved so far.

Before starting, however, let's put some context in place, so the narration will make more sense.

# useContext(ProntoPro)

The Frontend codebase is a monorepo consisting of around 150.000 lines of code.

From there we package four separate applications:

1. The web app
2. The iOS app
3. The Android app
4. A SDK used by first and third-party partners

We leverage code sharing **a lot**. I won't go deep into details on how we're doing this: if you're interested in the topic, I gave a talk about it a couple of months ago, and you can find the slides here: https://write-once-run-everywhere.lucarge.now.sh/.

Why am I saying this? Because when I say that our repo counts 150.000 lines of code, that doesn't mean that we implemented the same product three times. That means, instead, that the product complexity can fit those lines of code at the moment, and then those lines are transformed to target different platforms.

And we'll soon see why this is an important concept.

# Let's talk problems

When dealing with such a massive codebase, two problems arise.

The first one can be described as **Fog of War**, borrowing the term from a fantastic talk Gabriele Petronella gave at Codemotion Rome last year.
If you're familiar with strategic games, you know the feeling of being into a big map, of which only a small part is visible to you at a given time.
You know that the world your character is into is bigger than what you're seeing, but to know what's happening in another place of the map you need to reach that place first.

In a similar way, we started experiencing the same feeling inside our codebase at the beginning of this year.
The codebase was too big to fit all in my brain and to keep DRYness at an acceptable level we needed to dig through implementations more often than not, just to remember how something we developed a year ago worked.

We were using prop-types to define contracts between components, but they suffer two problems:

1. In order to know you're violating the contract, you have to run the code.
2. They lack of expressiveness.

`PropTypes.func.isRequired`? Thanks to let me know!

_Can you tell me what information my function will receive as input?_ Nope.

_Can you tell me if this function can do asyncronous work?_ Nope.

_Will my output be consumed by someone else? Should I give them back something in particular?_ Dunno, sorry 🤷‍♂️

You get the point.

---

The second issue is related to a simple question: if I change this small thing, **what will I break**?
It's impossible to know for sure. You might become a find-in-project guru and use global searches inside the repo like a pro, but you have **no guarantees** that your code is still working after introducing a breaking change.
At that point you have two options:

1. If you're lucky, you have a test suite with 100% code coverage (is that even possible?). You run it all, go for a run in the meantime, and when you will be back you'll probably know if you broke something.
2. You ask the QA guys to _test everything_. They won't really love you for that.

To summarize, what issues we were trying to address?

1. Shorten the feedback loop. If I break something I wanna know right away.
2. Have better contracts: if my function expects a number as input, I don't wanna wait until I run the code to discover that I got a string.

# Why TypeScript

Once we pin-pointed the issues we wanted to solve, it started to be clear that we needed to offload this work to more efficient tools.

At the beginning it wasn't strictly about TypeScript, but we knew that a static type checker was the solution we were seeking; that's why, at the beginning of the year, I gave both Flow and TypeScript a try. If you look at my Github, you'll see that around that time I made a bunch of investigations: ts-immutable-playground, io-ts-poc, blog-poc: I was trying to understand a better way to plan a transition for our repo.

Than two things happened:

1. While the Flow team was unresponsive to the community requests, TypeScript gained a lot of momentum in the open-source community. From TypeScript 2.8, the Microsoft team consistently delivered features and improvements, putting the community at the forefront of their planning.
2. The Microsoft team worked together with babel to bring first class support to TS in the tool: all of the sudden, we were able to start using TypeScript with minimum infrastructural changes to our repo and without changing the whole Frontend toolset: Webpack, Jest, Eslint, Metro all gained TypeScript support in a matter of months.

In the end, during our team trip to Bruxelles to attend the Fosdem, we finally introduced TypeScript support inside our codebase: from there, it was just a matter of transitioning the team to this new, and unfamiliar to some, technology.

# How to transition the team to a world of strongly-typed code

Thanks to the work that Babel maintainers and the TypeScript team did to better integrate the two tools, introducing TypeScript support in our codebase has been _the easy part_, so to speak. Convincing the team that the transition was worth it, though, was a different story; if you don't see the value of a compiler yelling at you because your code has flaws, you'll probably be frustrated and you'll stick to JavaScript.

## Secure your core technologies first

The first thing we did was a team hacking session dedicated to enhance Immutable.js types. I don't mean that the typings that ship with the library are wrong or bad, but for our use cases we wanted something more. Also, I exploited this need to reach two side goals:

1. Acquainting the team to concepts that were mostly new: generics, type inference, overloads and so on, all while working on code that would never hit production.
2. Prove that TypeScript gives a better development experience.

Here's an example:

```typescript
const Map = (payload: { [x: string]: any }) => ({
  get: (key: string): any => payload[key],
});
```

This code is not wrong per se, but it doesn't enhance the developer experience that much.
The following, instead, is a different story:

```typescript
const Map = <T>(payload: T) => ({
  get: <K extends keyof T>(key: K): T[K] => payload[key],
});
```

When you use the second one and you get IDE suggestions while inside the `.get`, with the types of the relative properties alongside the suggestions, the value of a typechecker is immediately clear to you, even if you never used one before.
I still remember when this aha moment happened inside our team. It was a great feeling.

## Secure your application boundaries second

After you experience this level of DX, the first reaction is: _I want this everywhere_. However it doesn't take much to realise that, as soon as you interact with the outside world (an API, the localStorage, the values of a form, query params, whatever), all this goodness is lost.

You can write the types of every possible input by hand, but then you'll be getting a better DX with the same, unsafe runtime.
You can write the types _and_ the validators by hand, but then you'll feel bored to write the same concept twice.

Once again, I saw an opportunity window: adding a new tool to our arsenal: `io-ts` (thanks for the lib Giulio, by the way).

If you're not familiar with it already, I recommend checking it out on [Github](https://github.com/gcanti/io-ts).

Our current setup is made of three steps, that runs every time we get a new input into the app:

1. Decoder: ensure the input is valid for us.
2. Serializer: transform the input into its immutable equivalent, as we only deal with immutable data structures downstream.
3. Mapper: if the input needs to be transformed to let us work better with it downstream, all the transformations should happen here. The rest of the code won't even know that this input was of a different type before.

We also built two custom reporters, so that if something is wrong with the input we know as soon as possible:

- Console Reporter: runs in dev mode, and it's super useful to see why the input is wrong while developing. We developed it to benefit ourselfs first, but very soon our backenders started appreciating its capabilities, too.
- Sentry Reporter: conceptually the same thing as the Console Reporter, but running in production and logging on Sentry. That allows us to collect all the reports while keeping the user's console clean.

Combining the typechecker and the boundary-checks together, we have been able to validate changes less often in production, resulting in a performance boost for our end users. Win-Win.

## Provide a swiss-knife to work with types

Types are not that helpful if you're not able to manipulate them properly. TypeScript provides loads of helper types to deal with them (`NonNullable`, `ReturnType`, `Arguments`, `Partial` and so on), but for our custom types we needed to build them by ourself.

That why we introduced `MapExtractor`, `ListExtractor`, `MapKey`, `PromisedReturnType` as soon as possible in our codebase: avoiding types duplication is the key for a better developer experience.

## Give the team members time to adapt

Last, but very important, we need to acknowledge that the leaning curve for becoming a fluent TypeScript developer is steep. It goes without saying that the team will not reach the same level of knowledge of the tooling and the language at the same time.

That's why we have been clear with everyone in the team about the fact that _until you feel comfortable writing TS, keep using JS and you'll be fine_.

Finally, the thing I will be hated for: _if you can't get the compiler to understand you, put an any, a fixme, and go ahead with your work_.

Our brain can only deal with a certain level of complexity at a time; my experience is that most of the times trying to cross that limit is pointless and counter-productive. In the worst scenario, if the compiler is right we'll ship a bug and in a couple of days we'll be dealing with it with a fresh set of eyes. If the compiler is wrong, instead, we'll probably find a better way to communicate our intentions to it and in a couple of months we'll probably be able to remove that `any` with ease.

# Did TypeScript delivered on its promises?

The TypeScript tagline is _JavaScript that scales_. It took me a while to understand the meaning of it, probably because the only concept of _scaling_ I knew before was related to server autoscaling on AWS. But now I think I got it: it's not about runtime performances, it's about complexity and people.

Scaling complexity means reducing the risk of breaking features while touching code that's not new. We are a lot more confident today in introducing breaking changes to existing components compared to six months ago, and that's because the more TypeScript prevents us from shipping bugs, the more we trust it to be accurate. While the number of hotfixes increased a bit right after the TypeScript adoption, mostly because of the large refactorings we performed, nowadays we hardly need to hotfix because of a broken runtime. So I would confidently say that it definitely delivers on scaling complexity.

Scaling people, to me, means reducing the amount of communication needed to do knowledge-sharing/inductions to new team members: our newest teammates are now able to ship code to production within a couple of weeks after their arrival and TypeScript demonstrated to be quite helpful in that regard.

About knowledge sharing: as we are separated into Product squads we have only a partial vision of what's going on in the codebase. What I can say is that after introducing TypeScript cross-squad code reviews became less necessary. It's easier now to get notified if we break something we didn't even know it existed.

As a side-effect of TypeScript increasing the code semantics, we also noticed improvements in our common language. That was another - unexpected - benefit of switching to TS.
Now the whole team knows the difference between `type inputType = 'checkbox-group' | 'radio-group'` and `type inputType = string`; therefore we're able to concisely express our point in code reviews and remote communications; before TypeScript, we were resorting to prosaic descriptions of concepts, resulting in a slower and more error-prone communication.

In conclusion, I'd say that TypeScript delivered more than we expected.

# What would we do differently if we were starting the transition today with the level of knowledge we gained so far?

## Some lessons we learned on our skin

### Design for efficiency

While TypeScript makes large teams scale better, the underlying tooling doesn't scale as well.

Since the introduction of TypeScript in our codebase, we started experiencing some troubles with memory consumption on our machines. Typechecking is expensive from the memory point of view and we set up the monorepo to be checked all at once. Waiting minutes before getting a feedback from the IDE after a change and being able to typecheck the whole monorepo only in CI is currently one of the biggest threats to having a superior developer experience when working in our repo.

While expressing the need for more powerful machines to the company, we soon realized this issue was mostly an architectural fault we didn't forsee. At the moment we're actively working on a reshape of the repo that allows, among other things, to reduce the amount of code that needs to be typechecked after a change to prove the applications is still working as expected.

If we started the transition to TS today, we would probably put much more focus to avoid this scenario.

### Assign the right responsibilities

Another thing that I personally would do differently today is defining better boundaries for TS at an earlier stage. As I said before, we're using TypeScript to get answers related to code correctness as soon as possible. But the TS compiler is able to do a lot more than that: for example, it also does some code linting. When we started the TS migration we didn't set boundaries and went for the strictest configuration possible. The issue was that we already had `eslint` in codebase and having different tools yelling at you for the same reason is not _the perfect developer experience_, so to speak. On top of this, we also had `tslint` in the repo for a short period of time, which honestly gave us a bit too many feedbacks to digest.

An example is the `noUnusedLocal` compiler flag: having an unused local variable spells nothing about the correctness of the code and thus for us is not a TypeScript responsibility to report it. For this reason we decided to leave that to `eslint`.

Here's the way we set boundaries today, instead:

- Does the code work? => TypeScript
- Does the code work as intended? => Jest
- Does the code respect the team coding standards? => Eslint
- Is the code formatted correctly? Prettier (in progress, not yet enabled by default)

### On types vs interfaces

When we started migrating to TypeScript, we were coming from a world where an object created on the fly and an entity used across the whole codebase had no semantic difference: they were both objects.

That said, it's not surprising that we decided to avoid using interfaces in favour of types.

I know there are many differences between types and interfaces, and there's no community agreement about how to _explain me like I'm 5_ the difference between the two. If asked about the difference today, though, I would reply the following: _if, given an error, you want to see what's inside the data-structure, go for types. If you don't, go for interfaces_.

With this definition, having a `type` describing a function parameter makes sense, but the `User` entity shape? Not so much.

The types-only approach worked well for us for a while, because it was closer to the paradigm we had before. But today we get errors that are _miles_ long and deciphering them has become an art on its own. We get error truncation even though we disabled it in the compiler configuration, just because they're so long that `tsc` gives up in streaming them all. Also, in CI `ReviewDog` ignores errors that are too long to parse: 🤷‍♂️.

If starting today, I would try to better leverage the characteristics of the two constructs in order to improve the DX.

# In conclusion

TypeScript has been a great addition for us. We made mistakes, we took suboptimal decisions during this short journey, but we're working on fixing them in the future, convinced that the value that TypeScript brought to us is far superior than the pain points we faced while migrating.

I don't feel like suggesting TypeScript to _everyone_. If you're not facing _scale_ issues, in the sense we discussed before, it might be an overkill that just slows you down.
For us, given our context, it definitely was a dealbreaker in our relationship with JS.

We have just completed the migration of one third of the codebase to TS: if you wanna help migrating the rest of it, join us in this journey. I promise it will be fun.

---

This is all I got for you today. Thanks for listening.
