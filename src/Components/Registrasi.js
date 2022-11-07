import { Button, FormGroup, Form, FormControl, FormLabel, } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";

const Registrasi = () => {
    return (
        <>
            <Header />
            <main className="form-container">
                <Form className="form-box w-100 m-auto">
                    <h1 className="h-3 mb-3 fw-normal">Registrasi</h1>
                    <p>Sudah Registrasi? <Link to="/LogIn">Login</Link></p>
                    <FormGroup className="mb-1">
                        <FormLabel>User ID</FormLabel>
                        <FormControl type="text" />
                    </FormGroup>
                    <FormGroup className="mb-1" >
                        <FormLabel>Email ID</FormLabel>
                        <FormControl type="email" />
                    </FormGroup>
                    <FormGroup className="mb-1" >
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" />
                    </FormGroup>
                    <FormGroup className="mb-1">
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl type="password" />
                    </FormGroup>
                    <Button className="w-100 mt-3">Registrasi</Button>
                </Form>
            </main>
        </>
    )
}
export default Registrasi;