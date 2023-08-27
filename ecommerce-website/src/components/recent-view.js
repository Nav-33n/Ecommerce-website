import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";

export default function RecentView() {
    return(
        <>
            <label>Recently Viewed</label>
            <div className="view-container">
                <div className="view-product">
                <img src={img1} alt="product"></img>
                <span id="name">Product's Name</span>
                <span id="price">Price</span>
                </div>
                <div className="view-product">
                <img src={img1} alt="product"></img>
                <span id="name">Product's Name</span>
                <span id="price">Price</span>
                </div>
                <div className="view-product">
                <img src={img2} alt="product"></img>
                <span id="name">Product's Name</span>
                <span id="price">Price</span>
                </div>
                <div className="view-product">
                <img src={img1} alt="product"></img>
                <span id="name">Product's Name</span>
                <span id="price">Price</span>
                </div>
                <div className="view-product">
                <img src={img2} alt="product"></img>
                <span id="name">Product's Name</span>
                <span id="price">Price</span>
                </div>
                <div className="view-product">
                <img src={img1} alt="product"></img>
                <span id="name">Product's Name</span>
                <span id="price">Price</span>
                </div>
                <div className="view-product">
                <img src={img2} alt="product"></img>
                <span id="name">Product's Name</span>
                <span id="price">Price</span>
                </div>
            </div>
        </>
    )
}