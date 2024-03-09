import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase-auth";
import { Navigate } from "react-router-dom"; 

export const PublicRouter = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        // Cleanup function
        return () => unsubscribe();
    }, []);

    if (user !== null) {
        // User is logged in, navigate to home
        return <Navigate to="/" />;
    } else {
        // User is not logged in, show the sign-up page
        return <Navigate to="/signUp" />;
    }
};
