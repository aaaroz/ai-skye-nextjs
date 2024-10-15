"use client";
import * as React from "react";
import { TAdminDashboardContext } from "./type";

export const AdminDashboardContext =
  React.createContext<TAdminDashboardContext | null>(null);
