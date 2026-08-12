function foodList() {
  return (
    <ul>
      {foodData.map((recipe) => (
        <li key={recipe.id}>{recipe.name}</li>
      ))}
    </ul>
  );
}