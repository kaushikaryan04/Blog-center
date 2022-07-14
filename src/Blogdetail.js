
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";



const Blogdetail = () => {
    const history  = useHistory()
    const {id} = useParams()
    const {isloading , data:blog , isError} = useFetch('http://localhost:8000/blogs/' + id)


    const handleClick = () =>{


        fetch("http://localhost:8000/blogs/" + blog.id,{
            method:"DELETE",
        }).then(
            console.log("blog deleted"),
            history.push("/")
        )

    }

    return ( 
        <div className = "blog-detail">
            {isloading && <h2>Loading</h2>}
            {isError&& <h2>{isError}</h2>}
            {blog && (
                <article>
                <div className="full-blog">
                <div className="title"><h2>{blog.title}</h2></div>
                <div className="data">
                    {blog.body}
                </div>

                <div className="author">
                    
                    <h3>by {blog.author}</h3>
                </div>


                </div>
                <button onClick = {handleClick}>Delete Blog</button>
                </article>
            ) }

        </div>
     );
}
 
export default Blogdetail;