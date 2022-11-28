import { Button, Form, FormControl, FormGroup, FormLabel, } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from 'react'


const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <Header />
            <main className="form-container">
                <Form className="form-box w-100 m-auto">
                    <h1 className="h-3 mb-3 fw-normal">Login</h1>
                    <h6>Username anda adalah : {username}</h6>
                    <h6>Password anda adalah : {password} </h6>
                    <p>Belum Registrasi? <Link to="/registrasi">Registrasi</Link></p>
                    <FormGroup className="mb-1">
                        <FormLabel>Username</FormLabel>
                        <FormControl type="text" onChange={(e) => setUsername(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="mb-1">
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" onChange={(e) => setPassword(e.target.value)} />
                    </FormGroup>
                    <Button className="w-100 mt-3">Login</Button>
                </Form>
            </main>
        </>
    )
}
export default LogIn;