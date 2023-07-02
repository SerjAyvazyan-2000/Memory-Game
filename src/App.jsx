import React, {useEffect, useState} from "react";
import "./App.scss"
import Cards from "./components/cards";

function App() {
  useEffect(()=>{
     alert("Հա Հա հենց ես խաղի հետ եմ ,ես  եմ հավաքել , ու լավ հետքրքիր բան եմ ուզում առաջարկեմ")
  })

  return <div className="app">
    <Cards/>
  </div>
}

export default App;