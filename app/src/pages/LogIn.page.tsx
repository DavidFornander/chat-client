import "../index.css"
import { Link } from 'react-router-dom'
import React from 'react'
import LogInLayout from "../layouts/LogInLayout"
import LogInForm from "../features/logIn/LogInForm"

const LoginPage = () => {
    return (
        <div className="App-header">
            <LogInLayout>
                <LogInForm />
            </LogInLayout>
        </div>

    )
}

export default LoginPage