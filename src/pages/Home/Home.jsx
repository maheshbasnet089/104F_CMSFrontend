import axios from "axios"
import Navbar from "../../components/Navbar/Navbar"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom"


const Home = () => {
  const [blogs,setBlogs] = useState([])
  // api call here 

  const fetchBlogs = async ()=>{
    try {
      const response =  await axios.get('http://localhost:2000/blogs')
      
      if(response.status == 200){

        setBlogs(response.data.blogs)
      }else {
        // code here 
      }
    } catch (error) {
      alert("Something went wrong")
    }
  }
  useEffect(()=>{
    fetchBlogs()
  },[])

  
  return (
    <div>
      <Navbar />
      <div className="card" style={{width: '18rem'}}>
    {blogs.map((blog)=>{
      return(
        <div key={blog._id} className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <h5 className="card-title">{blog.subTitle}</h5>
        <p className="card-text">{blog.description}</p>
        <Link to={`/singleBlog/${blog._id}`} >See More</Link>
        
      </div>
      )
    }) }

 
</div>
    </div>
  )
}

export default Home