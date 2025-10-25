// Not an Effect: Initializing the application
if (typeof window !== "undefined") {
  // Check if we're running in the browser.
  checkAuthToken();
  loadDataFromLocalStorage();
}

// Not an Effect: Buying a product
useEffect(() => {
  // 🔴 Wrong: This Effect fires twice in development, exposing a problem in the code.
  fetch("/api/buy", { method: "POST" });
}, []);

function handleClick() {
  // ✅ Buying is an event because it is caused by a particular interaction.
  fetch("/api/buy", { method: "POST" });
}
