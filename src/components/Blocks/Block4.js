import React from "react";
import Style4 from "../Style4";

//any other imports

function Block4(props){

    const [num4, setNum4]= React.useState(0);
    const [color4, setColor4]= React.useState("yellow");

    let addUp =(nm4)=>{
        let result4 = num4+nm4;

        setNum4(result4);

    }





    let combine =()=>{
        addUp(props.number4);
        setColor4("yellow");

    }

    let style4 = {
        backgroundColor: color4
    }



    return(
        <div style={{...Style4.block4, ...style4}} onClick={combine}>
            <p>{num4}</p>

            {/*click button*/}
            {/*<button onClick={()=>addUp(props.number)}>Click Me</button>*/}
            {/*CLick button*/}

        </div>
    )
}

export default Block4;