import "../index.css"
import MessagePanel from '../features/chat/MessagePanel';
import MessageBar from '../features/chat/MessageBar';


const HomePage = () => {

  return (
    <div>
      <header className='basic-header'>
        QTE &lt;3
      </header>

      <section className="Section">
        <nav className="Nav">
        </nav>
        <article className="Article">
          <MessagePanel></MessagePanel>
        </article>
      </section>

      <footer className="Footer">
        <MessageBar></MessageBar>
      </footer>
    </div>
  );
};

export default HomePage

