import React, { createContext, useContext, useState } from "react";

interface UserContextType {
  userName: string | null;
  userPhoto: string | null;
  setUser: (name: string, photo: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userName, setUserName] = useState<string | null>(null);
  const [userPhoto, setUserPhoto] = useState<string | null>(null);

  const setUser = (name: string, photo: string) => {
    setUserName(name);
    setUserPhoto(photo);
  };

  return (
    <UserContext.Provider value={{userName,userPhoto,setUser}}>
        {children}
    </UserContext.Provider>
  )
};


export const useUser = ():UserContextType=>{
    const context =useContext(UserContext)
    if(!context){
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}