import React from 'react';
import { useNavigate } from 'react-router';
import userImage from '../../../user.jpeg';

const Card = ({ user }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(user.id);
        navigate(`/users/${user.id}`);
    }

    return (
        <div
            style={{
                width: '230px',
                height: '60px',
                border: 'solid black 2px',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
            }}
            onClick={handleClick}
        >
            <div>
                <img src={userImage} width={50} height={50} alt="user" />
            </div>

            <div style={{ textAlign: 'center', marginLeft: '10px' }}>
                <div>{user.name}</div>
                <div>{user.email}</div>
            </div>
        </div>
    );
}

export default Card;
