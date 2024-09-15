import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/home";
import ButtonPage from "./pages/buttons";
import BadgesPage from "./pages/badges";
import AlertPage from "./pages/alerts";
import CardPage from "./pages/cards";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buttons" element={<ButtonPage />} />
          <Route path="/alerts" element={<AlertPage />} />
          <Route path="/badges" element={<BadgesPage />} />
          <Route path="/cards" element={<CardPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
