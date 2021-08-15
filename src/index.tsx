import { render } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

export { QuestionPage } from "./Question-Page/question-page";
export { HomePage } from "./Home-Page/home-page";
export { HeaderComponent } from "./Header-Components/header";
export { QuestionComponent } from "./Question-Page/question-page";
export { RouteComponents } from "./Route-Components/route-components";
export { NewsLetter } from "./Newsletter/news-letter";

const rootElement = document.getElementById("root");
render(
  <Router>
    <App />
  </Router>,
  rootElement
);
