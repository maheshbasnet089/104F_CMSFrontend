import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
 const navigate =  useNavigate()
  return (
    <div className="navbar">
    <a href="#">Home</a>

    <div className="navbar-right">
    <a onClick={()=>navigate('/createBlog')} >CreateBlog</a>
    </div>
</div>
  )
}

export default Navbar