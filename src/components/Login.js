import React, {useState, useEffect} from 'react'
import { Form, Button} from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import { authAction } from '../redux/actions/auth.actions';


const Login = () => {
    const history = useHistory();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(authAction.login({email: email, password: password}))
    }
    useEffect(()=>{
        if (isAuthenticated) history.push("/")
    },[isAuthenticated])
    return (
        <>
           <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Form.Text >
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </>
    )
}

export default Login
