import "./App.css";
import "./index.css";
import ColorRenderer from "./01-color-renderer/ColorRenderer";
import DarkMode from "./02-dark-mode/DarkMode";
import FormValidator from "./03-form-validator/FormValidator";

function App() {
  return (
    <div className="App">
      {/* <ColorRenderer /> */}
      {/* <DarkMode /> */}
      <FormValidator />
    </div>
  );
}

export default App;
