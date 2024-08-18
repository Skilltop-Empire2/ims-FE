import { createContext, useState } from "react";

//the actual value
export const SignedInContext = createContext({
  signedIn: null,
  setSignedIn: () => null,
});

export const SignedInProvider = ({ children }) => {
  const [signedIn, setSignedIn] = useState(null);
  const value = { signedIn, setSignedIn };

  return (
    <SignedInContext.Provider value={value}>
      {children}
    </SignedInContext.Provider>
  );
};
