"use client";
import * as React from "react";
import { TFeatureContext } from "./type";

export const FeatureContext = React.createContext<TFeatureContext | null>(null);
