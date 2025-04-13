import { createContext } from "react";
import { AccessMap } from "./types";

/**
 * Internal context for sharing access map between AccessProvider and AccessGuard
 */
export const AccessContext = createContext<AccessMap | undefined>(undefined);