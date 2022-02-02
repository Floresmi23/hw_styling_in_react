import React from "react";
import Style5 from "../Style5";

//any other imports

function Block5(props){

    const [num5, setNum5]= React.useState(0);
    const [color5, setColor5]= React.useState("pink");

    let addUp =(nm5)=>{
        let result5 = num5+nm5;

        setNum5(result5);
    }





    let combine =()=>{
        addUp(props.number5);
        setColor5("pink");




    }

    let style5 = {
        backgroundColor: color5
    }





    return(
        <div style={{...Style5.block5, ...style5}} onClick={combine}>
            <p>{num5}</p>

            {/*click button*/}
            {/*<button onClick={()=>addUp(props.number)}>Click Me</button>*/}
            {/*CLick button*/}

        </div>
    )
}

export default Block5;