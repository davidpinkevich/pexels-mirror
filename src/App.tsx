import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "pages/MainPage/MainPage";
import SearchPage from "pages/SearchPage/SearchPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="search" element={<Navigate to="/" replace />} />
        <Route path="search/:value" element={<SearchPage />} />
      </Routes>
    </div>
  );
};

export default App;
