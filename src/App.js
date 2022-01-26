import React, {useState, useEffect, useCallback} from 'react';
import './App.css';
import Button from "./components/Button";
import Image from "./components/Image";
import {catApi} from "./utils/catapi";
import {dogApi} from "./utils/dogapi";

function App() {
  const [cat, setDataCat] = useState([])
  const [dog, setDataDog] = useState([])

  useEffect(() => {
    loadDataCat();
    loadDataDog();
  }, []);

  const loadDataCat = useCallback(async () =>{
    const catData = await catApi()
      setDataCat(catData);
    }, [])
  const loadDataDog = useCallback(async () =>{
    const dogData = await dogApi()
      setDataDog(dogData);
    }, [])

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
