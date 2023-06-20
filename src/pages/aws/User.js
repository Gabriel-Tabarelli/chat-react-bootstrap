import React, { useParams } from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const User = (props) => {

    const navigate = useNavigate();

    const navegar = () => {
        navigate('/user/' + props.user.id)
    }

    return (
        <Card className='card-dark-pattern' onClick={navegar} style={{ width: '16rem', height: '20rem', cursor: 'pointer' }}>
            <Card.Img className='h-50 max-width-50' variant="top" src={props.user.uuid} />
            <Card.Body>
                <Card.Title>{props.user.nome}</Card.Title>
                <Card.Text>
                    Nome: {props.user.nome}
                    <br />
                    Email: {props.user.email}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default User