import "../index.css"
import MessagePanel from '../features/chat/MessagePanel';
import MessageBar from '../features/chat/MessageBar';
import Post from "../features/post/Post";
import UserPanel from "../features/chat/UserPanel";
import GetUsers from "../features/users/GetUsers";


const HomePage = () => {

  return (
    <div>
      <header className='basic-header'>
        QTE &lt;3
      </header>

      <section className="Section">
        <nav className="Nav">
          <UserPanel></UserPanel>
          <GetUsers></GetUsers>
        </nav>
        <article className="Article">
          <Post></Post>
        </article>
      </section>

      <footer>
        Footer
      </footer>
    </div>
  );
};

export default HomePage

