import Navbar from '../../components/Navbar/Navbar'
import './Createblog.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
    const navigate = useNavigate()
    
  

    const createBlog = async (e)=>{
         e.preventDefault()
         const formData = new FormData(e.currentTarget) // {}
        const data =  Object.fromEntries(formData)

         // send above states data to api 
        const response =  await axios.post("http://localhost:2000/blogs",data)
        if(response.status == 201){
            alert(response.data.message)
            navigate("/")
        }else{
            alert("Something went wrong")
        }

    }

  return (
    <>
        <Navbar />
    <div className="form-container">
    <h2>Form Title</h2>
    <form onSubmit={createBlog}>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" placeholder="Enter Title"  />
        </div>
        <div className="form-group">
            <label htmlFor="subtitle">Subtitle</label>
            <input type="text" id="subtitle" name="subTitle" placeholder="Enter Subtitle"  />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows="4" placeholder="Enter Description"  ></textarea>
        </div>
        <button className="btn" type="submit">Submit</button>
    </form>
</div></>

  )
}

export default CreateBlog