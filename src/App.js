import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoraScreen from "./screens/DoraScreen";
import SabiaScreen from "./screens/SabiaScreen";
import SadisaScreen from "./screens/SadisaScreen";
import KhamisaScreen from "./screens/KhamisaScreen";
import RabiaScreen from "./screens/RabiaScreen";
import SalisaScreen from "./screens/SalisaScreen";
import SaniaScreen from "./screens/SaniaScreen";
import OolaScreen from "./screens/OolaScreen";
import BookDetails from "./screens/BookDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/dorahadith" element={<DoraScreen />} />
          <Route path="/sabia" element={<SabiaScreen />} />
          <Route path="/sadisa" element={<SadisaScreen />} />
          <Route path="/khamisa" element={<KhamisaScreen />} />
          <Route path="/rabia" element={<RabiaScreen />} />
          <Route path="/salisa" element={<SalisaScreen />} />
          <Route path="/sania" element={<SaniaScreen />} />
          <Route path="/oola" element={<OolaScreen />} />
          <Route path="/bookDetails/:id" element={<BookDetails />} />
          <Route path="*" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
