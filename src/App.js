function App() {
  const url =
    "https://api.edamam.com/api/recipes/v2?type=any&beta=false&q=${query}&app_id=${appID}&app_key=${appKey}&mealType=${mealType}";
  const apiKey = "5de7c992664038498e1977584dd23e10";
  const appId = "b94aa4b9";
  return (
    <div className="App">
      <h1>Hello gral</h1>
      <h2>VS code</h2>
    </div>
  );
}

export default App;
