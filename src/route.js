import { Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import Country from "./Pages/Country";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={App} />
      <Route path="/countrys/:name" component={Country} />
    </BrowserRouter>
  );
}
