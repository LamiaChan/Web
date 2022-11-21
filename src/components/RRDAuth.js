import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { useStore } from '../store/hooks';

export function RequireNotAuthOrGuest({ children }) {
  const userStore = useStore("userStore");
  //let location = useLocation();

  if (userStore.data.user.bAuth || userStore.data.user.bContinueAsGuest) {
    return <Navigate to={-1} />;
  }

  return children;
}

export function RequireAuth({ children }) {
  const userStore = useStore("userStore");
  let location = useLocation();

  if (!userStore.data.user.bAuth) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
}

export function RequireAuthOrGuest({ children }) {
  const userStore = useStore("userStore");
  let location = useLocation();

  if (!userStore.data.user.bAuth && !userStore.data.user.bContinueAsGuest) {
    return <Navigate to="/guest" state={{ from: location }} replace />;
  }

  return children;
}