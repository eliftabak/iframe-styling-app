import './App.css';
import Iframe from "./components/Iframe";
import Controller  from "./components/Controller";
import InputStorage from './stores/InputStorage';

function App() {
  return (
    <div className="App flex flex-wrap justify-around my-16">
     <Controller className="w-1/2" InputStorage={InputStorage} />
     <Iframe className="w-1/2" InputStorage={InputStorage}/>
    </div>
  );
}

export default App;
