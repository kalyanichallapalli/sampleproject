//creating the functional compnents 
function funcomp(){
    let name = 'KALYANI';

     function handleClick(){
     name = name.toLowerCase() 
     alert(name) //to check or test  
    }
    return <div>
        <h2>FUNCTIONAL COMPONENT CREATED BY {name}</h2>
        <h2>SECOND COMPNENT</h2>
        <button onClick = {handleClick}></button>
    </div>
}
export default funcomp;

// on click button cannot render in the functional component so we use class component   