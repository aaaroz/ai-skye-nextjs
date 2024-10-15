import * as React from "react";
import { AuthProvider } from "./auth-provider";
import {
  FeatureContextProvider,
  GenerateAIProvider,
  ProfileContextProvider,
} from "../context";

export const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <AuthProvider>
      <FeatureContextProvider>
        <GenerateAIProvider>
          <ProfileContextProvider>{children}</ProfileContextProvider>
        </GenerateAIProvider>
      </FeatureContextProvider>
    </AuthProvider>
  );
};
