import { ClickToComponent } from "click-to-react-component";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SpendingConstextProvider } from "./context/spendingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SpendingConstextProvider>
    <ClickToComponent />
    <App />
  </SpendingConstextProvider>
);
