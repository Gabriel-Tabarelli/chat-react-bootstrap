import React, { useState, useRef } from 'react'
import { Container, Card, Form, Button } from 'react-bootstrap';

const Register = () => {

  const [errors, setErrors] = useState({});
  const form = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    const formElement = form.current;
    const formInputs = formElement.elements;
    const errors = {};
    for (let i = 0; i < formInputs.length; i++) {
      if (formInputs[i].required && !formInputs[i].value) {
        errors[formInputs[i].type] = 'Este campo é obrigatório!';
      }
    }
    setErrors(errors);
  }


  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh'}}>
      <Card style={{ width: '35rem', background: '#313338', color: '#b5bac1' }} className='p-5'>
        <Card.Body>
          <Card.Title style={{color: '#FFFFFF'}} className="text-center">Bem vindo!</Card.Title>
          <Card.Subtitle style={{color: '#a2a7ae'}} className="mb-2 text-muted text-center">Esperamos que goste do site!</Card.Subtitle>

          <Form ref={form} onSubmit={handleSubmit} className='mt-4' noValidate>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>E-mail</Form.Label>
              <Form.Control isInvalid={!!errors.email} required type="email" placeholder="Enter email" />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Label>Nome de usuário</Form.Label>
              <Form.Control isInvalid={!!errors.text} required type="text" placeholder="Enter email" />
              <Form.Control.Feedback type="invalid">{errors.text}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustom03">
              <Form.Label>Senha</Form.Label>
              <Form.Control isInvalid={!!errors.password} required type="password" placeholder="Password" />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>
            <Container className='d-flex align-items-center justify-content-center mt-4'>
              <Button className="text-center" type="submit">Cadastrar</Button>
            </Container>
          </Form>

        </Card.Body>
      </Card>
    </Container>
  )
}

export default Register