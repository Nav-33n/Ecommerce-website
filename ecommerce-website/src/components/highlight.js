import photo from "./images/img.jpg";

export default function Highlight() {
    return(
        <>
        <div className="highlight">
            <img src={photo} alt="overview"></img>
        </div>
        </>
    )
}