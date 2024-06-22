<h1>
@peter-present/react-hook-utils
</h1>

Simple <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Lady%20Beetle.png" alt="Lady Beetle" width="25" height="25" /> package which provides some utility hooks.

### Installation <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bug.png" alt="Bug" width="25" height="25" />

- Using `npm`

```shell
npm install @peter-present/react-hook-utils
```

- Using `yarn`

```shell
yarn add @peter-present/react-hook-utils
```

- Using `bun`

```shell
bun add @peter-present/react-hook-utils
```

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Baby%20Chick.png" alt="Baby Chick" width="25" height="25" /> Api

#### [useDeepEffect](./lib/use-deep-effect.ts)

- This hook acts like `useEffect` with a significant difference. useDeepEffect can detect exactly what and how dependencies change, give developer more information to create suitable effectCallback for every situations.

#### [useExplorerUrl](./lib/use-explorer-url.ts)

- I have worked as a `blockchain developer` for a while. Sometimes, in the coding process, i must link a `transaction hash` or an `account address` to its `blockchain explorer scan` such as [BSC Scan](https://bscscan.com/), [ETH Scan](https://etherscan.io/). This hook helps developers just build the right link.

#### [usePagination](./lib/use-pagination.ts)

- Obviously, usePagination is the very helpful hook when developer must work with tables, lists that require pagination service.
