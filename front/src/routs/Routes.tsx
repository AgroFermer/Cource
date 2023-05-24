import React from "react";
import { useRouter } from "next/router";
import HomePage from "../pages/pagas_system/HomePage";

const Routes = () => {
  const router = useRouter();

  const renderPage = () => {
    switch (router.pathname) {
      case "/":
        return <HomePage />;
      case "/statistics":
        return <h1>Statistics Page</h1>;
      case "/customers":
        return <h1>Customers Page</h1>;
      case "/diagrams":
        return <h1>Diagrams Page</h1>;
    }
  };

  return <>{renderPage()}</>;
};

export default Routes;