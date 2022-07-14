import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    setIsPending(true);
    const newObject = { title, body, author };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newObject),
    }).then(
      console.log("blog added"), 
      setIsPending(false), 
      history.push("/"),
      )
      ;
  };
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label>Blog title</label>
        <input
          type="text"
          required
          defaultValue={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Blog-content</label>
        <textarea
          required
          defaultValue={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author</label>
        <select
          defaultValue={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option defaultValue="Aryan">Aryan</option>
          <option defaultValue="Kaushik">Kaushik</option>
        </select>
        {!isPending && <button onClick={handleClick}>ADD</button>}
        {isPending && <button disabled>LOADING...</button>}
      </form>
    </div>
  );
};

export default Create;
