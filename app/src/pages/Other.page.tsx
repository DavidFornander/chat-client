import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectComments, selectPosts, selectUsers } from '../app/store'

const OtherPage = () => {
  
  const comments = useSelector(selectComments)
  const users = useSelector(selectUsers)
  const posts = useSelector(selectPosts)

  let coms: any[] = []


  const funkComment = () => {
    //console.log(comments);
    //console.log(comments[0]);
    //console.log(comments[0].post_id);

    comments.forEach(element => {
        
        if (element.post_id == 1){
          coms.push(element)
          //console.log(element);
          //console.log("was pused to coms");
          
        }
        //console.log(element.post_id);
    });
    console.log(coms);
  }

  const funkUser = () => {
    console.log(users);
    
  }

  const funkPost = () => {
    console.log(posts);

  }

    // ---------------- Dad Joke ------------------- //
    const url = 'https://icanhazdadjoke.com/';//:)
    const [joke, setJoke] = useState('random dad joke');
    const fetchDadJoke = async () => {
        try {
            const {data} = await axios.get(url, {
                headers:{
                    Accept: 'application/json'
                }
            })
            setJoke(data.joke);
        } catch (error) {
            console.log(error)
        }
    };
    // ---------------- Dad Joke ------------------- //

  return (
    <div>
      <div>
        Debugging page ----
        <Link to="/messages"> Home </Link>
        <Link to="/"> Signin </Link>
      </div>
      <div>
        <button onClick={funkComment}>comments</button>
        <button onClick={funkUser}>users</button>
        <button onClick={funkPost}>posts</button>
      </div>

      <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
    </div>
  )
}

export default OtherPage