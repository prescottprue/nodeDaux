# Node Daux

Node server that generates documentation from Markdown.  Currently using [Daux.io](http://daux.io).

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
* `/docs` - Generates static docs

#### Planned
* `/source` - Load markdown content from specified S3 bucket
* `/edit` - Enable file editing within site (using Daux)
* `/admin` - Control admin settings

### Planning

Accept Markdown from Github Link and S3 Bucket

**PHP** - Have php run directly in node instead of using grunt-php
- [mdoc](https://github.com/millermedeiros/mdoc) May be the best solution. Structure will change, but it is written in node

**Grunt** - Remove Grunt as a main dependency (should only be dev)
- Shell command would only work with grunt?

**Admin Panel** - Edit/Add content, setup S3 bucket upload, backups

## Dependencies

* [grunt-php](https://github.com/sindresorhus/grunt-php)
* [grunt-shell](https://github.com/sindresorhus/grunt-shell)
* [shelljs](https://github.com/arturadib/shelljs)
