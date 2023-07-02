import React, {useEffect, useState} from "react";
import "./style.scss"
import mars from "../../assets/images/mars.jpeg"
import marsName from "../../assets/images/marsName.jpeg"
import earth from "../../assets/images/earth.jpg"
import earthName from "../../assets/images/earthName.jpeg"
import neptune from "../../assets/images/neptune.jpeg"
import neptuneName from "../../assets/images/neptuneName.jpeg"
import jupiter from "../../assets/images/yupiter.jpeg"
import jupiterName from "../../assets/images/yupiterName.jpeg"
import uranus from "../../assets/images/uranus.jpeg"
import uranusName from "../../assets/images/uranusName.jpeg"
import saturn from "../../assets/images/saturn.jpeg"
import saturnName from "../../assets/images/saturnName.jpeg"
import mercury from "../../assets/images/mercury.jpeg"
import mercuryName from "../../assets/images/mercuryName.jpeg"
import venusName from "../../assets/images/venusName.jpeg"
import venus from "../../assets/images/venus.jpeg"
import planets from "../../assets/images/pla.avif"
import Card from "../card";
import Modal from "../modal";


const Cards = () => {
  const [openModal, setOpenModal] = useState(false)
  const [imgInfo, setImgInfo] = useState({
    img: null,
    description: ''
  })
  const [count, setCount] = useState(0)
  const [checked, setChecked] = useState(-1)
  const [final, setFinal] = useState(0)
  const [planet, setPlanet] = useState([
    {
      img: mercury,
      id: 1,
      description: "Mercury is the smallest planet in the Solar System and the " +
        "closest to the Sun. Its orbit around the Sun takes 87.97 Earth days," +
        " the shortest of all the Sun's planets",
      state: ''
    },
    {img: mercuryName, id: 1, description: "Mercury is the smallest planet in the Solar System and the " +
          "closest to the Sun. Its orbit around the Sun takes 87.97 Earth days," +
          " the shortest of all the Sun's planets", state: ''},
    {
      img: mars, id: 2, description: "Mars is the fourth planet from the Sun and the second-smallest planet in the" +
        " Solar System, being larger than only Mercury. In English," +
        " Mars carries the name of the Roman god of war and is often called the Red Planet.", state: ''
    },
    {img: marsName, id: 2,description: "Mars is the fourth planet from the Sun and the second-smallest planet in the" +
          " Solar System, being larger than only Mercury. In English," +
          " Mars carries the name of the Roman god of war and is often called the Red Planet.", state: ''},
    {
      img: jupiter, id: 3, description: "Jupiter is the fifth planet from the Sun and the largest in" +
        " the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined," +
        " but slightly less than one-thousandth the mass of the Sun.", state: ''
    },
    {img: jupiterName, id: 3, description: "Jupiter is the fifth planet from the Sun and the largest in" +
          " the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined," +
          " but slightly less than one-thousandth the mass of the Sun.", state: ''},
    {
      img: earth, id: 4, description: "Earth is the third planet from the Sun and the only astronomical object " +
        "known to harbor life. While large amounts of water can be" +
        " found throughout the Solar System, only Earth sustains liquid surface water.", state: ''
    },
    {img: earthName, id: 4,description: "Earth is the third planet from the Sun and the only astronomical object " +
          "known to harbor life. While large amounts of water can be" +
          " found throughout the Solar System, only Earth sustains liquid surface water.", state: ''},
    {
      img: neptune, id: 5, description: "Neptune is the eighth and farthest-known Solar planet from the Sun." +
        " In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, " +
        "and the densest giant planet. It is 17 " +
        "times the mass of Earth, and slightly more massive than its near-twin Uranus.", state: '',
    },
    {img: neptuneName, id: 5, description: "Neptune is the eighth and farthest-known Solar planet from the Sun." +
          " In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, " +
          "and the densest giant planet. It is 17 " +
          "times the mass of Earth, and slightly more massive than its near-twin Uranus.",  state: ''},
    {
      img: uranus, id: 7, description: "Uranus is the seventh planet from the Sun. Its name is a reference " +
        "to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares, grandfather of Zeus and father of Cronus. It has the third-largest " +
        "planetary radius and fourth-largest planetary mass in the Solar System.", state: ''
    },
    {img: uranusName, id: 7,description: "Uranus is the seventh planet from the Sun. Its name is a reference " +
          "to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares, grandfather of Zeus and father of Cronus. It has the third-largest " +
          "planetary radius and fourth-largest planetary mass in the Solar System.", state: ''},
    {
      img: saturn, id: 8, description: "Saturn is the sixth planet from the Sun and the second-largest in the " +
        "Solar System, after Jupiter. It is a gas giant with an" +
        " average radius of about nine and a half times that of Earth.", state: ''
    },
    {img: saturnName, id: 8, description: "Saturn is the sixth planet from the Sun and the second-largest in the " +
          "Solar System, after Jupiter. It is a gas giant with an" +
          " average radius of about nine and a half times that of Earth.", state: ''},
    {
      img: venus, id: 9, description: "Venus is the second planet from the Sun and is named after the " +
        "Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, " +
        "Venus can cast shadows and can be visible to the naked eye in broad daylight.", state: ''
    },
    {img: venusName, id: 9,description: "Venus is the second planet from the Sun and is named after the " +
          "Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, " +
          "Venus can cast shadows and can be visible to the naked eye in broad daylight.", state: ''},
  ].sort(() => Math.random() - 0.5))

  const Compare = (index) => {

    if (planet[index].id === planet[checked].id) {
      planet[index].state = "match"
      planet[checked].state = "match"
      setImgInfo({...imgInfo, img: planet[index].img, description: planet[index].description})
      setPlanet([...planet])
      setChecked(-1)
      setFinal(final + planet[index].id)
      setTimeout(() => {
        setOpenModal(true)
      }, 1000)

    } else {
      planet[index].state = "failed"
      planet[checked].state = "failed"
      setPlanet([...planet])
      setTimeout(() => {
        planet[index].state = ""
        planet[checked].state = ""
        setPlanet([...planet])
      }, 1000)
      setChecked(-1)
    }
  }



  const handleClick = (index) => {
    if(count === 0){
       alert("վայ , արդեն փորդում ես ՞ շատ լավ , կսպասեմ ձեր գնահատականին օրիօրդ")
    }
    if (!planet[index].state) {
      if (checked === -1) {
        setChecked(index)
        planet[index].state = "active"
        setPlanet([...planet])
        setCount(count + 1)
      } else {
        if (checked !== index) {
          Compare(index)
        }
      }
    }

  }


  return <>
    <div style={{backgroundImage: `url(${planets})`}} className="wrapper">
      <h1> Welcome Memory Game</h1>
      <div className="memory-container">
        <div className="header-title">
          <p>Number of moves: {count}</p>
        </div>
        <div className="container">
          {planet.map((item, index) => {
            return <Card handleClick={handleClick} item={item} index={index} key={index}/>
          })}                </div>
      </div>

    </div>
    {openModal ? <Modal
      final={final}
      setOpenModal={setOpenModal}
      openModal={openModal}
      count={count}
      imgInfo={imgInfo}/> : null}
  </>
}
export default Cards