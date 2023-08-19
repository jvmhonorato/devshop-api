## DevShop

<img align="center" alt="jvmh-nestjs" height="60" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />

## Description

 DevShop API is the Backend code for Devshop App

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Database Migrations
```bash
# Script in package.json
"typeorm": "typeorm-ts-node-esm -d ./ormconfig.ts"

# Generate a new migration and synchronizing entities
$ npm run typeorm -- migration:generate ./src/migrations/Initial

# sync database runnig migrations
$ npm run typeorm migration:run


```


## License

Nest is [MIT licensed](LICENSE).
