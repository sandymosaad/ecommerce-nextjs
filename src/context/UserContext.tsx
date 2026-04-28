"use client"

import {createContext, useContext} from "react"


interface UserContextType {
    token: string | null;
    name: string | null;
    id: string | null;
    email: string | null;
    role: string | null;
}

const UserContext = createContext<UserContextType>({
    token: null,
    name: null,
    id: null,
    email: null,
    role: null,
})

export const useUserContext = () => useContext(UserContext)

export function UserProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: UserContextType;
}) {
        
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}