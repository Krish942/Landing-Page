import "./Navbar.css"

function Navbar() {
  return (
    <nav className="nav">
      {/* Logo Section */}
      <div>
        <img
          src="/img3.png" // Replace with the path to your logo image
          alt="Logo"
          className="w-8 h-8"
        />
        {/* <span>SWS</span> */}
      </div>

      {/* Navigation Links */}
      <div>
      <ul id="list">
        <li >Home</li>
        <li >Gallery</li>
        <li >Teachers</li>
        <li>Contact Us</li>
      </ul>
      </div>

      {/* Action Buttons */}
      <div className="btn">
        <button id="signup">
          Sign Up
        </button>
        <button>
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
