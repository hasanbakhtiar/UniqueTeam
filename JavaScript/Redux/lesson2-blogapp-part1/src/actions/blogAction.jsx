import { v4 as uuid } from 'uuid';

export const addBlog = ({title,desc,img})=>({
    type:"ADD_BLOG",
    blog:{
        id:uuid(),
        img:img,
        title:title,
        desc:desc
    }
})
export const editBLog = ()=>({
    type:"UPDATE_BLOG"
})
export const removeBlog = ()=>({
    type:"REMOVE_BLOG"
})