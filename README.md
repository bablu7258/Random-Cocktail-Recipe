Random Cocktail Recipe Generator
This is a minimal web app constructed using Node.js and Express that makes a GET request to TheCocktailDB API and returns a random cocktail recipe. It's a showcase of incorporating a public API into a server-side web application.

Features
Random Recipes: You get a fresh cocktail recommendation each time you reload the page or press the button.

Detailed Information: Shows the name of the cocktail, an image, the list of ingredients with quantities, and step-by-step instructions.

Clean UI: Clean, responsive recipe card design that is readable.

Robust Error Handling: Displays a friendly message if the API does not respond.

API Used
This project utilizes the free, open TheCocktailDB API.

Endpoint: https://www.thecocktaildb.com/api/json/v1/1/random.php

Authentication: No API key.

Setup and Installation
To get this project on your local machine, please follow these steps.

Prerequisites
Node.js on your machine.

nodemon installed globally (development-recommended). You can install it with:

npm install -g nodemon

Installation Steps
Clone the repository onto your local computer:
git clone (https://github.com/bablu7258/Random-Cocktail-Recipe.git)

Change into the project directory:
cd your-repo-name

Install project dependencies:
This reads the package.json file and installs packages such as Express, Axios, and EJS.

npm i

How to Run the Application
After the setup is complete, you can run the server.

Start the server with nodemon:
nodemon will also restart the server whenever you save a file, very handy for development.

nodemon index.js

Alternatively, without nodemon:

node index.js

Launch your web browser and point to the following URL:
http://localhost:3000

You should now have the random cocktail generator site running!
