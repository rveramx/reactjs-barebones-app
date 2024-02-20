import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => (
  <div className="App">
    <Header />
    <main>
      <HomePage />
    </main>
    <Footer />
  </div>
);

export default App;
