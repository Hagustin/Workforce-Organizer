# Workforce-Organizer
## Description
Employee Tracker is a command-line application using Node.js, Inquirer, and PostgreSQL to manage a company’s employee database. Users can view and add departments, roles, and employees, as well as update employee roles. The application features an intuitive interface and displays data in formatted tables. A walkthrough video is included.


Employee Tracker is a command-line application designed to help businesses manage their employee database. Built using **Node.js**, **Inquirer**, and **PostgreSQL**, the application allows users to view and manage departments, roles (referred to as employee roles), and employees. The user-friendly interface presents data in formatted tables and facilitates easy updates to employee roles.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Database Schema](#database-schema)
- [Walkthrough Video](#walkthrough-video)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the Employee Tracker, follow these steps:

1. Clone the repository:

git clone https://github.com/your_username/workforce-organizer.git
   

2. Navigate to the project directory:


cd workforce-organizer

3. Install the required dependencies:

npm install

4. Set up your PostgreSQL database and configure the connection details in db/dbConnection.ts.

5. Create the database and tables:

psql -U your_username -d employee_db -f db/createTables.sql

6. Seed the database with initial data (if applicable):

 psql -U your_username -d employee_db -f db/seeds.sql

## Usage
To start the application, run the following command:

``` bash

npm start
Follow the prompts in the command line to manage your employee database. You can view all departments, roles, and employees, as well as add new entries and update existing employee roles.
```

## Features
View all departments
View all employee roles
View all employees with their details
Add new departments, roles, and employees
Update employee roles
Data is displayed in formatted tables for better readability
Database Schema
The database consists of three tables:

## Design
![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/100-sql-challenge-ERD.png)

As the image illustrates, your schema should contain the following three tables:

* `department`

  * `id`: `SERIAL PRIMARY KEY`

  * `name`: `VARCHAR(30) UNIQUE NOT NULL` to hold department name

* `role`

  * `id`: `SERIAL PRIMARY KEY`

  * `title`: `VARCHAR(30) UNIQUE NOT NULL` to hold role title

  * `salary`: `DECIMAL NOT NULL` to hold role salary

  * `department_id`: `INTEGER NOT NULL` to hold reference to department role belongs to

* `employee`

  * `id`: `SERIAL PRIMARY KEY`

  * `first_name`: `VARCHAR(30) NOT NULL` to hold employee first name

  * `last_name`: `VARCHAR(30) NOT NULL` to hold employee last name

  * `role_id`: `INTEGER NOT NULL` to hold reference to employee role

  * `manager_id`: `INTEGER` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)


## Walkthrough Video
Watch the walkthrough video to see how the Employee Tracker application works: [Watch the Video](https://drive.google.com/file/d/1FLUhgZLPQ3Ry3VN8pkkuIm1Pve3QcuQK/view?usp=sharing)

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request. For any major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

### Customization

- **Links**: Make sure to replace placeholders such as `https://github.com/your_username/workforce-organizer.git` and `link_to_your_video` with your actual GitHub repository link and the link to your walkthrough video.
- **Add More Sections**: If you have additional features or sections you'd like to include, feel free to add them to the `README.md`.

Let me know if you need further modifications or additions!
