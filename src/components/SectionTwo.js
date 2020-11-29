import React from 'react'
import SectionThree from './SectionThree'

function SectionTwo(props) {
    
    return (
        <div>
            <div  className="section-two-wapper d-flex justify-content-center align-items-center">
                
                <div className="tray-wapper" >
                <img src="../img/Tray.png" alt="" className="tray" />
                { props.data.drink1 &&   <img src="../img/drink1.png" alt="" className="tray-drink" /> }
                { props.data.drink2 &&   <img src="../img/drink2.png" alt="" className="tray-drink" /> }
                { props.data.drink3 &&   <img src="../img/drink3.png" alt="" className="tray-drink" /> }
                { props.data.drink4 &&   <img src="../img/drink4.png" alt="" className="tray-drink" /> }
                  

                { props.data.pizza1 &&    <img src="../img/pizza1.png" alt="" className="tray-pizza" /> }
                { props.data.pizza2 &&    <img src="../img/pizza2.png" alt="" className="tray-pizza" /> }
                { props.data.pizza3 &&    <img src="../img/pizza3.png" alt="" className="tray-pizza" /> }
                { props.data.pizza4 &&    <img src="../img/pizza4.png" alt="" className="tray-pizza" /> }


                { props.data.chips1 &&     <img src="../img/chips1.png" alt="" className="tray-chips" /> }
                { props.data.chips2 &&     <img src="../img/chips2.png" alt="" className="tray-chips" /> }
                { props.data.chips3 &&     <img src="../img/chips3.png" alt="" className="tray-chips" /> }
                { props.data.chips4 &&     <img src="../img/chips4.png" alt="" className="tray-chips" /> }

                </div>
            </div>
            <SectionThree 
                data={props.data} 
                drinkChoose={props.drinkChoose} 
                pizzaChoose={props.pizzaChoose} 
                chipsChoose={props.chipsChoose} 
            />
        </div>
    )
}

export default SectionTwo
