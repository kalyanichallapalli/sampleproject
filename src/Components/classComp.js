//creating a class component and extending a class component  to another class  compoent 
import React from 'react';
class ClassComp extends React.Component{
    constructor(){ // we will setup all the variables

        super();
        //this.name = "KALYANI"

        this.state={
            name: "KALYANI"
        }
     
    }

    handleClick=()=>{
        //this.state.name=this.state.name.toLowerCase()
        this.setState({name:this.state.name.toLowerCase()}) //set statement is Asynch call

   }

    render(){  // the main function in classcompne t is Render

        return <div>
            <h2>THIS IS CLASS COMPONENT CREATED BY {this.state.name}</h2>
            <button onClick = {this.handleClick}>toLowerCase</button>
        </div>
    }  

}

export default ClassComp;