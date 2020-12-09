import React, { useState } from "react";
import "./styles.css";

const cuisines ={
  "Northern Cuisine": [
                        {'Food':'Rogan Josh','rating':'4.9/5'},
                        {'Food':'Palaak paneer','rating':'4.8/5'},
                        {'Food':'Dal Makhani','rating':'4.5/5'},
                        {'Food':'Tikka','rating':'4.5/5'},
                      ],
  "Eastern Cuisine":  [
                        {'Food':'Mustard Hilsa fish','rating':'5/5'},
                        {'Food':'Momos','rating':'4.5/5'},
                        {'Food':'Rosogolla','rating':'4.8/5'},
                        {'Food':'Litti Chokha','rating':'4/5'},
                      ],
  "Western Cuisine":  [
                        {'Food':'Shrikhand','rating':'4.8/5'},
                        {'Food':'Methi ka Thepla','rating':'4.5/5'},
                        {'Food':'Dhokla','rating':'4/5'},
                        {'Food':'Laal Maas','rating':'4/5'},
                      ],
  "Southern Cuisine": [
                        {'Food':'Masala Dosa','rating':'5/5'},
                        {'Food':'Hyderabadi Biryani','rating':'4.8/5'},
                        {'Food':'Paal payasam','rating':'4.5/5'},
                        {'Food':'Coconut chutney','rating':'4/5'},
                      ]
}
let cuisineWeRecommend = Object.keys(cuisines);

export default function App() {

  const [cuisineList , setCuisineList] = useState("");

  function cuisineClickHandler(type){  
    let cuisineList = '';
    cuisineList = cuisines[type].map((cuisine , index) =>{
        return <li key = {index}>
                    <p><strong>{cuisine['Food']}</strong></p>
                    <p>{cuisine['rating']}</p>
              </li>
    })
    setCuisineList(cuisineList);
  }
  return (
    <div className="App">
      <h1><span role="img" aria-label="rice">🍛</span> Good Indian cuisine</h1>
      <h3>Check out my list of Indian Cuisines</h3>
      <div className = "cuisine-type" >
        {
          cuisineWeRecommend.map(type =>{
            return <button
                      style = {{padding:"0.5rem",margin: "0 0.3rem"}}
                      onClick = {() => cuisineClickHandler(type)}
                      key = {type}
                   >
                   {type}
                   </button>
          })
        }
      </div>
      <hr />
      <ul>
        {cuisineList}  
      </ul>
    </div>
  );
}
