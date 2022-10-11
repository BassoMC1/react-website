import React, {FC, createContext} from 'react';
import './App.css';
import { Person,  HairColor } from './componets/Person';

interface AppContextinterface {
    name: string;
    age: number;
    country: string;
}
const AppContext = createContext<AppContextinterface | null>(null)

const App: FC = () => {
  
  const contextValue: AppContextinterface = {
    name: "Pedro",
    age: 20,
    country: "Norway"
  }

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <Person name="John" age={673} email="noob@gmail.com" hairColor={HairColor.blond} />
    </div>
    </AppContext.Provider>
  );
}

export default App;
