## DevShop
<div style="display: inline_block"><br/>
<img align="center" alt="jvmh-nestjs" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"" />
 <img align="center" alt="jvmh-nodejs" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
<img align="center" alt="jvmh-nodejs" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />
<img align="center" alt="jvmh-react" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"  />

</div>


 # Nest.js API with PostgreSQL and GraphQL

## Overview

This technical description outlines the architecture and functionality of a system built with Nest.js, PostgreSQL, and GraphQL.

## System Components

1. **Environment Setup:**
   - Nest.js is chosen for its TypeScript support, dependency injection, and modular architecture.
   - PostgreSQL is selected as the database system due to its reliability and performance.

2. **Database Configuration:**
   - The application connects to PostgreSQL using TypeORM, an ORM library for TypeScript and JavaScript.
   - TypeORM is used to define entities (data models) using TypeScript classes and map them to database tables.

3. **Data Models:**
   - TypeScript classes represent data models, each corresponding to a table in the PostgreSQL database.
   - These classes define the structure of data and any associated business logic.

4. **GraphQL Integration:**
   - Nest.js integrates GraphQL using the `@nestjs/graphql` module.
   - GraphQL resolvers handle incoming queries and mutations, interacting with services to perform CRUD operations.

5. **Services:**
   - Nest.js services encapsulate business logic and interact with the database through TypeORM entities.
   - Services provide methods for creating, reading, updating, and deleting data.

6. **Data Validation:**
   - Data validation is performed using the `class-validator` library.
   - Decorators are added to entity properties to define validation rules, ensuring data integrity.

7. **GraphQL Schema:**
   - GraphQL types represent data structures and operations exposed by the API.
   - The schema maps GraphQL types to resolvers, enabling data retrieval and manipulation.

8. **Authentication and Authorization (Optional):**
   - Middleware can be added to authenticate and authorize GraphQL requests.
   - Libraries like Passport.js handle authentication strategies like JWT or OAuth.

9. **Testing:**
   - Unit tests are written for services and resolvers using Jest or Mocha.
   - Integration tests verify the system behavior, including interactions with the database and GraphQL layer.

10. **Documentation and Tooling:**
    - API documentation is generated using tools like GraphQL Playground or Swagger.
    - Examples and explanations are provided for each query and mutation to assist developers.

11. **Deployment:**
    - The application is prepared for production deployment, including environment configuration and code optimization.
    - Security measures are implemented to protect against common vulnerabilities.

## Conclusion

This system architecture leverages the strengths of Nest.js, PostgreSQL, and GraphQL to create a robust and scalable API for managing data.



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
## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. You can also open an issue if you have any questions or suggestions.



## License

Nest is [MIT licensed](LICENSE).
