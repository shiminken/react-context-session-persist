# react-context-session-persist

---

React state management library built on top of useContext and useReducer with data persistence using session storage.

##Installation

```json
yarn add react-context-session-persist
```

## Usage

---

#### Initialization

Wrap the main entry file with **PersistentContextProvider.**

```json
import { PersistentContextProvider } from 'react-persist-context'
// code before returning...
return (
    <PersistentContextProvider store={store}>
        <App />
    </PersistentContextProvider>
)
```

Declare your store with state and reducer as same as redux

```json
const store = {
    state: yourInitialState
    reducer: yourReducer
}
```

#### Accessing persisted context

After initializing your provider, you can now access the persisted context using usePersistedContext which returns { state, dispatch }

````json
// component who is accessing
import { usePersistedContext } from 'react-persist-context'

const CompononentWhoIsUsing = () => {
    const { state, dispatch } = usePersistedContext()
    /* rest of the code*/
    return (...)
}```
````
