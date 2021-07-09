import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./App.scss";
import { store } from "./Config/Redux/store";
import AppRoutes from "./Config/Routes/AppRoutes";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  );
}

export default App;
