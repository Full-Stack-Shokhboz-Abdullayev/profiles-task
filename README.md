## Installation

```bash
$ yarn
```

### Next step: configure env and database (postgres)

First you can rename `.env.example` to `.env` or create new one and copy the `.env.example`'s content to it. You can freely edit the Data Base Credentials to your needs (if you for instance have some local database tool installed for postgresql). If you want 0 config just use Docker and Docker Compose. After filling up the .env file run `docker-compose up` (optionally `-d`).

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```
