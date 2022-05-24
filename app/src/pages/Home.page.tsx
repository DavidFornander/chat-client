import "../index.css"
import MessagePanel from '../features/chat/MessagePanel';
import MessageBar from '../features/chat/MessageBar';
import Post from "../features/post/Post";
import UserPanel from "../features/chat/UserPanel";
import GetUsers from "../features/users/GetUsers";


const HomePage = () => {

  return (
    <>
      {/* header section*/}
      <header className='Header'>
        QTE &lt;3
      </header>

      {/* main section*/}
      <section className="Section">
        <nav className="Nav">
          <GetUsers></GetUsers>
        </nav>
        <article className="Article">
          <Post></Post>
        </article>
      </section>

      {/* footer section*/}
      <footer className="Footer">
        <MessageBar></MessageBar>
      </footer>
    </>
  );
};

export default HomePage

