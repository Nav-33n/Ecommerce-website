import React from "react"
import Title from "./components/title-logo";
import Login from "./components/navbar/login";
import Menu from "./components/navbar/menu";
import Search from "./components/navbar/search";
import Slide from "./components/navbar/slide";
import Wishlist from "./components/navbar/wishlist";
import Cart from "./components/navbar/cart";
import Highlight from "./components/highlight";
import Categories from "./components/categories";
import Deals from "./components/today-deals";
import ImageCategories from "./components/image-categories";
import Suggestion from "./components/suggestion";
import RecentView from "./components/recent-view";
import Footers from "./components/footers";

export default function App() {
    return(
        <>
        <header>
            <Slide/>
            <Title/>
            <Login/>
        </header>
        <nav>
        <Search/>
        <Menu/>
        <div className="wishlist">
        <Wishlist/>
        <Cart/>
        </div>
        </nav>
        <section>
            <Highlight/>
        </section>
        <div className="categories-container">
            <Categories/>
        </div>

        <div className="todays-container">
            <Deals/>
        </div>

        <div class="image-container">
            <ImageCategories/>
        </div>

        <div className="suggestion-container">
            <Suggestion/>
        </div>

        <div className="recent-container">
            <RecentView/>
        </div>
        <footer>
            <Footers/>
        </footer>
        </>
    )
}