import React from "react";
import "./style.scss"



const Modal = ({imgInfo,openModal,setOpenModal,final,count}) => {

    const handleClick = ()=>{
        setOpenModal(false)

    }
    const startAgain = ()=>{
         window.location.reload()
    }

    return <div className="modal-block">
         <div onClick={handleClick} className="modal-bg"></div>
        <div className="modal-container">
            {final !== 39 ? <>
                <img src={imgInfo.img} alt=""/>
                 <p>{imgInfo.description}</p>
                <button onClick={handleClick}>OK</button>
                </> : <div>
                   <h1>number of steps {count}</h1>
                   <p>Congratulations!</p>
                   <p>You did a great job and found all the planets of the solar system. Astronauts are proud of you!</p>
                <button onClick={startAgain}>Start Again?</button>
            </div>}

        </div>
    </div>
}
export default Modal