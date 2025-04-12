// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) {
    // Redirect to login page if no user is logged in
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
