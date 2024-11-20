import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </main>
  );
}

export default App;
