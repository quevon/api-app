import React, {useState, useEffect} from 'react';
import './App.css';
import Button from "./components/Button";
import Image from "./components/Image";

function App() {
  const [cat, setDataCat] = useState([])
  const [dog, setDataDog] = useState([])

  useEffect(() => {
    loadDataCat();
    loadDataDog();
  }, []);

  const loadDataCat = async () =>{
    await fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(receiveData => setDataCat(receiveData));
  }
  const loadDataDog = async () =>{
    await fetch("https://api.thedogapi.com/v1/images/search")
    .then(response => response.json())
    .then(receiveData => setDataDog(receiveData));
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
