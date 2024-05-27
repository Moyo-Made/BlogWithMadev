import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("hero");
});

app.get("/blog", (req, res) => {
	res.render("blog");
});

app.post("/blog", (req, res) => {
	res.render("blog");
});

app.get("/about", (req, res) => {
	res.render("about");
});

app.get("/contact", (req, res) => {
	res.render("contact");
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
