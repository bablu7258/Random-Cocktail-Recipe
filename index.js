import express from "express";
import axios from "axios";
const app = express();
const port = 3000;
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const result = response.data;
    const drinkData = result.drinks[0];

    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = drinkData[`strIngredient${i}`];
      const measure = drinkData[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push({
          name: ingredient,
          measure: measure ? measure.trim() : "" 
        });
      } else {
        break;
      }
    }

    // Render the EJS template and pass the processed data to it
    res.render("index.ejs", {
      name: drinkData.strDrink,
      image: drinkData.strDrinkThumb,
      instructions: drinkData.strInstructions,
      ingredients: ingredients 
    });

  } catch (error) {
    // Handle errors if the API call fails
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: "Sorry, we couldn't find a cocktail for you. Please try again!",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
