import { useRoutes } from "react-router-dom";
import Categories from "./pages/Categories";
import GamePage from "./pages/GamePage";
import Homepage from "./pages/Homepage";
import HowToPlayPage from "./pages/HowToPlayPage";

const App = () => {
  const routes = [
    { path: "/", element: <Homepage />},
    { path: "/how-to-play", element: <HowToPlayPage />},
    { path: "/categories", element: <Categories />},
  ]

  const routing = useRoutes(routes);

  return routing;
};

export default App;
