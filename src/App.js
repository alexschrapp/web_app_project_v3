import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col,  Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>

        <div className="panel header"variant= "primary" style= {{color: "#ffffff" }}>
          MAGMA
          <div className="panel-body" variant= "primary" style= {{color: "#574d57" }}>The Ultimative Website for Gaming Enthusiasts</div>
        </div>

        <Form>
          <Row>
            <Col md>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder= "Example@email.com"/>
            <Form.Text className="text-muted">
              We will never share your email address with third parties!
            </Form.Text>
            </Form.Group>
            </Col>

            <Col md>
            
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder= "Password"/>
          </Form.Group>
            </Col>
            <Col md>
          <Button variant="secondary" type ="submit">Login</Button>
          </Col >
          </Row>

        </Form>


        <Card classname="marginbotton-3" style= {{color: "#000" }}>
          <Row>
          <Col>
          
          <Card.Img src="https://www.logolynx.com/images/logolynx/0a/0a42cb2401255660546c8f1cfa7fb689.jpeg"/>
          <Card.Title>
            League Of Legends
          </Card.Title>
          </Col>
          <Col>
          <Card.Img src="https://seeklogo.com/images/C/csgo-logo-CAA0A4D48A-seeklogo.com.png"/>
          <Card.Title>
            Couterstrike: Global Offensive
          </Card.Title>
          </Col>
          </Row>
          <Card.Body>
            <Card.Title>
              1. Please choose the game.
            </Card.Title>
            <Card.Text>
              2. Press 'OK' to confirm choice.
            </Card.Text>
            <Button variant="primary">OK</Button>
          </Card.Body>
        </Card>

        <Breadcrumb>
          <Breadcrumb.Item> ---- </Breadcrumb.Item>
          <Breadcrumb.Item> ---- </Breadcrumb.Item>
          <Breadcrumb.Item> ---- </Breadcrumb.Item>
        </Breadcrumb> 
        <Alert variant="success">--------------</Alert>
        <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
