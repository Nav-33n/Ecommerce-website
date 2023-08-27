import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";

export default function Suggestion() {
    return (
        <>
            <label>Suggested For You</label>
            <div className="suggest-container">
                <div className="suggestion-product">
                        <img src={img1} alt="product"></img>
                        <span id="name">Product's Name</span>
                        <span id="price">Price</span>
                </div>
                <div className="suggestion-product">
                        <img src={img2} alt="product"></img>
                        <span id="name">Product's Name</span>
                        <span id="price">Price</span>
                </div>
                <div className="suggestion-product">
                        <img src={img1} alt="product"></img>
                        <span id="name">Product's Name</span>
                        <span id="price">Price</span>
                </div>
                <div className="suggestion-product">
                        <img src={img2} alt="product"></img>
                        <span id="name">Product's Name</span>
                        <span id="price">Price</span>
                </div>
                <div className="suggestion-product">
                        <img src={img1} alt="product"></img>
                        <span id="name">Product's Name</span>
                        <span id="price">Price</span>
                </div>
                <div className="suggestion-product">
                        <img src={img2} alt="product"></img>
                        <span id="name">Product's Name</span>
                        <span id="price">Price</span>
                </div>
                <div className="suggestion-product">
                        <img src={img1} alt="product"></img>
                        <span id="name">Product's Name</span>
                        <span id="price">Price</span>
                </div>
            </div>
        </>
    )
}