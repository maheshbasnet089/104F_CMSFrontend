import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './UpdateBlog.css'
import axios from 'axios'
import { useEffect, useState } from 'react'


const UpdateBlog = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [blog,setBlog] = useState({})

//   {
//     _id: '65296f369123f4038e4aa971',
//     title: 'thisistitle',
//     subTitle: 'thisissubttile',
//     description: 'thisisdescriptin',
//     createdAt: '2023-10-13T16:24:22.857Z',
//     updatedAt: '2023-10-17T04:11:47.222Z',
//     __v: 0
//   }
    // handle change of the input 
    const handleChange = (e)=>{
        // console.log(e.target.value,e.target.name)
        const {name,value} = e.target
        setBlog({
            ...blog,
            [name] : value
        })

    }
   
    // delete key of the object 
    const keyToExclude = ['createdAt','updatedAt']
    keyToExclude.forEach((key)=>{
        delete blog[key]
    })

    const updateBlog = async (e)=>{
        e.preventDefault()
        const response = await axios.patch("http://localhost:2000/blogs/" + id,blog)
        if(response.status == 200){
            navigate("/singleBlog/" + id)
        }
    }


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
    <>
        <Navbar />
    <div className="form-container">
    <h2>Update Blog</h2>
    <form onSubmit={updateBlog} >
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" value={blog.title} onChange={handleChange} id="title" name="title" placeholder="Enter Title"  />
        </div>
        <div className="form-group">
            <label htmlFor="subtitle">Subtitle</label>
            <input type="text" value={blog.subTitle} id="subtitle" onChange={handleChange} name="subTitle" placeholder="Enter Subtitle"    />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" value={blog.description} onChange={handleChange} name="description" rows="4" placeholder="Enter Description"   ></textarea>
        </div>
        <button className="btn" type="submit">Submit</button>
    </form>
</div></>

  )
}

export default UpdateBlog