import React from 'react';
import ReactDom from 'react-dom';

function Greeting (){
    // JSX Rules
    // return single element
    // use camel case for html attributes
    //close every element
    // formating
    //three arguments ie element, propsobject , children
    return (
        <section className="head">
            <h1>Hello from cosiiriggz this is my first react componet</h1>
            <h2>awsome</h2>
            {/* <img  alt=""/>
            <input/> */}
        </section>
    
    );
}

// function Greeting (){
//     return React.createElement("div",{},"hello world");
// }

ReactDom.render(<Greeting/>, document.getElementById("root"));



