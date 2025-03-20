import React, { createContext, useState, useContext, ReactNode } from 'react';
import Cookies from 'js-cookie';

// Define types for context state and actions
interface RoleContextType {
  isAdmin: boolean;
  isUser: boolean;
  setRole: (role: string) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const roleFromCookie = Cookies.get('role');
  const [isAdmin, setIsAdmin] = useState(roleFromCookie === 'admin');
  const [isUser, setIsUser] = useState(roleFromCookie === 'user');

  const setRole = (role: string) => {
    Cookies.set('role', role, { expires: 1 / 24 }); // Store in cookies for persistence
    if (role === 'admin') {
      setIsAdmin(true);
      setIsUser(false);
    } else if (role === 'user') {
      setIsUser(true);
      setIsAdmin(false);
    }
  };

  return (
    <RoleContext.Provider value={{ isAdmin, isUser, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};
