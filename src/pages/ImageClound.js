import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { AwsFile } from '../services/AwsFile';

const ImageClound = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        setSelectedImage(acceptedFiles[0]);
    }, []);

    const { getRootProps} = useDropzone({ onDrop })

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
                    <Card.Footer className="d-flex justify-content-center">
                        <Button onClick={enviar} variant="secondary">Enviar</Button>
                    </Card.Footer>
                </Card>
            </Container>
        </>
    );
}

export default ImageClound