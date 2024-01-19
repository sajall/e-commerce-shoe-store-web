import "./Centerbody.css"
import { Link } from "react-router-dom";

export function Centerbody(){
    return (
       <div className="h-[100vh]" id="center">
       <div id="white">
           <div>
            <h1>Feet wear <span>Paradise</span></h1>
           </div>
           <div id="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
             et ea aliquid similique, dolore culpa nostrum repudiandae cumque,
             nulla eum impedit minus ipsam provident tempora vitae? Fuga
              repellat accusamus consequuntur!</div>
           <div>
             <Link to="/home">
            <button className="btn">Home</button>
            </Link> 
            <Link to="/login">
            <button className="btn">Login</button>  
            </Link>
           </div>
       </div>
       </div>
    );
}