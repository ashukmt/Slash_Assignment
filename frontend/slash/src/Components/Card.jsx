import React from "react";
import axios from "axios";
import "../App.css"
const Card = ({ elem }) => {

    const handleFav =async (el)=>{
        console.log(el);
        const {name,bio} = el;
        let obj = {name : name,bio : bio}
        try{
         let response = await axios.post(`http://localhost:8181/event/addevent`,{...obj});
         console.log(response);

        }
        catch(err){
            console.log(err)
        }
    }



  return (
    <div>
      {elem.map((el) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Author</h5>
            <p class="card-text">
              {el.name}
            </p>
            <p class="card-text">
              {el.bio}
            </p>
            <button onClick={()=>handleFav(el)}>Add to Favorites</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
