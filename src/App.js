import './App.css';
import Iframe from "./components/Iframe";
import { useState } from 'react';
import Controller  from "./components/Controller";

function App() {

  const [inputStorage, setInputStorage] = useState('');
  const [colorStorage, setColorStorage] = useState('bg-gray-300');

  const onInputChangeHandle = (value) => {
    setInputStorage(value);
  };

  const onColorChangeHandle = (color) => {
    setColorStorage(color);
  }

  return (
    <div className="App flex flex-wrap justify-around my-16">
     <Controller className="w-1/2" onInputChange={onInputChangeHandle} 
     onColorChange={onColorChangeHandle} inputStorage={inputStorage} colorStorage={colorStorage} />
     <Iframe className="w-1/2" inputStorage={inputStorage} colorStorage={colorStorage}/>
    </div>
  );
}

export default App;
