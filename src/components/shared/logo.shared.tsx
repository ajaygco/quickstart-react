// Modules
import * as React from "react";

// Common
import { appConfig } from "common/configs.common";

// Component: Presentation
export const LogoUi = (): React.ReactElement => {
  return <span className="font-brand lowercase">{appConfig.appName}</span>;
};

// Component: Logic
export const LogoLogic = (): React.ReactElement => {
  return <LogoUi />;
};

// Component: Memo
export const Logo = React.memo((): React.ReactElement => {
  return <LogoLogic />;
});
