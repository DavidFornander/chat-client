import "../App.css"
import { Link } from 'react-router-dom'
import React, { FormEvent } from 'react'

import { Provider, useSelector, useDispatch } from 'react-redux';
import store, { selectPosts, add } from '../store';
import { TextField, Button, Typography, Divider } from "@mui/material";




function UL<T>({
  items,
  render,
  itemClick,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  items: T[];
  render: (item: T) => React.ReactNode;
  itemClick: (item: T) => void;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  );
}


const HomePage = () => {

  const posts = useSelector(selectPosts)
  const dispatch = useDispatch();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string }
    }

    if (target.name.value != "") {
      dispatch(add(target.name.value))
    }
    console.log("msg: Sent")
  }

  return (
    <div>
      <header className="App-header">
        QTE &lt;3
      </header>

      <section className="Section">
        <nav className="Nav">
          <UL
            items={posts}
            itemClick={() => { }}
            render={(todo) => <>{todo.text}</>}
          />
        </nav>

        <article className="Article">
          <UL
            items={posts}
            itemClick={() => { }}
            render={(todo) => <>{todo.text}</>}
          />

          
          <Divider/>
          <div className="card">
              <div className="container">
                <h4><b>Jane Doe</b></h4>
                <p>Interior Designer</p>
              </div>
          </div>
          <Divider/>
          <div className="card">
              <div className="container">
                <h4><b>Jane Doe</b></h4>
                <p>Interior Designer</p>
              </div>
          </div>

        </article>

      </section>

      <footer className="Footer">

        <h1>msg:</h1>
        <form onSubmit={onSubmitHandler}>

          <TextField type='text' name='name' id='name' />
          <Button
            style={{
              margin: 10,
              padding: 2,
              backgroundColor: '#999999'
            }}
            type='submit'
          >
            Send
          </Button>
        </form>
      </footer>
    </div>
  );
};

export default HomePage

