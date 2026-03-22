# markdown-extensions

[![npm version](https://img.shields.io/npm/v/@brandonhimpfen/markdown-extensions.svg)](https://www.npmjs.com/package/@brandonhimpfen/markdown-extensions)
[![license](https://img.shields.io/npm/l/@brandonhimpfen/markdown-extensions.svg)](LICENSE)

A small, reliable utility that provides a canonical list of Markdown file extensions along with helper functions for detecting and working with them.

Designed to be lightweight, predictable, and useful in real-world tooling such as static site generators, content pipelines, and repository automation.

## ✨ Features

- Canonical list of Markdown extensions.
- Single source of truth (JSON-driven).
- Helper utilities for real-world usage.
- Handles edge cases like:
  - `.md`
  - `MD`
  - `README.markdown`
  - file paths (`/docs/file.mkd`)
- Zero dependencies.
- Tiny footprint.

## 📦 Install

```bash
npm install @brandonhimpfen/markdown-extensions
```

## 🚀 Usage

### Import

```js
import markdownExtensions, {
  isMarkdownExtension,
  isMarkdownFile,
  normalizeExtension
} from '@brandonhimpfen/markdown-extensions';
```

### Get all Markdown extensions

```js
console.log(markdownExtensions);
//=> ['md', 'markdown', 'mdown', 'mkdn', 'mkd', 'mdwn', 'mkdown', 'ron', 'ronn']
```

### Check if a value is a Markdown extension

```js
isMarkdownExtension('md');        // true
isMarkdownExtension('.md');       // true
isMarkdownExtension('.MD');       // true
isMarkdownExtension('markdown');  // true
isMarkdownExtension('txt');       // false
```

### Check if a file is a Markdown file

```js
isMarkdownFile('README.md');            // true
isMarkdownFile('docs/guide.markdown');  // true
isMarkdownFile('notes.txt');            // false
isMarkdownFile('README');               // false
```

### Normalize extensions

```js
normalizeExtension('.MD');               // 'md'
normalizeExtension('README.markdown');   // 'markdown'
normalizeExtension('/docs/file.MKD');    // 'mkd'
```

## 🧠 How It Works

- All extensions are stored in `extensions.json`.
- The runtime imports and freezes this list.
- A `Set` is used for fast lookups.
- Inputs are normalized before comparison.

This ensures consistency, correctness and no duplication bugs.

## 📌 Notes

- Extensions are stored **without leading dots**.
- Helpers accept:
  - extensions (`md`)
  - dot-prefixed extensions (`.md`)
  - filenames (`README.md`)
  - file paths (`/docs/file.md`)
- Files without extensions (e.g. `README`) are **not** considered Markdown files.

## 🤔 Why include `ron` and `ronn`?

These extensions are historically associated with Markdown tooling, particularly manual page generators and documentation systems. They are included for completeness and compatibility.

## 🔧 Use Cases

This package is especially useful for:

- Static site generators.
- Content ingestion pipelines.
- Markdown parsers and converters.
- GitHub Actions and repo automation.
- CLI tools that process files.
- AI / search indexing pipelines.

## 🧪 Example: filtering Markdown files

```js
import { isMarkdownFile } from 'markdown-extensions';

const files = ['README.md', 'index.js', 'guide.markdown'];

const markdownFiles = files.filter(isMarkdownFile);

console.log(markdownFiles);
//=> ['README.md', 'guide.markdown']
```

## 🧾 API

### `markdownExtensions`

Type: `readonly string[]`

List of known Markdown file extensions (without leading dots).

### `markdownExtensionsSet`

Type: `ReadonlySet<string>`

A `Set` version of the extensions for fast lookups.

### `normalizeExtension(input)`

Normalize an extension or filename.

Returns a lowercase extension without a leading dot.

### `isMarkdownExtension(input)`

Returns `true` if the input represents a Markdown extension.

### `isMarkdownFile(input)`

Returns `true` if the input represents a Markdown filename.

## 🧩 Design Philosophy

This package is intentionally:

- Small
- Predictable
- Dependency-free
- Focused on correctness

It aims to be a simple building block in larger systems rather than a full parsing solution.

## 📄 License

MIT
