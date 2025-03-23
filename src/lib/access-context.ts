import { createContext } from "react";
import { AccessMap } from "./types";

export const AccessContext = createContext<AccessMap | undefined>(undefined);