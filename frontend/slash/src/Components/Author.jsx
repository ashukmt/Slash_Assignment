import React, { useEffect, useState } from 'react'

const Author = () => {

    const[data,setData] = useState([]);

    const fetchingAuthorData = async () => {
        try {
          const myUrl = "http://localhost:8181/event/getevents"
          const response = await fetch(myUrl);
          const data = await response.json();
          console.log(data);
          setData(data);
        } catch (err) {
          console.log(err);
        }
      };

      useEffect(() => {
       fetchingAuthorData();
      },[]);
  return (
    <div>
        {
            data.map((el)=> (
                <div>
                    <h1>{el.name}</h1>
                    <h2>{el.bio}</h2>
                </div>
            ))
        }
    </div>
  )
}

export default Author