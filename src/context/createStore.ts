export type ActionType = {
  type: string;
  payload: any;
};

export type StateType = any;

type ReducerType = (state: StateType, action: ActionType) => StateType;

interface StoreInterface {
  state: StateType;
  reducer: ReducerType;
}

export type StoreType = StoreInterface | null | undefined;

const createStore = (initialState: StateType, reducer: ReducerType): StoreType => {
  return {
    state: initialState,
    reducer
  };
};

export default createStore;
