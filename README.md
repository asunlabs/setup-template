# @asunlabs/setup-template

<div align="center">

This is a template repository for [developerasun](https://github.com/developerasun)'s Nodejs project configuration.

Fix below badges.

[![wakatime](https://wakatime.com/badge/user/e56daee8-7aae-4b0e-814c-b6bb7f5f841c/project/8b0956fc-8733-4e90-bbbd-38ff833ecf6b.svg)](https://wakatime.com/badge/user/e56daee8-7aae-4b0e-814c-b6bb7f5f841c/project/8b0956fc-8733-4e90-bbbd-38ff833ecf6b) [![Github All Releases](https://img.shields.io/github/downloads/asunlabs/setup-template/total.svg)]() ![GitHub last commit](https://img.shields.io/github/last-commit/asunlabs/setup-template) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

![release](https://github.com/asunlabs/setup-template/actions/workflows/release.yml/badge.svg) ![label](https://github.com/asunlabs/setup-template/actions/workflows/label.yml/badge.svg) ![assign](https://github.com/asunlabs/setup-template/actions/workflows/assign.yml/badge.svg)

<img src="" alt="banner image here" width="100%" />

</div>

## Content

- [asunlabs/setup-template](#asunlabssetup-template)
  - [git](#git)
  - [husky](#husky)
  - [dependencies](#dependencies)
  - [prettier](#prettier)
  - [es lint](#eslint)
  - [contribution](#contribution)
  - [star history](#star-history)
  - [contact](#contact)

## Git

### Commit convention

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

Or use package manager for `semver`.

```sh
pnpm version patch
pnpm version minor
pnpm version major
```

### Hook

`pnpm format` and `pnpm lint` is hooked up on pre-push. Check out `.husky/pre-push` and `package.json`.

### Config

Check out `.gitconfig.example` and configure it at `.git/config`

```
# list of alias
  h = help
	aa = add . # add all
	c = commit
	p = pull
	pom = pull origin main
	ps = push
	pf = push -f
	cn = checkout -b # check out to a new branch
	sm = switch main # check out to main
```

### Submodule

_This repo sets itself as submodule so that other repos using this as template can import and update latest changes_

Get what you need from another repo with git submodule.

Run to `add`

```sh
git submodule add https://github.com/developerasun/developerasun.git
```

Check status.

```sh
git submodule

# result
# 52d2c4b80553858db28cbe92ee3923a4c1fec531 developerasun (heads/main)
```

Run to `update`

```sh
cd submodule

# get latest commit
git pull
```

Run to `remove`

```sh
# step 1
git submodule deinit -f <submodule-name>

# step 2
rm -rf .git/modules/<submodule-name>

# step 3
git rm -f <submodule-name>
```

<details>
<summary>Empty submodule</summary>

If submodule directory is empty, try below.

Clone this repo with --recursive flag to clone with all the submodules.

```sh
git clone <https-url> --recursive
```

Or, if you already cloned,

```sh
git submodule update --init
```

</details>

## Husky

Run

```sh
# Mac
pnpm dlx husky-init && pnpm install # pnpm

# Windows
pnpm dlx husky-init -and pnpm install # pnpm
```

Edit `.husky/pre-push` and `package.json` for pre-push hook.

## Dependencies

Run `preinstall` for global dependency if there is any.

```sh
pnpm preinstall
```

Check node, npm, package manager version.

```json
  "packageManager": "pnpm@7.15.0",
  "engines": {
    "node": ">=18.12.1",
    "npm": ">=8.19.2"
  }
```

### Depcheck

Check current dependency configs.

```sh
# update deps to latest
pnpm dep:up

# check unused deps
pnpm dep:list
```

### Package manager

Use [`ni`](https://github.com/antfu/ni) if there are more than one single package manager in project.

Run

```sh
# CLI
npm i -g @antfu/ni

# From package.json
pnpm preinstall
```

And then,

```sh
ni <package-name># install
nun <package-name># uninstall
nr format # run prettier
nr lint # run eslint
```

### D2 diagram

- D2 works in UNIX OS.

Install

```sh
# install
curl -fsSL https://d2lang.com/install.sh | sh -s --

# uninstall
curl -fsSL https://d2lang.com/install.sh | sh -s -- --uninstall
```

Write diagram in d2

```d2
# Actors
hans: Hans Niemann

defendants: {
  mc: Magnus Carlsen
  playmagnus: Play Magnus Group
  chesscom: Chess.com
  naka: Hikaru Nakamura

  mc -> playmagnus: Owns majority
  playmagnus <-> chesscom: Merger talks
  chesscom -> naka: Sponsoring
}

# Accusations
hans -> defendants: 'sueing for $100M'

# Offense
defendants.naka -> hans: Accused of cheating on his stream
defendants.mc -> hans: Lost then withdrew with accusations
defendants.chesscom -> hans: 72 page report of cheating
```

Render it in browser.

```sh
d2 --watch sample.d2 test.svg
```

### VS code extension

Run

```sh
# export current VS code extensions
pnpm ext:up

# print the list on Windows
pnpm ext:list:win

# print the list on Unix
pnpm ext:list:unix
```

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

## Contribution

[![Contributors](https://contrib.rocks/image?repo=asunlabs/setup-template)](https://github.com/asunlabs/setup-template/graphs/contributors)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=asunlabs/setup-template&type=Date)](https://star-history.com/#asunlabs/setup-template&Date)

## Contact

🔊

https://user-images.githubusercontent.com/83855174/215325843-b2438a00-f743-4476-9a8b-df123e3b0fb9.mp4

<div id="container" align="center">
<table>
    <thead>
      <th>Tech blog</th>
      <th>ENS</th>
      <th>Slack</th>
      <th>Kakaotalk</th>
    </thead>
    <tbody>
      <tr id="qrcodes">
        <td id="linkedin">
          <a href="https://www.linkedin.com/in/jakesung/recent-activity/shares/" target="_blank" rel="noopener noreferrer">
            <img src="https://user-images.githubusercontent.com/83855174/215321562-f4ea3788-408a-426f-9ddc-3e88f7e451f3.png" width=300 height=300 />
          </a>
        </td>
        <td id="ens">
          <a href="https://etherscan.io/enslookup-search?search=developerasun.eth" target="_blank" rel="noopener noreferrer">
            <img src="https://user-images.githubusercontent.com/83855174/215321609-5b45e414-ca9f-4215-a9ee-df12f500a1a9.png" width=300 height=300 />
          </a>        
        </td>
        <td id="slack">
            <img src="https://user-images.githubusercontent.com/83855174/216966708-9f5dd08c-80cd-48e0-9e38-3a2206d3b1fc.png" width=300 height=300 />
        </td>
        <td id="kakaotalk">
            <img src="https://user-images.githubusercontent.com/83855174/215321711-c6cd767b-64b5-4cb4-8819-a4d187e825d6.png" width=200 height=300 />
        </td>
      </tr>
      <tr id="description" align="center">
        <td>@jakesung</td>
        <td>@developerasun.eth</td>
        <td>@asunlabs</td>
        <td>@developerasun</td>
      </tr>
    </tbody>
  </table>
</div>
