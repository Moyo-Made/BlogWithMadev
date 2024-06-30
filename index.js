//index.js

import express from "express/index.js";
import bodyParser from "body-parser";

const app = express();
const port = 3100;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

let blogs = [];

app.get("/", (req, res) => {
	res.render("hero");
});

app.get("/blog", (req, res) => {
	res.render("blog", { blogs: blogs });
});

app.post("/save", (req, res) => {
	const { title, description } = req.body;
	blogs.push({ title, description });
	res.redirect("/blog");
});

// Post request for delete
app.post("/delete/:index", (req, res) => {
	const index = parseInt(req.params.index);
	blogs.splice(index, 1);
	res.redirect("/blog");
});

// Post request for update
app.post("/update/:index", (req, res) => {
	const index = parseInt(req.params.index, 10);
	if (index >= 0 && index < blogs.length) {
		const { title, description } = req.body;
		blogs[index] = { title, description };
	}
	res.redirect("/blog");
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
