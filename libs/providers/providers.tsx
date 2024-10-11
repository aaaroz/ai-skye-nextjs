import * as React from "react";
import { AuthProvider } from "./auth-provider";
import { FeatureContextProvider, ProfileContextProvider } from "../context";

export const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <AuthProvider>
      <FeatureContextProvider>
        <ProfileContextProvider>{children}</ProfileContextProvider>
      </FeatureContextProvider>
    </AuthProvider>
  );
};
