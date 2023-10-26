# ORM_E-Commerce-Back-End_HuiPan

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

1. [Description](#userStory)

2. [Installation](#installation)

3. [Usage](#usage)

4. [Contributions](#contributions)

5. [Questions](#questions)

## Description

This is a mysql-application backend for an e-commerce Website, built with MySQL2, Express, Sequelize and dotenv.

```
User Story:
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

```
Acceptance Criteria:
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Installation

- 1.Download GitHub repository: [Github Repository]https://github.com/HuiPan-Peter/ORM_E-Commerce-Back-End_HuiPan
- 2.Open folder with VSCode to check "dependencies": {
  "dotenv": "^8.2.0",
  "express": "^4.17.1",
  "mysql2": "^2.2.5",
  "sequelize": "^6.3.5"
  };
- 3.Under node command-line run `npm i` to install dotenv, express, mysql2 and sequelize;

## Usage

- 1.Create a file in the root directory titled ".env" and assign your own "DB_NAME","DB_PW" and "DB_USER"
- 2.Under db directory, type "mysql -u root -p" in the terminal and enter your personal MySQL password. Next, type "source schema.sql" to create the ecommerce_db database with mock data.
- 3.Under root directory, run bash command `npm run seed` to invoke package.json {
  "seed": "node seeds/index.js"
  } to insert mock data into the ecommerce_db database;
- 4.Under root directory, run bash command `npm start` to start the application;
- 5.Open Insomnia to test GET routes for categories, products, or tags;
- 6.Still in Insomnia, test POST, PUT, and DELETE routes for categories, products, or tags;

---

## Walkthrough Video Demo and Screenshot of the Application

## [https://github.com/HuiPan-Peter/ORM_E-Commerce-Back-End_HuiPan/tree/main/videoDemo%26Screenshots](https://github.com/HuiPan-Peter/ORM_E-Commerce-Back-End_HuiPan/tree/main/videoDemo%26Screenshots)

## Contributions

https://github.com/HuiPan-Peter

## License

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

```
     https://opensource.org/licenses/MIT

    Licensed under the MIT License

    Copyright u00A9 [2023] [Hui Pan]
    Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
```

## Questions

If you have any questions about this application, Contact Me:

```
Github: https://github.com/HuiPan-Peter

Email:  guaranstone@gmail.com
```
