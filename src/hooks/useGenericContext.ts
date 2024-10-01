import { useContext, Context } from "react";

export const useGenericContext = <T>(
  genericContext: Context<T | undefined>
): T => {
  const contextIsDefined = useContext(genericContext);
  if (!contextIsDefined) {
    throw new Error("useGenericContext must be used within a Provider");
  }
  return contextIsDefined;
};
