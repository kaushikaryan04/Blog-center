import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className="Notfound">
            <h2>Error 404 Page not found </h2>
            <Link to = "/">Back to home Page</Link>

        </div>

     );
}
 
export default Notfound;