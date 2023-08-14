---
title: 'Using custom queries with React Testing Library'
writtenAt: '2022-09-11'
---

Testing frontend code has always been a challenge compared to backend code. And sometimes depending on the libraries that we use, things get even more tricky.

Recently I have been trying to improve the way tests are written in the project that I am working.

This project uses some components from the [Ant Design](https://ant.design/) library.
Since the beginning of the project, due to some constraints, we ended defaulting to mock the library.
And this lead to some hacky code in the hopes to reach some uncovered lines.

Take the code below as an example.

```tsx
<Select
  onChange={() => {
    // do something here when the value changes
  }}
>
  <Option value="margherita">Margherita</Option>
  <Option value="calabrese">Calabrese</Option>
</Select>
```

In the way we were testing, we would mock the [Select](https://ant.design/components/select/)
and create some inner component that would call the passed `onChange` just for the sake of covering it.
In the end we were not sure anymore if we were testing the mock or the implementation,
no matter how much attention we pay when writing it.

