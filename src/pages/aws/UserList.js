import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { AwsFile } from '../../services/AwsFile';
import User from './User';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


const UserList = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const response = await AwsFile.getAll();
            setData(response);
        }
        fetchData();
    }, []);

    console.log(data);

    const navegar = () => {
        navigate('/image')
    }

    return (
        <>
            <AiOutlineArrowLeft className='m-3 button-pattern' onClick={navegar}/>
            <Container className='p-4'>
                <Row>
                    {data.map((user, index) => (
                        <Col key={index} xs={6} md={3}  className="text-center mb-4 card-hover">
                            <User user={user}/>
                        </Col>
                    ))}
                </Row>

            </Container>
        </>
    )
}

export default UserList