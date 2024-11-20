import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </main>
  );
}

export default App;
