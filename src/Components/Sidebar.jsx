import { Link } from "react-router-dom"

export function Sidebar () {


    return (
        
            <div className="sidebar">
            <ul>
                <li><Link to="/" className="sidebar-link">Home</Link></li>
                <li><Link to="/about" className="sidebar-link">About</Link></li>
                <li><Link to="/contact" className="sidebar-link">Contact us</Link></li>
            </ul>
            </div>
             
    )
}