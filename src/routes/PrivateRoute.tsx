import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import type { JSX } from "react";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  if (!isAuthenticated()) return <Navigate to="/login" replace />;
  return children;
}
