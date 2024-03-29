# Pollitically Correct

Politically Correct is a data visualization app that will be able to search for political candidates that have run for office over time, and then be able to display the contributions that have been made to their camaigns by various individuals or organizations. 

This app will use React.js for the front-end and Node.js and Express.js for the back end. The data is sourced from the OpenFEC API provided by the American Federal Election Commission. 

To Start:

1. In one terminal window, go to the project directory, and type "redis-server". This command will start redis, and have it ready for caching.
2. Open and start postgreSQL. If this is the first time the project is being started, then open a terminal window, enter postgreSQL, and create a database named "receiptsus", then exit postgreSQL and type "psql < receipts.sql" to seed the database.
3. In another terminal window, go to the project directory, then to "back-end", and type "npm start". This will start the server.
4. Open a last terminal window, and go to the front-end directory in the project directory, and type "npm start". This will launch the front end interface.

### APPROACH

I've decided to create the back-end portion first because that will determine which data I will require the front end to handle and deliver to the back-end. 

After that, I will design the front-end of the application that will utilize all of the back-end functionality. 

Starting with 
- setting up the database
- registering a user
- logging in and out
- the api interaction object

While setting up the front-end, I used Create React App (CRA) to quickly set up a react page, and focused on the following objectives in order.

- Creating a router for same-page operation
- Creating a class with which to communicate with the back-end, with methods for user actions, and calling the API and delivering the data to the front-end
- After this I wrote the search page and the results list display
- The candidate page
- The financial overview, top ten contributors, top contribution amounts, and the representation of the contributors by occupation as a chart.

After the main functionality was put in place, I focused on adding features.

- Favoriting 
- Representing data with a graphing library
- Caching

With all the features done, there were just some rough corners to polish.

- Adding flashes for incorrect username/password and not being signed in when trying to favorite.
- Fixing some React rerendering timing

There were issues with testing that were only overcome while finishing the project.

While writing tests for the back-end, I ran into an issue where right on the "describe" function, a TypeError would be thrown reading: "Cannot read properties of undefined (reading 'QueryInterface')". After checking various forums, the most helpful of which is on github.com (https://github.com/sequelize/sequelize-typescript/issues/805), it was apparent that sequelize was the issue, and downgrading to version 5.21.10 was the solution. When attempting the solution however, there was no change, and no other solutions or workarounds made any difference. 

The issue was overcome by deleting a line that was written automatically by VS Code which defined describe as the model which was being called by the routes in the tests.

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

##### Redis

Caching with redis is used to both cut down on load times and reduce API calls. Due to the slowly updating nature of the data (election cycles are at minimum two years long), all data in the cache has an expiration time of two hours.

##### D3.js

D3 was chosen to represent the contributor occupation data due to range of capabilities and ease of implementation.