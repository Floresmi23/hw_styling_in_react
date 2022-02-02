import React from "react";
import Style2 from "../Style2";

//any other imports

function Block(props){

    const [num1, setNum1]= React.useState(0);
    const [color1, setColor1]= React.useState("grey");

    let addUp =(nm1)=>{
        let result1 = num1+nm1;

        setNum1(result1);

    }





    let combine =()=>{
        addUp(props.number1);
        setColor1("grey");

    }

    let style2 = {
        backgroundColor: color1
    }



    return(
        <div style={{...Style2.block, ...style2}} onClick={combine}>
            <p>{num1}</p>

            {/*click button*/}
            {/*<button onClick={()=>addUp(props.number)}>Click Me</button>*/}
            {/*CLick button*/}

        </div>
    )
}

export default Block;