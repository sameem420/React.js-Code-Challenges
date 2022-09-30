import "./App.css";
import "./index.css";
import ColorRenderer from "./01-color-renderer/ColorRenderer";
import DarkMode from "./02-dark-mode/DarkMode";
import FormValidator from "./03-form-validator/FormValidator";
import DogPics from "./04-dog-pics/DogPics";
import ScoreKeeper from "./05-score-keeper/ScoreKeeper";

function App() {
  return (
    <div className="App">
      {/* <ColorRenderer /> */}
      {/* <DarkMode /> */}
      {/* <FormValidator /> */}
      {/* <DogPics /> */}
      <ScoreKeeper />
    </div>
  );
}

export default App;
