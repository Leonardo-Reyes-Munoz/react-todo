import { useNavigate } from 'react-router-dom';
function RequireAuth({ children }) {
  const navigate = useNavigate();

  const jwtToken = localStorage.getItem('jwtToken');

  if (!jwtToken) {
    console.log('Not an authorized user. Please sign-in');
    navigate('/');
  }

  return children;
}

export default RequireAuth;
