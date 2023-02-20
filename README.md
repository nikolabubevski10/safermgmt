# Welcome to Safer Management!

# Workflow

Welcome to Safer Management's frontend web repo! If you're here it's because we see your potential to make a difference!

This README is your source-of-truth reference for how to work on this project so please be a good citizen and read these docs thoroughly. 

## Getting Started

Make sure you have access to our `Slack` for communication and `Jira` for task management. 
Our work happens between `GitHub`, `Slack`, and `Jira` so these will be your always-open daily tools.

If you get stuck on anything at all, please let the team know in Slack - as our CEO says, "We'd rather measure twice and cut once!".

## Security

This is a private repository belonging to Safer Management Inc. It's contents are not available for license or sharing in any form. Please always observe these basic security steps as a developer, and you won't have to stress about all that:

1. Use an encrypted drive.
2. Use a VPN when working in public.
3. Lock up when you are afk.
4. Empty your trash bin after deleting things.
5. Delete unnecessary files.
6. Delete everything if at some point you are not actively working with Safer.
7. Never share secrets with anyone, including git.

Please be careful with our baby <3

## Development Setup

Running Safer locally for development is as easy as 1-2-3. In this guide, we will walk you through each required step. If you run into something that could be described better, please update this README and submit a Pull Request (PR) on GitHub.

1. Clone the repository. In the command line, run `git clone https://github.com/Safr-Management/web.git`.
2. Change your directory to **web** by running `cd web`
3. Run `yarn` to install dependencies.
4. Run `cp .template.env .env` to copy the environment variables template file to your own local **.env** file.
   **Caution:** Never _ever_ commit your **.env** file. These are for dev without the API only.
5. Fill in your new `.env` file with the requisite environment variables.

## Submitting Code

