import React from "react";
import Style from "./Style";

//any other imports

function Box(props){

    const [num, setNum]= React.useState(0);
    const [color, setColor]= React.useState("blue");

    let addUp =(nm)=>{
        let result = num+nm;

        setNum(result);
    }



    let combine =()=>{
        addUp(props.number);
        setColor("blue")
    }

    let style = {
        color: color
    }



    return(
        <div style={{...Style.box, ...style}} onClick={combine}>
            <p>{num}</p>

            {/*click button*/}
            {/*<button onClick={()=>addUp(props.number)}>Click Me</button>*/}
            {/*CLick button*/}

        </div>
    )
}

export default Box;