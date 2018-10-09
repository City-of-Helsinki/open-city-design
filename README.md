[Browse the Open City Design System](http://opencity.design/)

# Open City Design System

[![npm version](https://img.shields.io/npm/v/open-city-design.svg?style=flat-square)](https://www.npmjs.com/package/open-city-design)

## What is this?

Open City Design System (OCDS) is a design system for cities and their services. Design system provides UI components, user patterns and design resources to support the open development of city services.

The project is in early alpha. The development of the concept has been funded by a EU backed project called [6aika](https://6aika.fi).

## Contents

* Documentation - [React](https://reactjs.org/) app, using [Reactstrap](https://reactstrap.github.io/) components for style demos
* Bootstrap 4 sass theme - Available as npm package

## How to use?

Open City Design System takes advantage and is built around [Bootstrap](https://getbootstrap.com/) component library. It can be used as a Bootstrap style theme or expanded pattern library with added modules and pattern.

Go to [Open City Design System website](https://opencity.design/) and browse the city-specific design systems.

## Install

Install or add Bootstrap sass theme to your application
```
yarn add open-city-design
```

See the [scss files](https://github.com/City-of-Helsinki/open-city-design/blob/master/src/scss/main.scss) how the import hierarchy works. You might need to create your own scss file with appropriate import paths for your environment.

**NOTE:** 1.0.0-alpha.3 onwards we import Bootstrap default variables directly instead of 6Aika defaults. Note this if you are doing your own style imports.

## How can I contribute?

Open City Design System documentation is built on [React.js](https://reactjs.org/), a Javascript library for building user interfaces. It requires Node.js 8+ to run.

You can get it running by cloning the repository locally, and running the following commands:

`cd open-city-design`

`yarn install`

`yarn start`

We welcome pull requests on the respective parts of this repository. There's a [Slack channel](https://join.slack.com/t/opencitydesignsystem/signup) available for discussion.
