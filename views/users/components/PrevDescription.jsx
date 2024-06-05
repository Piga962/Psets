const PrevDescription = ({ descriptions }) => {
    // Check if descriptions is an array
    if (!Array.isArray(descriptions)) {
        console.error('descriptions is not an array:', descriptions);
        return null; // or return some default UI
    }

    return (
        <div>
            {descriptions.map((des, index) => (
                <p key={index}>
                    {des.name}
                    {des.description}
                </p>
            ))}
        </div>
    );
};

export default PrevDescription;
