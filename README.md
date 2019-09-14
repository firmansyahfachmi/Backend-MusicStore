<h1 align="center">REST API Backend-MusicStore</h1>
<div align="center">
   <a href="#">
    <img src="https://img.shields.io/badge/npm-6.9.0-brightgreen.svg?style=flat-square" alt="npm version">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/NodeJS-12.4.0-blue.svg?style=flat-square" alt="npm version">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/ExpressJS-4.x-orange.svg?style=flat-square" alt="npm version">
  </a>
</div>
 <br><br><br>


<p align="center">
  <a href="https://nodejs.org/">
    <img alt="restfulapi" title="Restful API" src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

----

## Introduction 
  
   This is backend only for RSET-API of Music Store. Built with NodeJs using the ExpressJs Framework. Express.js is a web application framework for Node.js. More about Express

## Requirements
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.
- Postman - Download and Install [Postman](https://www.getpostman.com/downloads) - Implementation with postman latest version.

## Installation
### Clone
```
$ git clone https://github.com/firmansyahfachmi/Backend-MusicStore.git
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

- Root endpoint : `"/anekamusik"`

### 1. Category Routes

#### - GET Request
 
- `"/"` => Get category data from database

#### - POST Request

 - `"/"` => Inserti new category to database
 

 ### 2. Branch Routes

#### - GET Request
 
 - `"/branch"` => Get branch data from database

 
 ### 3. Products Routes

#### - GET Request
 
 - `"/products/{:category}"` => Get products data from database by category
 - `"/products/detail/{:name}"` => Get detail of products from database by name of products
 - `"/productsTable"` => Get data products table from database
 - `"/products/search/{:name}"` => Get products data by search

#### - POST Request

 - `"/products"` => Insert new product to database

#### - PATCH Request

 - `"/products/{:id}"` => Updating a product in database

#### - DELETE Request

 - `"/products/{:id}"` => Deleting a product in database



### License
----

