"use client";
import * as React from "react";
import { TProfileContext } from "./type";

export const ProfileContext = React.createContext<TProfileContext | null>(null);
