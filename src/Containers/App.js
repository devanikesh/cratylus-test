import "./App.css";
import DivMagic from "./DivMagic";
import { Provider } from "react-redux";
import store from "../store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">Cratylus Div Magic</header>

        <div className="App-body">
          <DivMagic />
        </div>
      </div>
    </Provider>
  );
}

export default App;
