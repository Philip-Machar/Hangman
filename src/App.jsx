import { useRoutes } from "react-router-dom";
import Categories from "./pages/Categories";
import GamePage from "./pages/GamePage";
import Homepage from "./pages/Homepage";
import HowToPlayPage from "./pages/HowToPlayPage";
import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [category, setCategory] = useState("");

  const categories = [{id: nanoid(), name: "MOVIES"}, {id: nanoid(), name: "TV SHOWS"}, {id: nanoid(), name: "COUNTRIES"}, {id: nanoid(), name: "CAPITAL CITIES"}, {id: nanoid(), name: "CELEBRITIES"}, {id: nanoid(), name: "SPORTS"}];

  const handleClickedCategory = (id) => {
    const clickedCategory = categories.find((category) => category.id === id);
    setCategory(clickedCategory.name);
  };

  const routes = [
    { path: "/", element: <Homepage />},
    { path: "/how-to-play", element: <HowToPlayPage />},
    { path: "/categories", element: <Categories categories={categories} clickedCategory={handleClickedCategory} />},
    { path: "/game-page", element: <GamePage category={category} />},
  ];

  const routing = useRoutes(routes);

  return routing;
};

export default App;
