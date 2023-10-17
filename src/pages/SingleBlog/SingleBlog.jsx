import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const SingleBlog = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [blog,setBlog] = useState({})
    // DELETE BLOG
    const deleteBlog = async ()=>{
       const response =  await axios.delete("http://localhost:2000/blogs/" + id)
       if(response.status ==200){
        navigate("/")
       }
    }

    // FETCH SINGLE BLOG 
    const fetchSingleBlog = async()=>{
        const response = await axios.get("http://localhost:2000/blogs/" + id)
     
        if(response.status ==200){
            setBlog(response.data.data)
        }
    }

    useEffect(()=>{
        fetchSingleBlog()

    },[])
    
  
  return (
    <div>
        <h1>{blog.title}</h1>
        <h3>{blog.subTitle}</h3>
        <p>{blog.description}</p>
        <button onClick={deleteBlog} >Delete</button>
     <Link to={`/update/${blog._id}`} > Update</Link> 
    </div>
  )
}

export default SingleBlog