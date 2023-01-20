import { v4 as uuid } from "uuid";

export const addBlog = ({ title, desc, img }) => ({
  type: "ADD_BLOG",
  blog: {
    id: uuid(),
    img: img,
    title: title,
    desc: desc,
  },
});
export const editBLog = (id, update) => ({
  type: "UPDATE_BLOG",
  id,
  update,
});
export const removeBlog = ({id}) => ({
  type: "REMOVE_BLOG",
  id:id
});
