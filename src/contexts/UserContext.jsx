import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for user data
const UserContext = createContext();

// UserProvider component to wrap around your application
export const UserProvider = ({ children }) => {
  // State to hold the current user, initialized from localStorage
  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null; // Parse and set user if exists
  });

  // Effect to synchronize currentUser with localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser)); // Store user in local storage
    } else {
      localStorage.removeItem('currentUser'); // Clear from local storage if user is logged out
    }
  }, [currentUser]);

  // Logout function to clear user data
  const logout = () => {
    setCurrentUser(null); // Clear user in context
    localStorage.removeItem('currentUser'); // Clear from local storage
  };

  const setUserVal = (user) => {
    setCurrentUser(user)
  }

  // Provide the currentUser and logout function to child components
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, logout, setUserVal }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

