import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbaar">
      <h1>Blog center</h1>

      <div className="links">
        <Link to="/">Home Page</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#008080",
            borderRadius: "8px",
          }}
        >
          {" "}
          New Blog{" "}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
