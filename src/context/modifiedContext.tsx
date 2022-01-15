import React, { createContext, useContext, useEffect, useReducer, useRef } from 'react';
import { sessionStorageUtils } from 'd2c-ui-shared-kh';
import persistData from '../controllers/persistData';
import { StoreType } from './createStore';

interface ProviderPropType {
  children: React.ReactNode;
  store: StoreType;
}

const ModifiedContext = createContext<any>(null);

export const usePersistedContext = () => {
  return useContext(ModifiedContext);
};

export const PersistContextProvider: React.FC<ProviderPropType> = ({ children, store = {} }) => {
  const isMounted = useRef(false);
  const [state, dispatch] = useReducer(store?.reducer || (() => {}), persistData(store?.state) || {});

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      sessionStorageUtils.set('react-persisted-data', state);
    }
  }, [state]);

  return (
    <ModifiedContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </ModifiedContext.Provider>
  );
};
