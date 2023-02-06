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
  - [contact](#contact)

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
