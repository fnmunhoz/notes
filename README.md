# Notes - small app to keep my development notes

Available at https://notes.munhoz.dev

## Requirements

To run the app locally, you will need the following installed on your environment:

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [docker and docker-compose](https://docs.docker.com/get-docker/)

## Cloning

Then clone the app via git:

```sh
git clone git@github.com:fnmunhoz/notes.git
```

## Development mode

To start the app in development mode, go to the repository root folder, and run:

```sh
docker-compose run --rm app npm install
docker-compose up
```

Then, open the app on the browser at the following address: http://localhost:3000

## Production mode

To start the app in production mode, go to the repository root folder, and run:

```sh
docker-compose run --rm app npm install
docker-compose run --rm --service-ports prod
```

Then, open the app on the browser at the following address: http://localhost:4000

## Stack

[Next.js](https://nextjs.org) project bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and deployed to [Vercel](https://vercel.com).

## Status

![Vercel status](https://therealsujitk-vercel-badge.vercel.app/?app=notes-munhoz-dev)
