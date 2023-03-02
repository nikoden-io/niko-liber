[![CircleCI](https://dl.circleci.com/status-badge/img/gh/nikoden-io/niko-liber/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/nikoden-io/niko-liber/tree/main)

<p style="text-align: center">
  <a href="https://github.com/nikoden-io/niko-liber" title="niko-liber">
    <img src="https://avatars.githubusercontent.com/u/66019610?v=4" width="80px" alt="<repo-title>"/>
  </a>
</p>
<h1 style="text-align: center"> Niko Liber </h1>
<p style="text-align: center">Web development monorepo</p>

<p style="text-align: center">
<a href="https://github.com/nikoden-io/niko-liber/blob/main/LICENSE" title="License">
<img src="https://img.shields.io/github/license/nikoden-io/niko-liber?label=License&logo=Github&style=flat-square" alt="Niko Liber License"/>
</a>
</p>
<!-- <p style="text-align: center"><img src="./assets/images/main.gif" alt="<repo-title>"/></p> -->

## 🚀 Description

This monorepo includes a few projects with shared dependencies and take the advantage of NX tools to build, test and
serve quickly each projects and share ressources and libraries between them.  
The integration is mainly based on NextJS and NodeJS/Fastify combo.  
Components libraries and utilities libraries will be shared across projects too.  
As it's a demo project, it's currently evolving as a side-project and will be updated regularly.

## 🔌 Prerequisite

* **NodeJS** >= 14.15.4
* **NPM** >= 6.14.10
* As of today, **Yarn** is not so easy to use with integrated NX monorepo, so that's why we advise (sadly) to use NPM

## 🛠️ Installation Steps

### 1. Clone the repository

  ```Shell
  git clone https://github.com/nikoden-io/niko-liber.git
  ```

### 2. Initial setup and dependencies installation

  ```Shell
  npm install 
  ```

### And then ... ?

From this point you have access to the full monorepo. You can use either NX commands to run builds, e2e, tests and off
course serve every projects included. (see commands below or in NX documentation)

#### Example: test all projects

  ```Shell
  nx run-many --target=test
  ```

## ❗ Available Commands

* [Nx **run** commands](https://nx.dev/packages/nx/documents/run)
* [Nx **run-many** commands](https://nx.dev/packages/nx/documents/run-many)
* [Nx **all** commands](https://nx.dev/reference/commands)

## 👷 Built with

* [Nx](https://nx.dev/)
* [NextJS](https://nextjs.org/)
* [React](https://reactjs.org/)
* [Fastify](https://www.fastify.io/)
* [TypeScript](https://www.typescriptlang.org/)
* [NodeJS](https://nodejs.org/en/)
* [Jest](https://jestjs.io/)
* [Cypress](https://www.cypress.io/)

## 📂 Directory Structure

### 📁 apps

Contain all the applications of the monorepo, mainly NextJS applications and Node/Fastify server.

### 📁 dist

Contain all the built applications of the monorepo.

### 📁 libs

Contain all the libraries of the monorepo.

## 🎊 Future Updates

* [ ] Make projects more consistent, for now we're testing monorepo structure and tools
* [ ] Add more projects
* [ ] Add CI/CD pipelines
* [ ] Include more unit tests and e2e tests, already configured but pretty empty
* [ ] Add more automation tools

## 🌐 Links

<p>
    <a href="https://github.com/nikoden-io/niko-liber" title="Niko Liber">📂 Repo</a>
    ·
    <a href="https://github.com/nikoden-io/niko-liber/issues/new/choose" title="🐛Report Bug/🎊Request Feature">💥 Got Issue</a>
</p>

## Author

**Nicolas Denoël**

- <a href="https://linkedin.com/in/nicolas-denoel">
  <img align="center" src="https://github.com/devicons/devicon/blob/master/icons/linkedin/linkedin-original.svg" alt="linkedin.com/in/nicolas-denoel" width="30" height="30" />
  </a>  
- <a href="https://github.com/nikoden-io">
  <img align="center" src="https://github.com/devicons/devicon/blob/master/icons/github/github-original-wordmark.svg" alt="GitHub" width="30" height="30" />
  </a>
- [📧](mailto:contact@nikoden.io?subject=Hi%20from%20NikoLiber "Hi!")

<p style="text-align: center">Made with <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-plain.svg" alt="TypeScript" width="15" height="15"/>  & ❤️ in Belgium</p>
