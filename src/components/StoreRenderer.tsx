import React, { useEffect, useState } from "react";
import Home from "./pages/store/Home";

const componentsMap: { [key: string]: React.ComponentType } = {
  '#': Home,
  // '#browse': Browse,
  // '#discover': Discover,
  // '#pointshop': PointShop,
  // '#curators': Curators,
  // '#giftcards': GiftCards,
  // '#news': News,
  // '#wishlist': Wishlist,
  // '#cart': Cart,
};

const StorePage = () => {
  const [currentComponent, setCurrentComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentComponent(componentsMap[hash] || Home);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Set initial component based on current hash

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const ComponentToRender = currentComponent || Home;

  return <ComponentToRender />;
};

export default StorePage;