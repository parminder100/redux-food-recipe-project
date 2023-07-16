import FoodRecipe from './Components/FoodRecipe/FoodRecipe';
import {Provider} from "react-redux";
import Store from './Components/Store/Store';

function App() {
  return (
    <>
      <Provider store={Store}>
        <FoodRecipe />
      </Provider>
    </>
  );
}

export default App;
