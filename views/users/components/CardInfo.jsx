import userImage from '../../../xd.jpeg';

const CardInfo = ({user}) => {
    return (
        <div style={{width: '230px', height: '60px', border: 'solid black 2px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        
        < img src={userImage} width={50} height={50} alt="user" />
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.age}</p>
        <p>{user.address}</p>
        <p>{user.heigth}</p>
        </div>
    )
}

export default CardInfo;