1. Use semantic commit messages (https://seesparkbox.com/foundry/semantic_commit_messages). `git log` for examples.
2. Use `git rebase` to avoid merge commits unless the merge is absolutely needed. To rebase onto `master`, `git checkout master`, `git pull master`, `git checkout your-branch`, `git rebase HEAD~N --onto master` where `N` is the number of commits beyond `master` in `your-branch`
3. Always include an identifier in your commit message that points back to `Jira`. `Jira` connects to GitHub via commit messages so please use `git log` to get a feel for the semantic commit message pattern used by Safer. Try to have 1 PR for each `Jira` card - it helps our QA and dev ops teams stay sane.
4. We use pre-commit hooks with `es-lint` and `prettier` to ensure that code meets our standards. Please do not bypass these hooks!
5. Please submit work via a Pull Request on Github. You will receive comments and change requests before it is merged so simply commit the required changes and refresh the review request to notify your reviewer.
6. For QA, please include in your PR message if you have tested the code on Android, iOS, Chrome, and Firefox to help save us from bugs going live - thanks!

## Developing features that require SSL

You may need to create a tunnel on `ngrok` to work on SSL-requiring APIs (e.g. Stripe, Twilio, Google). Ask your manager for access if you hit an SSL issue in local development.

# Developer Guide

## The Stack

The stack includes:
1. `React` for building components and UI 
2. `Redux` as a client-side cache and centralized store
3. `TypeScript` for type safety
4. `styled-components` for styling (zero CSS files or inline CSS!)
5. `i18next` for internationalization and localization
6. `StoryBook` for documenting and testing components

In our `staging` and `production` environments, the app should be served from the `build` folder so check the React build before submitting a PR.

### React

1. Functional components only
2. Always use hooks
3. Avoid prop drilling by using `Redux` or `Context` at the domain level
4. Please componentize thoroughly. More components, that are deeper nested is something to embrace, not avoid. Components should do 1 thing!
5. Always include a loading state and empty state for any render that will be async/dynamic

### Redux

1. Use Redux where React local state is insufficient and as a response cache for API calls
2. Every Redux component should have a `{componentName}Actions.ts`, `{componentName}Reducer.ts`
3. Each component reducer needs to be combined in `src/reducers.ts`
4. Each Redux action should be implemented as a `thunk`
5. Use Redux hooks (`useSelector`, `useDispatch`) in React components, never use `connect` with HoCs. **Important:** Use the hooks within src/state/hooks.ts instead of the plain `useSelector`/`useDispatch` Redux hooks, since these custom hooks are type safe.

### TypeScript

We try to keep our `TypeScript` adoption developer-friendly. Basically, every function (including React components) should have a fully described `interface FunctionArgsOrComponentProps {}` defined with `TypeScript`. Avoid using `any`. You might need to Google a few things, but the value of `TypeScript` is huge so please give it a chance. Not only does it protect against type errors at compile time, it super-powers your IDE with better intellisense by acting as a self-documenting layer. You will find that you need almost no likely-unmaintained comments because your code will describe itself much more articulately.

### StyledComponents

Every style should be defined in the `*Styles.ts` file in the component. Please do not submit code with StyledComponents defined within components. We extract them because it separates logic and presentation and keeps the logical components easy read. ZERO CSS files or inline CSS please! If you've never used `styled-components`, we think you are in for a world of joy. They are super powerful with dynamic keyframes and style props.

### Internationalization

Use the `useTranslation` hook to wrap _all rendered_ strings in your components. This includes notifications, error messages, button text, dates, _literally any all strings that get rendered_.

Run `yarn translate` before submitting a PR to generate locale files. 

`yarn translate` will generate keys for translations from any strings wrapped in `useTranslation`'s `t()` function that our human and machine translators can later fill in with locale-specific translations.

Note: this means every string should be defined as a variable (which is good practice anyways). Note also that `t()` doesn't compute strings so if you are computing a string (e.g. ``Hello ${name}``), it must be defined as it's own variable before then passing that variable to `t()`.

### StoryBook

We use StoryBook for component documentation and automation of visual-regression tests which keep our app looking like our designs and helps devs get a feel for the app's components.

Run `yarn run build-storybook` to build the StoryBook. Then run `yarn storybook` to run StoryBook on port 6006 as described in `package-json`. Go to `localhost:6006` to check out the component docs!

We are aiming for 100% StoryBook coverage, so please create stories for your components for any PR that includes new presentational work.

## Architecture

The frontend is a React app built on `create-react-app`, the most standard React bootstrapping project.

Please enjoy our mildly-opinionated architecture to help us scale the dev process without friction. We hope you find it very developer-friendly once you get used to some potentially new tools.

### Decoupling > DRY
We use a highly decoupled architecture, favoring decoupling over DRY. Read on to learn more about why this is critical!

You've been tought to avoid copying and pasting code ("Don't repeat yourself" or DRY) and that is still generally a good idea. However, as applications scale, a dogmatic DRY approach leads to tight-coupling of components which decimates feature velocity. So instead, we favor "decoupling > DRY" by using "domain-driven design" and keeping imports flowing in one direction. Read on to learn more!

### Thinking in domains
We break the application into functional "domains" that are very similar to microservices or microfrontends in concept. So each "domain" is forbidden from reusing logic from other domains _unless it is in the index file which defines the domain's public exports._ 

In general, a domain is best when it has no dependencies from other domains. That way, when working in a given domain you don't have to worry about your code breaking other views or pages. Just edit to your heart's content. If you've ever worked on codebases that favor tight-coupling using fancy abstractions, you'll understand why this is better. Just write code without the stress!

And so we actually avoid writing shared components, and when we do, we tend to define them as a new domain. For example, the component that authenticates users is it's own domain, and so is the camera and image processing component. When these components are reused, they are genreally rendered unchanged. If they need to be extended, we favor literally copy/pasting them rather than extending them with complex logic resulting tight-coupling in the application. Also, if they need to be extended with information unrelated to their purpose, it may suggest a design flaw (e.g. the camera doesn't need to know about the contact-us form, it just doesn't!).

It might sound counter-intuitive at first but trust us, this keeps dev fast and fun in the long-run.

### Folder structure
Ok, so you're onboard with `Decoupling > DRY`, but where do you put new components? This is, again, opinionated but you'll love it in no time. The repo is built with a fractal pattern where the fractal unit looks like this:

```
domains/camera/
  - assets/ // Optional: for images and icons
  - components/
  - Camera.tsx // Main component in the domain
  - CameraStyles.ts // Optional: for StyledComponents
  - CameraReducer.ts // Optional: for Redux
  - CameraActions.ts // Optional: for Redux
  - Camera.stories.tsx // For StoryBook
  - index.ts // defines the domain exports
```

So what we mean by "fractal" is that if you open the component directory, this pattern is repeated, and can continue repeating to deeper nested components _rather_ than importing from siblings or parents which results in a big dependency mess. For example:

```
domains/camera/components/
  - stream-processor
  - permissions
  - webcam
```

And inside one of those components, the familiar structure once again:

```
domains/camera/components/stream-processor
  - components
  - StreamProcessor.tsx
  - StreamProcessorStyles.tsx
  - StreamProcessor.stories.tsx
```

Note that we try to keep Redux at the domain-level. And `index.ts` files exposing public exports are _only_ allowed at the root of the domain. Please let us know if you have any questions and we'll try to write better docs in time!
