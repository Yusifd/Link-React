import { Link } from "react-router-dom";
import "./index.css"
export default function Navbar(){
    return(
        <>
        <main>
            <div className="container">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
        </div>
        </main>
        </>
    )
}