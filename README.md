# REST API Backend-MusicStore


<p align="center">
  <a href="https://nodejs.org/">
    <img alt="restfulapi" title="Restful API" src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

----
## Table of contents
* [Prerequiste](#prerequiste)
* [Installation](#installation)
* [Documentation](#documentation)
* [Optional](#optional)
* [License](#license)

## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.
- Postman - Download and Install [Postman](https://www.getpostman.com/downloads) - Implementation with postman latest version.

## Installation
### Clone
```
$ git clone https://github.com/
$ cd Backend-MusicStore
$ npm install
```

### Create Environment Variable
```
$ cp .env.example .env
$ nano .env
```

```
SERVER_PORT = YOUR-PORT

DB_HOST = "YOU-DB-HOST"
DB_USER = "YOUR-DB-USER"
DB_PASSWORD = "YOUR-DB-PASSWORD"
DB_NAME = "YOUR-DB-NAME"

```
### Start Development Server
```
$ npm start
```
or
```
$ npm run server
```

## Documentation

### Routes

#### GET Request
 - Root endpoint : /anekamusik
 - "/" => display all category, with default pagination {page:1, limit:10}. Query params:
    - typeby -> its filtering your ascending or descending,
	- available -> displaying list of available books if it's value set to 1, or unavailable books if set to 0,
	- page -> page to display (default 1),
	- limit -> number of books displayed in a page (default 10).

#### POST Request

 - "/" => Inserting a category to database. data required = genreid, title, description, image, released.
    - before entering book data, it's insert data genres,
	- note = image is the url to the image, not the actual image.

#### PATCH Request

 - "/books/{bookid}" => Updating a book in database. data required = bookid, genreid, title, description, image, released.

#### DELETE Request

 - "/books/{bookid}" => Deleting a book in database. data required = bookid.



### License
----

