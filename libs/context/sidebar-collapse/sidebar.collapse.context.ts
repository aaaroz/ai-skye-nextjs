"use client";
import * as React from "react";
import { TToggleSidebarCollapseContext } from "./type";

export const ToggleSidebarCollapseContext =
  React.createContext<TToggleSidebarCollapseContext | null>(null);
