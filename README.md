# @asunlabs/setup-template

<div align="center">

This is a template repository for [developerasun]()'s Nodejs project configuration.

Fix below badges.

[![wakatime](https://wakatime.com/badge/user/e56daee8-7aae-4b0e-814c-b6bb7f5f841c/project/c15254fd-0a5e-4b66-b897-5ed473191817.svg)](https://wakatime.com/badge/user/e56daee8-7aae-4b0e-814c-b6bb7f5f841c/project/c15254fd-0a5e-4b66-b897-5ed473191817) ![GitHub last commit](https://img.shields.io/github/last-commit/asunlabs/setup-template) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

![lint](https://github.com/asunlabs/setup-template/actions/workflows/lint.yml/badge.svg) ![assign](https://github.com/asunlabs/setup-template/actions/workflows/release.yml/badge.svg) ![label](https://github.com/asunlabs/setup-template/actions/workflows/label.yml/badge.svg) ![assign](https://github.com/asunlabs/setup-template/actions/workflows/assign.yml/badge.svg)

<img src="" alt="banner image here" width="100%" />

</div>

## Contents

- [asunlabs/setup-template](#asunlabssetup-template)
  - [git](#git)
  - [husky](#husky)
  - [prettier](#prettier)
  - [es lint](#eslint)

## Git

### Commit

Run

```sh
git config --local commit.template .gitmessage.txt
```

### Tag

Run

```sh
# create
git tag [tag-name-here]

# push
git push origin [tag-name-here]

# remove from local
git tag -d [tag-name-here]

# remove from remote
git push origin :[tag-name-here]
```

## Husky

Run

```sh
# Mac
pnpm dlx husky-init && pnpm install # pnpm

# Windows
pnpm dlx husky-init -and pnpm install # pnpm
```

Edit `.husky/pre-commit` and `package.json` for pre-commit hook.

## Prettier

Run

```sh
pnpm format
```

Edit `.prettierrc.js` for more detailed configuration.

## ESLint

Install with

```sh
pnpm create @eslint/config
```

Basic setup is as follows.

- targeting typescript
- running in node
- ESM
- configuring with Javascript file

Edit `.eslinrc.js` for more detailed configuration.

Run

```sh
pnpm lint
```
