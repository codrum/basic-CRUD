# basic-CRUD
This is a full CRUD project using a NodeJS (Express) API, MongoDB, and a frontend using jQuery and Bootstrap

This node.js app allows for the very basic CRUD operations

- create an event
- edit events
- delete events

## Requirements

* Node 8
* Git

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/codrum/basic-CRUD.git
cd basic-CRUD
cd client
npm install
cd ..
cd server
npm install
```

## Steps for DB access

Create a .env in the /server directory with the following properties

```bash
MONGODB_CLUSTER_NAME="promineoweek12"
MONGODB_USER="admin"
MONGODB_PASSWORD="WP8XicaVvMYXPlvL"
```

To start the express server, run the following

```bash
cd server
node app.js
```

Open via live server [http://localhost:5050](http://localhost:5050) and take a look around.
