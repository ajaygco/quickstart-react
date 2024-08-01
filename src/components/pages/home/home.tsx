// Modules
import * as React from "react";

// Shared
import { Logo } from "@app/components/shared/logo.shared";

// Types
type HomeProps = {};

// Component
export const Home: React.FC<HomeProps> = (): React.ReactElement => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[460px] m-auto flex flex-col items-center p-6">
        <div className="animate__animated animate__bounceIn mb-2">
          <span className="text-2xl text-gray-800 font-display font-bold">
            Up and Running
          </span>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-1s text-center mb-8">
          <span className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            earum corrupti cupiditate. Aliquid officia iure atque provident
            natus.
          </span>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <span className="text-4xl text-gray-800">
            <Logo />
          </span>
        </div>
      </div>
    </div>
  );
};
