import { useState } from 'react'
import axios from 'axios';

const url = 'http://localhost:3000/users';

const GetUsers = () => {
    const [name, setName] = useState('anonymus');
    
    const getUser = async () => {
        try {
            const {data} = await axios.get(url)
            setName(data[data.length-1].username);
            console.log(data[data.length-1].username)
        } catch (error) {
            console.log(error)
        }
    };

  return (
    <section className='section'>
    <button className='btn' onClick={getUser}>
      random joke
    </button>
    <p className='dad-joke'>{name}</p>
  </section>
  )
}

export default GetUsers