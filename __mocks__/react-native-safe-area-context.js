import React from 'react';

export const SafeAreaProvider = ({children}) => <>{children}</>;
export const SafeAreaView = ({children}) => <>{children}</>;

export const useSafeAreaInsets = () => {
  return {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };
};

