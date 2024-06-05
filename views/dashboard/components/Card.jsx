import React from 'react';
import { useNavigate } from 'react-router';
import userImage from '../../../xd.jpeg';

const Card = ({user}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        console.log(user.id);
        navigate(`/users/${user.id}`);
    }

    return (
        <div style={{width: '230px', height: '60px', border: 'solid black 2px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick = {handleClick}>
            <div>
                <img src={userImage} width={50} height={50} alt="user" />
            </div>

            <div style={{textAlign: 'center'}}>
                <p>
                    <div>{user.name}</div>
                </p>
                <p>
                    <div>{user.email}</div>
                </p>
            </div>
        </div>
    )

}

export default Card;