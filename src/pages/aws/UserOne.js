import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { AwsFile } from '../../services/AwsFile';
import User from './User';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const UserOne = () => {
    let { id } = useParams();
    const [data, setData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const response = await AwsFile.getOne(id);
            setData(response);
        }
        fetchData();
    }, [])

    const navegar = () => {
        navigate("/users")
    }

    return (
        <>
            <AiOutlineArrowLeft className='m-3 button-pattern' onClick={navegar} />
            <Container className='d-flex align-items-center justify-content-center vh-100'>
                <User user={data} hover={true} />
            </Container>
        </>
    );
}

export default UserOne