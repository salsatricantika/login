import { Button, FormGroup, Form, FormControl, FormLabel, } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from 'react'

const Registrasi = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmpassword] = useState('');
    return (
        <>
            <Header />
            <main className="form-container">
                <Form className="form-box w-100 m-auto">
                    <h1 className="h-3 mb-3 fw-normal">Registrasi</h1>
                    <h6>Username anda adalah : {username}</h6>
                    <h6>Password anda adalah : {email} </h6>
                    <h6>Password anda adalah : {password} </h6>
                    <h6>Password anda adalah : {confirmPassword} </h6>
                    <p>Sudah Registrasi? <Link to="/LogIn">Login</Link></p>
                    <FormGroup className="mb-1">
                        <FormLabel>Username</FormLabel>
                        <FormControl type="text" onChange={(e) => setUsername(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="mb-1" >
                        <FormLabel>Email</FormLabel>
                        <FormControl type="email" onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="mb-1" >
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" onChange={(e) => setPassword(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="mb-1">
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl type="password" onChange={(e) => setConfirmpassword(e.target.value)} />
                    </FormGroup>
                    <Button className="w-100 mt-3">Registrasi</Button>
                </Form>
            </main>
        </>
    )
}
export default Registrasi;