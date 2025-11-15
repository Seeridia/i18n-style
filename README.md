# i18n-style

一个用于将单词缩写为国际化风格（i18n-style）的简单工具。

A simple tool to abbreviate words in an internationalization style (i18n-style).

实际上，灵感来源于 [RimoChan/i7h](https://github.com/RimoChan/i7h)，不过我是想着学习一下如何发布一个简单的 npm 包，所以就自己写了一个类似的东西。

Actually, the inspiration comes from [RimoChan/i7h](https://github.com/RimoChan/i7h), but I wanted to learn how to publish a simple npm package, so I wrote a similar tool myself.
    
Example:
- `developer → d7r`
- `internationalization → i18n`
- `Hello world → H3o w3d`

## Install

```bash
npm install i18n-style
```

## Usage

```ts
import i18n from "i18n-style";

i18n("developer");        // "d7r"
i18n("Hello world!");     // "H3o w3d!"
i18n("internationalization"); // "i18n"

// 自定义选项
i18n("developer role", {
  minWordLength: 10, // 只缩写长度 >= 10 的单词
  skipWords: ["role"],
  shouldSkip: (word) => word === word.toUpperCase(),
});
```

## Options

- `minWordLength`：最小缩写长度阈值，默认为 3（即 <=2 的单词保持原样）。
- `skipWords`：不希望被缩写的单词或正则表达式数组。
- `shouldSkip`：自定义函数，返回 `true` 时跳过当前单词。
