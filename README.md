# hideout
a highly scalable audio conversations web application build with NextJs and node.

## Tech and major tools used in this project:
- Next.js
- React
- PostgreSQL
- TypeORM
- Redis --> 
- Node.js
- Apollo
- Websockets
- koshari --> custom package build to encode and decode chat messages
- mediasoup --> maybe

## Branches

- staging -> pr this branch for everything
- prod -> branch running in production

## Config / Secrets environment variables

Copy `.env.example` from the server folder to `.env` and add your private information

*Note: never commit this file, it should be ignored by Git*

```
DATABASE_URL=
REDIS_URL=
PORT=
SESSION_SECRET=
CORS_ORIGIN=
```

## Installation

### SSH

```bash
git clone git@github.com:theMillenniumFalcon/hideout.git
```

### GitHub CLI

```bash
gh repo clone theMillenniumFalcon/hideout
```

### HTTPS

```bash
git clone https://github.com/theMillenniumFalcon/hideout
```


```bash
cd client
yarn
```

```bash
cd server
yarn
```

## Running the app

### For client
```bash
# development
$ npm run dev

# production mode
$ npm run build
```

### For server
```bash
# watch mode
$ npm run watch

# development
$ npm run dev

# production mode
$ npm run build
```

## Project Structure

### server
    .
    ├── dist                    # Compiled javascript files
    ├── src                     # Source files
    └── ...

### client
    .
    ├── generated               # Typescript hooks generated using graphQL
    ├── graphql                 # GraphQL files
    ├── pages                   # nextJS pages
    ├── public                  # assets
    └── ...

### server src Structure

    .
    ├── ...
    ├── src
    │   ├── ...
    │   ├── entities            # Entities for database tables
    │   ├── migrations          # TypeORM migrations
    |   ├── index.ts            # Starting point
    │   └── ...
    └── ...

### I have another question!
