import Box from "./components/Box";
import Block from "./components/Blocks/Block";
import Block3 from "./components/Blocks/Block3";
import Block4 from "./components/Blocks/Block4";
import Block5 from "./components/Blocks/Block5";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Box  number={0}/>
                <Box  number={0}/>
                <Box  number={0}/>

                <Block number1={0}/>
                <Block3 number3={1}/>
                <Block4 number4={0}/>
                <Block3 number3={1}/>
                <Block5 number5={0}/>
                <Block3 number3={1}/>



            </header>
        </div>
    );
}

export default App;
