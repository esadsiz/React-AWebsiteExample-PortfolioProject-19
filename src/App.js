import "./routes.styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { pagesObj } from "./pages.texts";
import Home from "./routes/home/home.component";
import Entdecken from "./routes/entdecken/entdecken.component";
import Holdenprofi from "./routes/holdenprofi/holdenprofi.component";
import NavBar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import { useState } from "react";
import DerFirma from "./routes/derfirma/derfirma.component";
import Werkzeugen from "./routes/werkzeugen/werkzeugen.component";

if (!Boolean(localStorage.entdeckenCardsLocal)) {
  localStorage.setItem(
    "entdeckenCardsLocal",
    JSON.stringify(pagesObj.entdecken.cards)
  );
}

const entdeckenCardsLocal = JSON.parse(
  localStorage.getItem("entdeckenCardsLocal")
);

function App() {
  const [entdeckenCards, setEntdeckenCards] = useState(entdeckenCardsLocal);

  return (
    <div>
      <BrowserRouter>
        <div className="routes">
          <NavBar navBarProps={pagesObj.navbar} />
          <Routes>
            <Route path="/" element={<Home homeProp={pagesObj.home} />} />
            <Route
              path="entdecken"
              element={
                <Entdecken
                  entdeckenCardsProp={entdeckenCards}
                  setEntdeckenCardsProp={setEntdeckenCards}
                  entdeckenProp={pagesObj.entdecken}
                />
              }
            />
            <Route
              path="werkzeugen"
              element={<Werkzeugen werkzeugenProp={pagesObj.werkzeugen} />}
            />

            <Route
              path="derfirma"
              element={<DerFirma derfirmaProp={pagesObj.derfirma} />}
            />
            <Route
              path="holdenprofi"
              element={<Holdenprofi holdenprofiProp={pagesObj.holdenprofi} />}
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer footerProp={pagesObj.footer} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
