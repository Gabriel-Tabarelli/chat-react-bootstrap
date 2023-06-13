import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button, Container, Card, Form } from 'react-bootstrap';
import { AwsFile } from '../../services/AwsFile';

const ImageClound = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const onDrop = useCallback(acceptedFiles => {
        setSelectedImage(acceptedFiles[0]);
    }, []);

    const { getRootProps } = useDropzone({ onDrop })

    const enviar = () => {
        AwsFile.create(selectedImage)
    }

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center vh-100">
                <Card style={{ width: '25rem' }}>
                    <Card.Header className="d-flex justify-content-center">
                        <Card.Title>Arraste e solte sua imagem!</Card.Title>
                    </Card.Header>
                    <Card.Body {...getRootProps({ className: 'dropzone' })}>
                        {selectedImage ? (
                            <Card.Img className="max-width-100" variant="top" src={URL.createObjectURL(selectedImage)} />
                        ) : (
                            <Container className='d-flex justify-content-center'>Solte sua imagem aqui</Container>
                        )}
                    </Card.Body>
                    {/* <Card.Footer className="d-flex justify-content-center">
                        <Button onClick={enviar} variant="secondary">Enviar</Button>
                    </Card.Footer> */}
                </Card>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <br></br>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </Container>
        </>
    );
}

export default ImageClound