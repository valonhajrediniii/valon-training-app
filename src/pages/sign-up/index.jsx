import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New email address</Form.Label>
        <Form.Control type="email" placeholder="Enter a new email adress" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>New password</Form.Label>
        <Form.Control type="password" placeholder="Enter a new password" />
      </Form.Group>
      <Form.Select id="disabledSelect" className="mb-3">
        <option>Select your gender</option>
      </Form.Select>
      <Button variant="primary" type="submit">
        Sign up
      </Button>
      <p>I already have an account <Link href={'/login-form'}>Back to Log in</Link></p>
    </Form>
  );
}

export default BasicExample;