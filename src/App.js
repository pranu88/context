
import './App.css';
import {createContext} from 'react';
import Test from './components/Test';
import Test2 from './components/Test2';
 
export const testContext = createContext();

function App() {
  
 
  return (
    <div className="App">
      <testContext.Provider value="test0">
      
      <Test/>
      </testContext.Provider>
      {/* <Test2/> */}
    </div>

  );
}

export default App;
