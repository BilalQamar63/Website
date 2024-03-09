import  { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import Cards from '../pages/Cards';
// import SignUp from '../pages/SignUp'; 
// Import your SignUp component or any other component for sign up

const PrivateRouter = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user !== null) {
    return <Cards />;
  } else {
    return <Navigate to="/signup" />;
  }
};

export default PrivateRouter;
