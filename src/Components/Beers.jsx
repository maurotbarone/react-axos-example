import { useState, useEffect } from "react";     // <== IMPORT useEffect
import axios from "axios";                       // <== IMPORT axios
 
function Beers() {
const [beers, setBeers] = useState([]);

 
  useEffect(() => {                                // <== ADD THE EFFECT
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data)
      });


    // inserire il check dell'errore
    
  }, [] );  // <- [] means: Run the effect only once, after initial render
 
  
  return (
    
    <div className='cards'>

      {/*      ADD     */}
      {beers.map((beers) => (
        <div key={beers._id} className="card">
            <h3 >{beers.name}</h3>
            <img src={beers.image_url} alt="beer" />
            <p>Description: {beers.description}</p>
        </div>
      ))}
      
    </div>
  );
}
 
export default Beers;