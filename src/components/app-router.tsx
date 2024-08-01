// Modules
import * as React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import { Home } from "@app/components/pages/home/home";
import { NotFound } from "@app/components/pages/not-found/not-found";

// Types
type AppRouterProps = {};

// Component
export const AppRouter: React.FC<AppRouterProps> = (): React.ReactElement => {
  return (
    <div className="w-[100dvw] h-[100dvh] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
