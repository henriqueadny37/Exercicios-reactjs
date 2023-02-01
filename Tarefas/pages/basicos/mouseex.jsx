import { useState } from "react"

export default function mouseex(){
    const [X, setX] = useState()

        const  arrayY = useState(0)
        let Y = arrayY[0]
        const alterarY = arrayY[1]

        const clio = {
            fontFamily:"Arial",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh",
            fontSize:"50px",
            backgroundColor:"#ffbb00",

        }

        function whereMove(ev){
            setX(ev.clientX)
            alterarY(ev.clientY)
}
    return(
        <div style={clio} onMouseMove={whereMove}>
            <span>Eixo X: {X}</span>
            <span>Eixo Y: {Y}</span>
        </div>
    )
}