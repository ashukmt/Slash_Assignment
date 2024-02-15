import React, { useEffect, useState } from "react";
import "../App.css"
import Card from "./Card";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
  const [eventData, setEventData] = useState([]);
  const [searchBy, setSearchBy] = useState("");

  console.log(eventData.length);

  const myApi = (url) => {
    if (searchBy) {
      return `${url}/?query=${searchBy}&fields=author`;
    } else {
      return `${url}`;
    }
  };

  const fetchingEventData = async () => {
    try {
      const myUrl = myApi(
        "https://api.quotable.io/search/authors",
        searchBy
      );
      const response = await fetch(myUrl);
      const data = await response.json();
      console.log(data.results);
      setEventData(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
   
  }, [searchBy]);


  return (
    <>
    <div className="Main_div">
        
      <div className="Btn_div">
       <Link to="/author">See All Favroites</Link>
      </div>
      <div class="input_div">
        
      <input
              type="text"
              className="custom-input"
              placeholder="Search Products..."
              onChange={(e) => setSearchBy(e.target.value)}
            />

          <button type="button" class="custom-button" onClick={fetchingEventData}>Search</button>


        
      </div>

      
      

    </div>
    {eventData.length != 0 ? <Card elem={eventData}/> : <></>}
    </>
  );
};

export default Home;
