import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";


export default function Deals(){
     return (
        <>
                <label>Today's Deals</label>
                <div className="deals-container">
                    <div className="deals-product">
                        <img src={img1} alt="product"></img>
                        <span id="name">Product's Name</span>
                        <span id="price">Price</span>
                    </div>
                    <div className="deals-product">
                        <img src={img2} alt="product"></img>
                        <span id="name">Product's Name</span>
                        <span id="price">Price</span>
                    </div>
                    <div className="deals-product">
                        <img src={img1} alt="product"></img>
                        <span id="name">Product's Name</span>
                        <span id="price">Price</span>
                    </div>
                    <div className="deals-product">
                        <img src={img2} alt="product"></img>
                        <span id="name">Product's Name</span>
                        <span id="price">Price</span>
                    </div>
                    <div className="deals-product">
                        <img src={img1} alt="product"></img>
                        <span id="name">Product's Name</span>
                        <span id="price">Price</span>
                    </div>
                    <div className="deals-product">
                        <img src={img2} alt="product"></img>
                        <span id="name">Product's Name</span>
                        <span id="price">Price</span>
                    </div>
                    <div className="deals-product">
                        <img src={img1} alt="product"></img>
                        <span id="name">Product's Name</span>
                        <span id="price">Price</span>
                    </div>
                </div>
        </>
     )
}