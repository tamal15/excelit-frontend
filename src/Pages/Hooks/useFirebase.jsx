import {
    getAuth,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
  } from "firebase/auth";
  import { useEffect, useState } from "react";
  import initial from "../Shared/Firebase/firebase.init";
  
  initial();
  
  const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [error, setError] = useState("");
const [role, setRole] = useState('');

    const [toggle, setToggle] = useState(false);
  
    const auth = getAuth();
  
    // Register user with email and password
    const registerUser = (email, password, name, location, navigate) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          verifyEmail();
          const newUser = { email, displayName: name };
          setUser(newUser);
  
          // Save user to database
          sendUser(email, name, 'POST');
  
          // Send name to Firebase after creation
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {})
            .catch(() => {});
  
          setAuthError('');
          const destination = location?.state?.from || '/dashboard';
          navigate(destination); // Use navigate here
        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    };
  
    // Login with email and password
    const loginWithOwnEmailAndPass = (email, password, location, navigate) => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          const destination = location?.state?.from || '/dashboard';
          navigate(destination); // Use navigate here
          setAuthError('');
        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    };
  
    // Verify email
    const verifyEmail = () => {
      sendEmailVerification(auth.currentUser)
        .then(() => {
          console.log("Verification email sent.");
        });
    };
  
    // Log out user
    const userLogOut = () => {
      setIsLoading(true);
      setToggle(false);
      signOut(auth)
        .then(() => {})
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => setIsLoading(false));
    };
  
    // Save user to database
    const sendUser = (email, displayName, method) => {
      const user = { email, displayName };
      fetch('https://excelit-backend.onrender.com/users', {
        method: method,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.error('Error:', error));
    };
  
    // Observer user state
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser({});
        }
        setIsLoading(false);
      });
      return () => unsubscribe();
    }, [auth]);
  
    // Load admin role from database
    useEffect(() => {
      if (user.email) {
        fetch(`https://excelit-backend.onrender.com/userLogin/${user.email}`)
          .then((res) => res.json())
          .then((data) => setAdmin(data?.admin));
      }
    }, [user.email]);

    useEffect(() => {
  if (user.email) {
    fetch(`https://excelit-backend.onrender.com/userRole/${user.email}`)
      .then((res) => res.json())
      .then((data) => setRole(data?.role || 'user'))
      .catch((err) => console.error("Role fetch error:", err));
  }
}, [user.email]);

    // Get role by email
const getUserRole = async (email) => {
  try {
    const res = await fetch(`https://excelit-backend.onrender.com/userRole/${email}`);
    const data = await res.json();
    return data?.role || null;
  } catch (error) {
    console.error("Error fetching user role:", error);
    return null;
  }
};

  
    return {
      user,
      registerUser,
      isLoading,
      authError,
      toggle,
      setToggle,
      error,
      admin,
      userLogOut,
      loginWithOwnEmailAndPass,
      getUserRole,
      role
    };
  };
  
  export default useFirebase;
  