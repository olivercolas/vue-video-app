# Table of Contents
- [Table of Contents](#table-of-contents)
- [About](#about)
  * [Plugins used](#plugins-used)
    + [Vuetify](#vuetify)
  * [Pages](#pages)
    + [Home](#home)
    + [Video](#video)
  * [Vuex](#vuex)
  * [Scripts](#scripts)
    + [`npm install`](#-npm-install-)
    + [`npm run serve`](#-npm-run-serve-)
    + [`npm run build`](#-npm-run-build-)
    + [`npm run test:unit`](#-npm-run-test-unit-)
    + [`npm run lint`](#-npm-run-lint-)

# About

This project displays a list of videos in a carousel and allows the user to click on a video to view it. 

## Plugins used

### Vuetify
For material design components and quick prototyping

## Pages

### Home
This is the component you visit first when loading the page, displays available movies in a carousel

### Video
This component is based on the route `/video/:id` and displays a specific movie that was clicked. Will redirect the user if the id is incorrect.

## Vuex

A store is implemented to handle the incoming movies from the api endpoint, and also adds an id for routing purposes.

## Scripts

### `npm install`

Will install all required dependencies

### `npm run serve`
Compiles and runs the project development with hot-reloads

### `npm run build` 
Compiles and minifies for production

### `npm run test:unit` 
Run your unit tests

### `npm run lint` 
Lints and fixes files
