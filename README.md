# Programming in Rust

## Set up

The course is created with [Nextra Docs Theme](https://nextra.site/docs/docs-theme). 
To build the course page you need to install `pnpm` (see more details how to install `pnpm` [here](https://pnpm.io/installation)).

If you have `pnpm` install run the follow the steps below:

1. Install all required packages:
    ```
    pnpm install
    ```
1. Run development version of the site:
    ```
    pnpm dev
    ```
    The site will be available at [http://localhost:3000](http://localhost:3000)

## Static site with Docker

You can also build a static site and the publish it using Docker and BusyBox HTTP server.

1. Build static site:
    ```
    pnpn build
    ```
    The page will be generated to `./out` directory.
1. Create and start docker container with command:
    ```
    docker compose up
    ```
    The page will be available at [http://localhost:3000](http://localhost:3000)
