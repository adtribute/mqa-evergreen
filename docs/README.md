# Evergreen documentation

Browse the [Storybook](https://adtribute.github.io/mqa-evergreen/) for examples from this fork. To run the stories locally, use `yarn dev` from the repository root.

## Archived guides

The former documentation site’s MDX source includes [component guides](./documentation/components/), [foundations](./documentation/foundations/), [design patterns](./documentation/patterns/), and [migration notes](./documentation/introduction/migrations/). The guides describe the upstream versions they were written for. You can read the prose and code samples in GitHub’s source view. The [table examples](./documentation/components/table.mdx) use these [sample profiles](./fixtures/profiles.json).

## Server-side rendering

After rendering the page on the server, call `extractStyles()` from `evergreen-ui`. Include the returned `css` in a style element in the page head and the returned `hydrationScript` before the client scripts. The [SSR tests](../src/ssr/__tests__/) exercise style extraction and hydration. The [historical Next.js example](https://github.com/adtribute/mqa-evergreen/blob/v7.7.3/examples/ssr-next/pages/_document.js) shows how the two fit into a Pages Router document.
