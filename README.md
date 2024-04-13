## DevShop
<div style="display: inline_block"><br/>
<img align="center" alt="jvmh-nestjs" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"" />
 <img align="center" alt="jvmh-nodejs" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
<img align="center" alt="jvmh-nodejs" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />
<img align="center" alt="jvmh-react" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"  />

</div>


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
