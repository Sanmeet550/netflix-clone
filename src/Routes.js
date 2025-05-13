import { BrowserRouter, Routes, Route } from "react-router";
import App from "./components/App";
import Home from "./components/Home";
import PopularPage from "./components/PopularPage";
import TopRatedPage from "./components/TopRatedPage";

function movieRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />} />
          <Route path="popular" element={<PopularPage />} />
          <Route path="top-rated" element={<TopRatedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default movieRoute;
