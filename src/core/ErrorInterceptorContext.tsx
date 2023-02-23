import React, { createContext, useState, useCallback } from "react";

export const InterceptorContext = createContext<null | {}>(null);

const ErrorInterceptorContext = ({ children }: any) => {
  const [error, setError] = useState<any>(null);

  const handleRemoveError = () => {
    setError(null);
  };

  const handleAddError = useCallback((error: {}) => {
    setError(error);
  }, []);

  const initialState = {
    error: error,
    handleRemoveError: handleRemoveError,
    handleAddError: handleAddError,
  };

  return (
    <div>
      <InterceptorContext.Provider value={initialState}>
        {children}
      </InterceptorContext.Provider>
    </div>
  );
};

export default ErrorInterceptorContext;
