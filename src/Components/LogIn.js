import { Button, Form, FormControl, FormGroup, FormLabel, } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";

const LogIn = () => {
    return (
        <>
            <Header />
            <main className="form-container">
                <Form className="form-box w-100 m-auto">
                    <h1 className="h-3 mb-3 fw-normal">Login</h1>
                    <p>Belum Registrasi? <Link to="/registrasi">Registrasi</Link></p>
                    <FormGroup className="mb-1">
                        <FormLabel>Email ID</FormLabel>
                        <FormControl type="email" />
                    </FormGroup>
                    <FormGroup className="mb-1">
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" />
                    </FormGroup>
                    <Button className="w-100 mt-3">Login</Button>
                </Form>
            </main>
        </>
    )
}
export default LogIn;