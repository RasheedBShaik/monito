// // https://www.figma.com/design/6Au2BjPerA4Mq2ANNW3P2k/-FREE-TEMPLATE--eCommerce-Website---Monito-Pets-for-Best--Community---Community-?node-id=1-4&p=f&t=d0FqQYQ8811uDlYu-0
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Corrected import
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router basename="/monito">
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
