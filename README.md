# Marvel API Wrapper

A simple to use Marvel API wrapper powered by [Express.js](http://expressjs.com/de/) and [TypeScript](https://www.typescriptlang.org)

## About

This repository allows you to use the official [Marvel API](https://developer.marvel.com) with some awesome features.

* Caching
* Simple configuration
* Only requests without another Marvel API library

And the best feature is you only need to call the API wrapper like you would call the official API. So you don't need to read two documentations.

```http
http://localhost:8080/characters
http://localhost:8080/comics
...
```

You can also add the documented URL parameters like this:

```http
http://localhost:8080/characters?nameStartsWith=S&orderBy=-name&limit=50&offset=10
```

## Setup

1.  Go to the official [Marvel developers](https://developer.marvel.com) website and create a new account. After that, you will find a private and a public key inside your developer's profile page.

2.  Generate a new `.env` file inside the root path of this repository and place them like this:

```text
PUBLIC_KEY=12345
PRIVATE_KEY=12345
```

3.  Place the current API endpoint URL inside the `.env` file:

```text
API_ENDPOINT=https://gateway.marvel.com/v1/public
```

4.  Start the server by running the `npm run watch` command.

## Build

Because this repository is built in TypeScript you have to compile the `*.ts` files to plain JavaScript.
Run `npm run build` and the compiled `*.js` files are placed inside the `dist` folder.

## Deploy

I recommend using [Heroku](https://www.heroku.com) to deploy this repository because of nearly zero configuration and zero costs. Heroku also gives you the ability to use Redis as in-memory-database. The repository is already configured to run out of the box on Heroku.

## Test

I added basic unit tests to this repository. You find them inside the `./tests` folder. Feel free to add your own.
