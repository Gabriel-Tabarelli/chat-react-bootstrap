import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const Register = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <Card style={{ width: '35rem' }} className='p-5'>
                <Card.Body>
                    <Card.Title className="text-center">Bem vindo!</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center">Esperamos que volte novamente!</Card.Subtitle>
                    <Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Nome de usuário</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Register