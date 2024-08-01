// Modules
import * as React from "react";

// Common
import { appConfig } from "@app/common/configs.common";

// Types
type LogoProps = {};

// Component
export const Logo: React.FC<LogoProps> = (): React.ReactElement => {
  return <span className="font-brand lowercase">{appConfig.appName}</span>;
};
