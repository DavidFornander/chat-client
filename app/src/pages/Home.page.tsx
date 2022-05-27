import { Link } from 'react-router-dom'

import "../index.css"
import GetUsers from "../features/users/GetUsers";
import GetPosts from "../features/posts/GetPosts";
import AddPostBar from "../features/posts/AddPost";


const HomePage = () => {
  
  return (
    <>
      {/* header section*/}
      <header className='Header'>
        QTE &lt;3 
        <Link to="/other">Test page</Link>
      </header>

      {/* main section*/}
      <section className="Section">
        <nav className="Nav">
          <GetUsers></GetUsers>
        </nav>
        <article className="Article">
          <GetPosts/>
        </article>
      </section>

      {/* footer section*/}
      <footer className="Footer">
        <AddPostBar/>
      </footer>


    </>
  );
};

export default HomePage

