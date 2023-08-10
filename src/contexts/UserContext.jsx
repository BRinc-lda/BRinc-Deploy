import { createContext, useState } from "react";

const UserContext = createContext();

export default UserContext;

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [bookDetailsPage, setBookDetailsPage] = useState(false);

  return (
    <UserContext.Provider
      value={{ user, setUser, bookDetailsPage, setBookDetailsPage }}
    >
      {children}
    </UserContext.Provider>
  );
}
