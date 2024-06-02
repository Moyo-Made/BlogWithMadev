document.addEventListener("DOMContentLoaded", () => {
	const createBlogButton = document.getElementById("create-blog-button");
	const addBlogSection = document.getElementById("add-blog-posts");
	const createBlogSection = document.getElementById("create-blog-section");

	function toggleFormVisibility() {
		if (
			addBlogSection.style.display === "none" ||
			!addBlogSection.style.display
		) {
			addBlogSection.style.display = "block";
			createBlogButton.style.display = "none"; // Hide the button when the form is visible
		} else {
			addBlogSection.style.display = "none";
			createBlogButton.style.display = "block"; // Show the button when the form is hidden
		}
	}

	if (createBlogButton) {
		createBlogButton.addEventListener("click", toggleFormVisibility);
	}

	// Handle showing the update form
	document.querySelectorAll(".update-button").forEach((button) => {
		button.addEventListener("click", function () {
			const index = button.getAttribute("data-index");
			const updateForm = document.querySelector(
				`form.update-form[action="/update/${index}"]`
			);
			if (updateForm) {
				updateForm.style.display = "block";
				button.style.display = "none";
			}
		});
	});

	// Handle the description
	document.querySelectorAll(".add-description-button").forEach((button) => {
		button.addEventListener("click", function () {
			const index = button.getAttribute("data-index");
			const fullDesc = document.getElementById(`full-desc-${index}`);
			if (fullDesc.style.display === "none") {
				fullDesc.style.display = "block";
				button.textContent = "Hide Blog"; // Optionally change button text
			} else {
				fullDesc.style.display = "none";
				button.textContent = "View Blog"; // Optionally change button text back
			}
		});
	});
});
