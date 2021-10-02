    //creating the functional comp1 
import F2 from "./f2";    
function f1(){
    let name = 'NIDHI'; // let me pass this name to another functionl componet
    return <div>
        <h2>FUNCTIONAL COMPONENT ONE {name}</h2>
        <F2 username= {name}></F2> 
    </div>
}
export default f1;

// username is the property and name contains the value 
/*
obj { //collected in  obj 
  username: Nidhi

} */