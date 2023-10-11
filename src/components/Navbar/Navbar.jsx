import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Portfolio</a>
    <a href="#">Contact</a>
    <div className="navbar-right">
        <a href="#">Sign In</a>
    </div>
</div>
  )
}

export default Navbar