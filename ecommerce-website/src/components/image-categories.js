import men from "./images/men.jpg";
import women from "./images/women.jpg";
import kid from "./images/kid.jpg";


export default function ImageCategories(){
    return(
        <>
            <div className="big-container">
                <img src={women} alt="men"></img>
            </div>
            <div className="small-top-container">
            <img src={men} alt="women"></img>
            </div>
            <div className="small-bottom-container">
            <img src={kid} alt="kid"></img>
            </div>
        </>
    )
}