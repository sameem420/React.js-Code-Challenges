import "./App.css";
import "./index.css";
import ColorRenderer from "./01-color-renderer/ColorRenderer";
import DarkMode from "./02-dark-mode/DarkMode";
import FormValidator from "./03-form-validator/FormValidator";
import DogPics from "./04-dog-pics/DogPics";
import ScoreKeeper from "./05-score-keeper/ScoreKeeper";
import ToggleWindowEvent from "./06-add-window-event/ToggleWindowEvent";

function App() {
  return (
    <div className="App">
      {/* <ColorRenderer /> */}
      {/* <DarkMode /> */}
      {/* <FormValidator /> */}
      {/* <DogPics /> */}
      {/* <ScoreKeeper /> */}
      <ToggleWindowEvent />
    </div>
  );
}

export default App;
