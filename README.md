# PEAN Stack (PostgreSQL + Express + Angular + Node)

PEAN is an alternative to popular web development stacks based on JavaScript, such as [MEAN](<https://en.wikipedia.org/wiki/MEAN_(solution_stack)>) (Mongo + Express + Angular + Node) and PERN (PostgreSQL + Express + React + Node).

At the project's root, run `npm run install` to install the dependencies of the subdirectories.

## Development

Run `npm run dev` at the project's root to start a local server in development mode.

Nodemon watches for changes in the files within the `/frontend` and `/server` folders. Every time a file is updated, the application is recompiled.

The server will expose the Angular app at `http://localhost:3000/` and the API routes at `http://localhost:3000/api/.

## Deploy

Generate the build of each application by running the following command at the project's root: `npm run build`.

Run `npm run start` to start the Node server.
