import { Navigate } from 'react-router-dom';
import { useUserStore } from '../stores/user';

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const token = useUserStore(s => s.token);

  if (!token) return <Navigate to="/login" replace />;

  return children;
}
