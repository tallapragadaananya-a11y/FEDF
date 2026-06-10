import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <div className="hero-content">
        <h1>Welcome to ShopWish ✨</h1>

        <p>
        Save products you love, organize wishlists,
        track price drops, and manage your
        shopping journey in one secure place.
        </p>

        <div className="hero-buttons">
        <button>Get Started</button>
        <button className="secondary-btn">
        Sign In
        </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Home;
