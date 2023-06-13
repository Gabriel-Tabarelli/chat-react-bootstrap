import React, { useCallback, useState, useRef } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button, Container, Card, Form } from 'react-bootstrap';
import { AwsFile } from '../../services/AwsFile';

const ImageClound = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        setSelectedImage(acceptedFiles[0]);
    }, []);

    const { getRootProps } = useDropzone({ onDrop })
    // ------------------------------------------------ 

    const [userData, setUserData] = useState({
        nome: '',
        email: '',
        password: '',
    });

    // const validator = require('validator');
    const [errors, setErrors] = useState({});
    const form = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log("enviou!")

            AwsFile.create(selectedImage)
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        validateForm();
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        // Email
        if (!userData.email) {

        }
        const formElement = form.current;
        const formInputs = formElement.elements;
        const errors = {};
        let validad = true;
        for (let i = 0; i < formInputs.length; i++) {
            if (formInputs[i].required && !formInputs[i].value) {
                errors[formInputs[i].type] = ' ';
                validad = false;
            }
        }
        setErrors(errors);
        return validad;
    }
    // ------------------------------------------------

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center vh-100">
                <Card className='p-5 card-dark-pattern'>
                    <Card.Body>
                        <Card.Title className="text-center text-color-white">Bem vindo!</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center text-color-dark-secondary">Esperamos que goste do site!</Card.Subtitle>

                        <Form ref={form} onSubmit={handleSubmit} className='mt-4' noValidate>
                            <Form.Group className="mb-3" controlId="validationCustom01">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control name='email' value={userData.email || ''} onChange={handleChange} className='input-dark-pattern' isInvalid={!!errors.email} required type="email" placeholder="Digite o email" />
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="validationCustom02">
                                <Form.Label>Nome de usuário</Form.Label>
                                <Form.Control name='nome' value={userData.nome || ''} onChange={handleChange} className='input-dark-pattern' isInvalid={!!errors.text} required type="text" placeholder="Digite o nome de usuário" />
                                <Form.Control.Feedback type="invalid">{errors.text}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="validationCustom03">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control name='password' value={userData.password || ''} onChange={handleChange} className='input-dark-pattern' isInvalid={!!errors.password} required type="password" placeholder="Digite a senha" />
                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            </Form.Group>

                            <Container className='d-flex align-items-center justify-content-center mt-5 button-enter-pattern'>
                                <Button className="text-center w-100" type="submit">Cadastrar</Button>
                            </Container>
                        </Form>

                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem' }} className='m-5 card-dark-pattern'>
                    <Card.Header className="d-flex justify-content-center">
                        <Card.Title className='text-color-white'>Arraste e solte sua imagem!</Card.Title>
                    </Card.Header>
                    <Card.Body {...getRootProps({ className: 'dropzone' })}>
                        {selectedImage ? (
                            <Card.Img className="max-width-100" variant="top" src={URL.createObjectURL(selectedImage)} />
                        ) : (
                            <Container className='d-flex justify-content-center'>Solte sua imagem aqui</Container>
                        )}
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default ImageClound