import React, { useState } from 'react'
const BlogForm = ({blogSubmit,editblog}:any) => {

    const [formImg,setFormImg] = useState(editblog ? editblog.img : "");
    const [formTitle,setFormTitle] = useState(editblog ? editblog.title : "");
    const [formDesc,setFormDesc] = useState(editblog ? editblog.desc : "");
    const formSubmit=(e:any)=>{
        e.preventDefault();
        if (!formImg || !formTitle || !formDesc) {
                alert('plase, fill input');
        }else{
            blogSubmit({
                img:formImg,
                title:formTitle,
                desc:formDesc
            })
        }
    }
  return (
 <div className="d-flex align-item-center justify-content-center flex-cloumn">
        <form className='col-6' onSubmit={formSubmit}>
        <div className="mb-3">
            <label className="form-label">Image url</label>
            <input onChange={(e)=>{setFormImg(e.target.value)}} value={formImg}  className="form-control"  />
        </div>
        <div className="mb-3">
            <label  className="form-label">Title</label>
            <input onChange={(e)=>{setFormTitle(e.target.value)}} value={formTitle}  className="form-control"  />
        </div>
        <div className="mb-3">
            <label  className="form-label">Description</label>
            <textarea onChange={(e)=>{setFormDesc(e.target.value)}} value={formDesc}  className="form-control"  ></textarea>
        </div>
       
        <button type="submit" className="btn btn-dark">Save</button>
        </form>
 </div>
  )
}

export default BlogForm