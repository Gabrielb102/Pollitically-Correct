# Receipts.US

Currently a work in progress for the Springboard Software Engineering Intensive. 

Receipts.US will be a data visualization app that will be able to search for political candidates that have run for office over time, and then be able to display the contributions that have been made to their camaigns by various individuals or organizations. 

This app will use React.js for the front-end and Node.js and Express.js for the back end. The data is sourced from the OpenFEC API provided by the American Federal Election Commission. 

### APPROACH

I've decided to create the back-end portion first because that will determine which data I will require the front end to handle and deliver to the back-end. 

After that, I will design the front-end of the application that will utilize all of the back-end functionality. 

Starting with 
- database schema
- setting up the database
- registering a user
- logging in and out
- the api interaction object

### TECHNOLOGIES and JUSTIFICATION

##### Sequelize: 

Sequelize is a database-agnostic ORM designed for use with node.js. The Database driver used is pg because this app uses PostgreSQL. 

- Using Sequelize boots security for the users of the app by abstracting the SQL queries used to query the database. 
- Using an ORM also allows route and model logic to be simplified, and redundant code to be minimized. 
- In the case that this project were to be scaled. The ORM also increases consistency in SQL queries in both implementation and performance. 

##### Express.js:

Express is web framework for node.js. NPM was used to manage packages. 

- Having both the front- and back-end written in the same language streamlines production for a single developer by avoiding the need to switch between languages. 
- npm is great for organizing packages and isolating their storage to just the app folders. 
- Express, with it's middleware, allows for easy implementation of admin functionality.
- Use of jwts is simple, and as such, the app can be selective with which data it sends with each requests instead of sending a cookie with each and every request. 

##### React.js

React is front-end development framework that allows the app to be organized into components and to change the layout of the page without necessarily contacting the server.

- By choosing to do most of the front-end work with a powerful framework such as React allows for most of the app (since the front end is written in node.js) to be written in Javascript, which makes development smoother and less confusing for one developer, and easy to switch roles/fill in for others in a team. 
- React can pass information between its components, which makes loading different resources from the API for each part of the app a walk in the park; and it can be done straight from the client-side of the application, reducing load on the server.

##### Create React App:

Create React App automatically creates a boilerplate react application with dependencies included. The app is only configurable after the React App is created however this was considered a more efficient use of time than the time it would take to create the app from scratch. 
