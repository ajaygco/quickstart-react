// Modules
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import { Splash } from "components/pages/splash/splash";
import { NotFound } from "components/pages/not-found/not-found";

// Component: Presentation
export const AppRouterUi = () => {
  return (
    <div className="w-[100dvw] h-[100dvh] flex">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

// Component: Logic
export const AppRouter = () => {
  return <AppRouterUi />;
};
