import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

export default function Categories() {
    return(
        <>
                <label>Categories</label>
                <div className="categories-subcontainer">
                        <div className="product-container">
                            <img src={img1} alt="product"></img>
                            <span>Beauty</span>
                        </div>
                        <div className="product-container">
                            <img src={img2} alt="product"></img>
                            <span>Electronics</span>
                        </div>
                        <div className="product-container">
                            <img src={img3} alt="product"></img>
                            <span>Cameras</span>
                        </div>
                        <div className="product-container">
                            <img src={img2} alt="product"></img>
                            <span>Electronics</span>
                        </div>
                        <div className="product-container">
                            <img src={img2} alt="product"></img>
                            <span>Electronics</span>
                        </div>
                        <div className="product-container">
                            <img src={img2} alt="product"></img>
                            <span>Electronics</span>
                        </div>
                        <div className="product-container">
                            <img src={img2} alt="product"></img>
                            <span>Electronics</span>
                        </div>
                        <div className="product-container">
                            <img src={img2} alt="product"></img>
                            <span>Electronics</span>
                        </div>
                        <div className="product-container">
                            <img src={img2} alt="product"></img>
                            <span>Electronics</span>
                        </div>
                        
                </div>
        </>
    )
}