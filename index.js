import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// ------------------- DATABASE -------------------

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "AB650505ade",
  port: 5432
});

// Connect to the database when the server starts
db.connect()
  .then(() => console.log("Connected to the database"))
  .catch(err => console.error("Connection error", err.stack));



// ------------------- GAME -------------------

async function checkVisited() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  const countries = result.rows.map(country => country.country_code); // [ 'GB', 'US', 'FR' ]
  // result.rows.forEach(country => {countries.push(country.country_code);});
  return countries;
};


app.get("/", async (req, res) => {
  const countries = await checkVisited();
  res.render("index.ejs", {countries: countries, total: countries.length});
});



app.post("/add", async (req, res) => {
  const input = req.body["country"];

  const result = await db.query(
    "SELECT country_code FROM countries WHERE country_name = $1",
    [input]
  );

  console.log(result.rows); // [ { country_code: 'TR' } ]

  // if there is a result
  if (result.rows.length !== 0) {
    const data = result.rows[0]; // { country_code: 'TR' }
    const countryCode = data.country_code; // 'TR'

    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
      countryCode,
    ]);
    res.redirect("/");
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});