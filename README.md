# Node Daux

Node server that hosts a set of documents with [Daux.io](http://daux.io).

This project was created to allow docs/styling to be updated separately from server logic. A Daux docs server will allow the user update docs content by uploading markdown files or pointing to an s3 bucket that has the files.

## Getting Started

### Local

1. Clone repo and run: `npm install`
2. Start the node server by running: `npm start`

### Publishing
#### Heroku

1. Create a new Heroku app: `heroku create`
2. Run `git push heroku master` to push your master branch to Heroku

### Endpoints

#### Current
* `/run` - Starts Daux service by running `grunt` with exec

#### Planned
* `/source` - Load markdown content from specified S3 bucket
* `/edit` - Enable file editing within site (using Daux)
* `/admin` - Control admin settings

### Planning

**PHP** - Have php run directly in node instead of using grunt-php

**Grunt** - Remove Grunt as a main dependency (should only be dev)

**Admin Panel** - Edit/Add content, setup S3 bucket upload, backups

## Dependencies

* [grunt-php](https://github.com/sindresorhus/grunt-php)

* [shelljs](https://github.com/arturadib/shelljs)
