import { createContext, useState } from "react";

export const SignedUpContext = createContext({
  signedUp: null,
  setSignedUp: () => null,
});

export const SignedUpProvider = ({ Children }) => {
  const [signedUp, setSignedUp] = useState(null);
  const value = { signedUp, setSignedUp };

  return (
    <SignedUpContext.Provider value={value}>
      {Children}
    </SignedUpContext.Provider>
  );
};
