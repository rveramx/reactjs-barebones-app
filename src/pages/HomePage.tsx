import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import loading from "../assets/loading.gif";

import { fetchRandomDogImageAsync } from "../api/dogsApi/dogsApi";

const HomePage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getImageUrl = async (): Promise<void> => {
      setIsLoading(true);
      const url: string = await fetchRandomDogImageAsync();
      setImageUrl(url);
      setIsLoading(false);
    };
    getImageUrl();
  }, []);

  return (
    <div className="home-page">
      <Header />
      <main>
        <div className="container">
          <p>Look at this beauty!</p>
          {isLoading ? (
            <img className="spinner" src={loading} alt="loading spinner" />
          ) : (
            <img className="dog-image" src={imageUrl} alt="Dog image" />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
