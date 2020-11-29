import React from 'react'

function SectionThree(props) {
    
    return (
        <div  >
            <table className="table table-bordered">
            <tbody>
                <tr>
                <td> <img src="../img/drink1.png" alt="" className="img-fluid" onClick={()=>props.drinkChoose("1")} /></td>
                <td> <img src="../img/drink2.png" alt="" className="img-fluid" onClick={()=>props.drinkChoose("2")} /></td>
                <td> <img src="../img/pizza1.png" alt="" className="img-fluid" onClick={()=>props.pizzaChoose("1")} /></td>
                <td> <img src="../img/pizza2.png" alt="" className="img-fluid" onClick={()=>props.pizzaChoose("2")} /></td>
                <td> <img src="../img/chips1.png" alt="" className="img-fluid" onClick={()=>props.chipsChoose("1")} /></td>
                <td> <img src="../img/chips2.png" alt="" className="img-fluid" onClick={()=>props.chipsChoose("2")} /></td>
                
                </tr>
                <tr className="">
                <td> <img src="../img/drink3.png" alt="" className="img-fluid" onClick={()=>props.drinkChoose("3")} /></td>
                <td> <img src="../img/drink4.png" alt="" className="img-fluid" onClick={()=>props.drinkChoose("4")} /></td>
                <td> <img src="../img/pizza3.png" alt="" className="img-fluid" onClick={()=>props.pizzaChoose("3")} /></td>
                <td> <img src="../img/pizza4.png" alt="" className="img-fluid" onClick={()=>props.pizzaChoose("4")} /></td>
                <td> <img src="../img/chips3.png" alt="" className="img-fluid" onClick={()=>props.chipsChoose("3")} /></td>
                <td> <img src="../img/chips4.png" alt="" className="img-fluid" onClick={()=>props.chipsChoose("4")} /></td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default SectionThree
