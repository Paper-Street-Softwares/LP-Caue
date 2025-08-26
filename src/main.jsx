import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./i18n"; // ← importa a configuração do idioma

import Index from "./pages/Index.jsx";
import Lp01 from "./pages/Lp01.jsx";

import WhatsAppLinks from "./components/interactives/WhatsappLinks.jsx";

// Layout fixo para o modo "site"
import SiteLayout from "./pages/SiteLayoult.jsx";
import Features from "./components/sections/Features.jsx";
import About from "./components/sections/About.jsx";
import Faq from "./components/sections/Faq.jsx";

import "./index.css";
import "./styles/backgrounds.css";
import BlogPosts from "./components/sections/BlogPosts.jsx";
import Maps from "./components/sections/Maps.jsx";
import AboutInstagram from "./components/sections/AboutInstagram.jsx";

// Altere aqui para "LP" ou "site"
const mode = "LP"; // só muda isso e o resto se adapta

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    {mode === "LP" ? (
      <Routes>
        <Route path="/" element={<Index mode={mode} />} />
        {/* <Route path="/" element={<Lp01 />} /> */}
        {/* <Route path="/whatsapp" element={<WhatsAppLinks />} /> */}

        {/* <Route path="/whatsapp" element={<WhatsAppLinks form={true} />} /> */}
      </Routes>
    ) : (
      <Routes>
        <Route path="/" element={<SiteLayout mode={mode} />} />
        <Route path="home" element={<SiteLayout mode={mode} />} />
        <Route
          path="/service"
          element={
            <SiteLayout
              mode={mode}
              section={<Features defaultFeature={true} />}
            />
          }
        />
        <Route
          path="/about"
          element={
            <SiteLayout
              mode={mode}
              section={
                <>
                  <About />
                  <AboutInstagram instagram={true} />
                </>
              }
            />
          }
        />

        <Route
          path="/blog"
          element={<SiteLayout mode={mode} section={<BlogPosts />} />}
        />

        <Route
          path="/faq"
          element={<SiteLayout mode={mode} section={<Faq />} />}
        />

        <Route
          path="/maps"
          element={<SiteLayout mode={mode} section={<Maps />} />}
        />
      </Routes>
    )}
  </Router>
);
