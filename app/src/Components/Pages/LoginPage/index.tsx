import "./index.css"
import { Link } from 'react-router-dom'

function LoginPage() {
    return(
        <div>
            <h1>this page suxks</h1>
            <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/messages">Messages</Link> </li>
            </ul>

        </div>
    )    
}

export default LoginPage