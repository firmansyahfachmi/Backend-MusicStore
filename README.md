# RESTful API Rent Book App


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
$ git clone https://github.com/imambaehaqi/JS-BackendRentBookApp.git
$ cd JS-BackendRentBookApp
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

JWT_SECRET = "YOUR-SECRET"
```
### Start Development Server
```
$ npm start
```

## Documentation

### Books Routes

#### GET Request

 - "/books" => display all books, with default pagination {page:1, limit:10}. Query params:
    - search -> display all books with title that contains the keyword,
	- sortby -> its value is name of column you want to sort,
    - typeby -> its filtering your ascending or descending,
	- available -> displaying list of available books if it's value set to 1, or unavailable books if set to 0,
	- page -> page to display (default 1),
	- limit -> number of books displayed in a page (default 10).

 - "/books/{bookid}" => display one book with the id specified by id parameter.

#### POST Request

 - "/books" => Inserting a book to database. data required = genreid, title, description, image, released.
    - before entering book data, it's insert data genres,
	- note = image is the url to the image, not the actual image.

#### PATCH Request

 - "/books/{bookid}" => Updating a book in database. data required = bookid, genreid, title, description, image, released.

#### DELETE Request

 - "/books/{bookid}" => Deleting a book in database. data required = bookid.


## Optional

 - Active app, you most first Register/Login with JWT.
 - Two level users, regular and admin -> your changed regular to admin at mysql.


### License
----
[ISC](https://en.wikipedia.org/wiki/ISC_license "ISC")
