import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
  const {isError , isLoading , data} = useFetch('http://localhost:8000/blogs')




 // command to run json server = npx json-server --watch data/db.json --port 8000;

  return (
    <div className="home">
      {isError && <h2>{isError}</h2>}
      {isLoading && <h2>loading...</h2>}
       {data && <BlogList blogs = {data} title = "all blogs"/>}
       
    </div>
  );
}
 
export default Home;

