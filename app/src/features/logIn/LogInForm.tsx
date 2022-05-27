import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// URL to database
const url_users = 'http://localhost:3000/api/users';


const LogInForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    let navigate = useNavigate();

    
    const onSubmitHandler = async (e: any) => { 
        e.preventDefault();
      
        if( name != "" && email != "" && password != "" ){
            try {
                const resp = await axios.post(url_users, { name: name, email: email, password: password })
                navigate("messages")
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <section>
            <h2 className='text-center'>QTE Chat &lt;3</h2>
            <form className='form' onSubmit={onSubmitHandler}>
                <div className='form-row'>
                    <label htmlFor='name' className='form-label'>
                        name
                    </label>
                    <input
                        type='text'
                        className='form-input'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='form-row'>
                    <label htmlFor='email' className='form-label'>
                        email
                    </label>
                    <input
                        type='email'
                        className='form-input'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='form-row'>
                    <label htmlFor='password' className='form-label'>
                        password
                    </label>
                    <input
                        type='password'
                        className='form-input'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type='submit' className='btn btn-block'>
                    login
                </button>
            </form>
        </section>
    );
};
export default LogInForm;