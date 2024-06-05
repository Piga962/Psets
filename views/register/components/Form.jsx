import { useState } from "react";

const Form = () => {

    const [form, setForm] = useState({
        userName: '',
        userEmail: '',
        userAge: '',
        userAddress: '',
        userGender: '',
        userHeigth: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        const newForm = {
            ...form, [name]: value,
        };
        setForm(newForm);
    };

    const handleSubitForm = async(e) => {
        e.preventDefault();
        try{
            const res = await fetch('http://localhost:3003/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form),
            });
            return res.status === 200? alert('Registro existoso') : alert('Error al registrar');
        } catch (error){
            alert('Error al registrar');
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Form</h1>
            <form>
                <input style={{height: '25px', paddingLeft:'5px'}}type="text" name="name" placeholder="Name" onChange={(handleChange)}/>

                <input style={{height:'25px', paddingLeft:'5px'}}  type="text" name="email" placeholder="Email" onChange={(handleChange)}/>

                <input style={{height:'25px', paddingLeft:'5px'}}  type="int" name="age" placeholder="Age" onChange={(handleChange)}/>

                <input style={{height:'25px', paddingLeft:'5px'}}  type="text" name="address" placeholder="Address" onChange={(handleChange)}/>

                <input style={{height:'25px', paddingLeft:'5px'}}  type="text" name="gender" placeholder="Gender" onChange={(handleChange)}/>

                <input style={{height:'25px', paddingLeft:'5px'}}  type="int" name="heigth" placeholder="Heigth" onChange={(handleChange)}/>


                <button style={{height:'35px', width:'120px', backgroundColor:'blue', color: 'white', borderRadius:'5px', border: 'none', type:'Submit'}}
                onClick={handleSubitForm}> 
                    Registrar
                </button>
            </form>
        </div>
    )
}

export default Form;