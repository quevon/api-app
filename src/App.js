import React, {useState, useEffect} from 'react';
import './App.css';
import Button from "./components/Button";
import Image from "./components/Image";
import {catApi} from "./components/utils/catapi";
import {dogApi} from "./components/utils/dogapi";


function App() {

  const [cat, setDataCat] = useState([])
  const [dog, setDataDog] = useState([])

  useEffect(() => {
    loadDataCat();
    loadDataDog();
  }, []);

  const loadDataCat = async () =>{
    await catApi()
    .then(data => {
      setDataCat(data);
    })
  }
  const loadDataDog = async () =>{
    await dogApi()
    .then(data => {
      setDataDog(data);
    })
  }
  const nextFunction = () => {
    window.location.reload(false);
  }

 console.log(cat);
 console.log(dog);

  return (
    <div className='App'>
      <Image cat={cat} dog={dog}/>
      <Button handleClick={nextFunction} />
    </div>
  );
}

export default App;
