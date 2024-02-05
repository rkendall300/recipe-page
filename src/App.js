import './App.css';

function App() {
  return (
    <main>
      <div id="backdrop">
        <div id="card">
          <div id="fm-image-container">
            <div id="fm-image"></div>
          </div>
          <div id="info">
            <h1 id="title">Simple Omelette Recipe</h1>
            <p id="title-description">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
            <div id="preptime-section">
              <h2 id="preptime">Preparation time</h2>
              <ul id="preptime-list">
                <li className="prep" id="total"><span className="bold">Total:</span> Approximately 10 minutes</li>
                <li className="prep" id="preparation"><span className="bold">Preparation:</span> 5 minutes</li>
                <li className="prep" id="cooking"><span className="bold">Cooking:</span> 5 minutes</li>
              </ul>
            </div>
            <div id="ingredients-section">
              <h3 className="heading">Ingredients</h3>
              <ul id="ingredients-list">
                <li className="ingredients">2-3 large eggs</li>
                <li className="ingredients">Salt, to taste</li>
                <li className="ingredients">Pepper, to taste</li>
                <li className="ingredients">1 tablespoon of butter or oil</li>
                <li className="ingredients">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
              </ul>
            </div>
            <div id="instructions-section">
              <h3 className="heading">Instructions</h3>
              <ol id="instructions-list">
                <li className="instructions"><span className="bold">Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
                <li className="instructions"><span className="bold">Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</li>
                <li className="instructions"><span className="bold">Cook the omelette:</span> Once butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
                <li className="instructions"><span className="bold">Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
                <li className="instructions"><span className="bold">Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
                <li className="instructions"><span className="bold">Enjoy:</span> Serve hot, with additional salt and pepper if needed.</li>
              </ol>
            </div>
            <div id="nutrition-section">
              <h3 className="heading">Nutrition</h3>
              <p id="table-description">The table below shows nutritional values per serving without the additional fillings.</p>
              <div id="table">
                <table>
                  <tr>
                    <td className="table-left">Calories</td>
                    <td className="table-bold">277kcal</td>
                  </tr>
                  <tr>
                    <td className="table-left">Carbs</td>
                    <td className="table-bold">0g</td>
                  </tr>
                  <tr>
                    <td className="table-left">Protein</td>
                    <td className="table-bold">20g</td>
                  </tr>
                  <tr>
                    <td className="table-left">Fat</td>
                    <td className="table-bold">22g</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
