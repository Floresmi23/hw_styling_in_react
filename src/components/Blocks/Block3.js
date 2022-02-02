import React from "react";
import Style3 from "../Style3";

//any other imports

function Block3(props){

    const [num3, setNum3]= React.useState(0);
    const [color3, setColor3]= React.useState("red");
    const [color31, setColor31]= React.useState("2px solid blue");

    // const [num3, setNum3]= React.useState();
    // const [color3, setColor3]= React.useState("blue");

    let addUp =(nm3)=>{
        let result3 = num3+nm3;

        setNum3(result3);

    }



    let combine =()=>{
        addUp(props.number3);
        setColor3("blue");
        setColor31("2px solid green");
    }


    let style3 = {
        backgroundColor: color3,
        color: color3,
        border: color31
    }







    return(
        <div style={{...Style3.block3, ...style3}} onClick={combine}>
            <p>{num3}</p>

            {/*click button*/}
            {/*<button onClick={()=>addUp(props.number)}>Click Me</button>*/}
            {/*CLick button*/}

        </div>
    )
}

export default Block3;