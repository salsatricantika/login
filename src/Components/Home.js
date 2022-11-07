import { Col, Container, Row } from "react-bootstrap"
import Header from "./Header";

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <Row className="py-5">
                    <Col><h2 className="caption">Selamat Datang</h2>
                        <h4 className="caption2">ini adalah halaman beranda</h4>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Home;