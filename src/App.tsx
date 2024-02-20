import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeProvider from "./context/ThemeProvider";

const App: React.FC = () => (
  <ThemeProvider>
    <div className="App">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;
