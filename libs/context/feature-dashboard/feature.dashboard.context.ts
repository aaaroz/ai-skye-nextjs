"use client";
import * as React from "react";
import { TFeatureDashboardContext } from "./type";

export const FeatureDashboardContext =
  React.createContext<TFeatureDashboardContext | null>(null);
