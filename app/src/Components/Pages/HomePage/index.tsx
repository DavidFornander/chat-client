import "./index.css"
import logo from './../../../logo.svg';
import { Link } from 'react-router-dom'

function HomePage() {
    return(
        <div>
        <div className="App">
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />

            <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/messages">Messages</Link> </li>
            </ul>
           
           <a
             className="App-link"
             href="https://google.com"
             target="_blank"
             rel="noopener noreferrer"
           >
             Sign In
           </a>
         </header>
       </div>
      </div>
    )    
}

export default HomePage