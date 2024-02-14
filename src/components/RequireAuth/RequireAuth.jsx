import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function RequireAuth({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {
      console.log('Not an authorized user. Please sign-in');
      return navigate('/');
    }
  }, [navigate]);

  return <>{children}</>;
}

export default RequireAuth;
