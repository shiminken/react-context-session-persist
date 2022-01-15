import { StateType } from '../context/createStore';
import sessionStorageUtils from "../utils/sessionStorage";

const persistData = (initialState: StateType) => {
  const persistedData = sessionStorageUtils.get('react-persisted-data') || null;

  if (!persistedData) {
    sessionStorageUtils.set('react-persisted-data', initialState);
    return {
      ...initialState
    };
  }

  return persistedData;
};

export default persistData;
