import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Specials from "./pages/Specials";
import SafetyPolicy from "./pages/SafetyPolicy";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import JohannesburgHighlightsPage from "./pages/tours/JohannesburgHighlightsPage";
import SowetoHeritagePage from "./pages/tours/SowetoHeritagePage";
import PretoriaLandmarksPage from "./pages/tours/PretoriaLandmarksPage";
import NorthWestEscapesPage from "./pages/tours/NorthWestEscapesPage";

export default function App() {
  return (
    <Router>
      <main className="relative selection:bg-maroon selection:text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/safety" element={<SafetyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/tours/johannesburg-highlights" element={<JohannesburgHighlightsPage />} />
          <Route path="/tours/soweto-heritage" element={<SowetoHeritagePage />} />
          <Route path="/tours/pretoria-landmarks" element={<PretoriaLandmarksPage />} />
          <Route path="/tours/north-west-escapes" element={<NorthWestEscapesPage />} />
        </Routes>

        <Footer />
      </main>
    </Router>
  );
}
