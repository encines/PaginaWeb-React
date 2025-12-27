import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

// Importa las nuevas páginas
import HomePage from "./pages/HomePage";
import BrincolinesPage from "./pages/BrincolinPage";
import Contact from "./pages/Contact";
import Cotizar from "./pages/Cotizar";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brincolines" element={<BrincolinesPage />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/cotizar" element={<Cotizar />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
