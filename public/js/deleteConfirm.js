document.addEventListener("click", (e) => {
  if (e.target.classList.contains("confirm-delete")) {
    if (!confirm("Are you sure you want to delete this assignment?")) {
      e.preventDefault();
    }
  }
});
