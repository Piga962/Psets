
const PrevDescription = ({descriptions}) =>{
    return (
        <div>
            {descriptions.map((des, index) =>(
                <p key = {index} > {des.name}
                {des.description}
                </p>
            ))}
        </div>
    );
};

export default PrevDescription;