import './App.css';
import {Navbar,Nav,Container} from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Iframe } from 'react';



function App() {
  return (
    
    <div className="App">
     
     <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <div>
     <iframe width="420" height="315"
src="https://www.youtube.com/embed/DZ6-uXltzCY">
</iframe>
     </div>
  <div>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
<div>
  <Stack gap={2} className="col-md-5 mx-auto">
  <Button variant="secondary">Save changes</Button>
  <Button variant="outline-secondary">Cancel</Button>
</Stack>
  </div>
 
</>
    </div>
  );
}

export default App;
