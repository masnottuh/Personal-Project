import { useEffect, useState } from 'react';
const advice_url = 'http://api.adviceslip.com/advice';

function GiveAdvice() {

  const [name, setName] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    names()
  }, [])

  const names = async () => {
    setisLoading(true);
    const response = await fetch(advice_url); 
    setName(await response.json());
    setisLoading(false);
    // let output = JSON.parse(name);
  }
  // console.log(name.slip);
  return (
  <div className="centered">
    <h1>Thank you for logging in</h1>
    <h2>Welcome to SWEtrainer!</h2>
    <h3>Please always follow the below advice:</h3>
      <h4> {(name.slip?.advice  ||  "Loading...")}</h4>
    </div>
  )
}


export default GiveAdvice;
