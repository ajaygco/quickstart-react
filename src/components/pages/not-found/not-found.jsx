// Modules
import React from "react";
import { Link } from "react-router-dom";

// Shared
import { Logo } from "components/shared/logo.shared";

// Component: Presentation
export const NotFoundUi = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[460px] m-auto flex flex-col items-center p-6">
        <div className="animate__animated animate__bounceIn mb-2">
          <span className="text-2xl text-gray-800 font-display font-bold">
            Page Not Found
          </span>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-1s text-center mb-8">
          <span className="text-gray-600">
            The page you are looking for does not exist. You may have followed a
            broken link or the page might have been moved or deleted.
          </span>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <Link to="/">
            <span className="text-4xl text-gray-800">
              <Logo />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Component: Logic
export const NotFound = () => {
  return <NotFoundUi />;
};
