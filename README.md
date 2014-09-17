# React

## Installation

1. Install [Node](http://nodejs.org/). If you're on OSX, there's a handy pkg
   installer available on the node homepage. This is the recommended method of
   installation.

2. Install the [Grunt](http://gruntjs.com) CLI as a global node package.
   `npm install -g grunt-cli`

3. Install the dependencies for the project. From the root of this repo, run
   `npm install`. This will read the packages.json file and install packages
   into `./node_modules`.

## Deployment

1. Run `grunt deploy`, this will compile the style sheets and scripts.

2. The built assets are now in `./release`.


## Development

We use Grunt to manage many development, compilation, and build
tasks. For a list of all tasks available in this project, see the
Gruntfile. Simply run `grunt` to get started.

To specify a port for your server `grunt --port 1234`

## Style Guide

1. Keep it under 80 columns
2. If you are returning html, always surround it in parens
3. If you have large html conditionals, break them out into sub-render methods

## PS

gl reading this code, its all functional garbage (kevin's note to self)
