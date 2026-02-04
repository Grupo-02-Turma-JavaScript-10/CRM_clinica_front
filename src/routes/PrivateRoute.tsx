import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/Auth";
import type { JSX } from "react";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  if (!isAuthenticated()) return <Navigate to="/login" replace />;
  return children;
}
