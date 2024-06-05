import {useEffect, useState} from "react"
import {useParams} from "react-router-dom";

import NavigationBar from "../../src/shared/NavigationBar";
import PrevDescription from "./components/PrevDescription";
import CardInfo from "./components/CardInfo";

const Users = () => {

    const {id} = useParams();
    const idAsNumber = parseInt(id);
    const [user, setUser] = useState([]);
    const [form, setForm] = useState({
        user_id: idAsNumber,
        description: '',
        prescription: ''
    })
    
    const [isLoading, setIsLoading] = useState(false);
    const [descriptions, setDescriptions] = useState([]);
    
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        const newform = {
            ...form,
            [name] : value
        }
        setForm(newform);
    }

    const fetchDescription = async () => {
        const response = await fetch('http://localhost:3003/description/'+id);
        const data = await response.json();
        setDescriptions(data);
        return data;
    }

    const fetchUserById = async () =>{
        const response = await fetch('http://localhost:3003/users/'+id);
        const data = await response.json();
        setUser(data);
        return data;
    }

    const handleGenerateHelp = async () => {
        const prompt = {
            prompt: form.description,
        }
        setIsLoading(true);
        try{
            const response = await fetch('http://localhost:3003/chat/gemini', {
                method: 'POST', 
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify(prompt),
            });
            const data = await response.json();
            setForm({...form, prescription: data.response});
            console.log(data);
            return data;
        } catch(error){
            console.log(error);
        }
        setIsLoading(false);
    }

    const createDescription = async (e) => {
        e.preventDefault();
        console.log(form);
        try{
            const response = await fetch(('http://localhost:3003/description/'+id), {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(form),
            });
            return response.status === 201 ? alert('Descripcion creada') : alert('Error al crear descripcion');
        }catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchDescription();
        fetchUserById();
    },[])

    return (
        <NavigationBar>
            <div style={{display:'flex', justifyContent:'center'}}>
                <div>
                    <CardInfo user = {user}/>
                </div>
                <div>
                    <PrevDescription descriptions = {descriptions}/>
                </div>
                <div>
                    <p>Description</p>
                    <textarea
                        label="Description"
                        value = {form.description}
                        name = 'description'
                        onChange = {handleInputChange}
                    />
                    <p>Prescription</p>
                    <textarea
                    label="Prescription"
                        value = {form.prescription}
                        name = 'prescription'
                        onChange = {handleInputChange}
                    />
                    <div>
                        <button 
                        style={{
                            height: '35px',
                            width: '120px',
                            backgroundColor: 'blue',
                            color: 'white',
                            borderRadius: '5px',
                            border: 'none'
                        }}
                        disabled={isLoading}
                        onClick={handleGenerateHelp} 
                        >
                            <p>
                                {isLoading ? 'Cargando': 'Generar Respuesta'}
                            </p>
                        </button>
                        <button 
                        style={{
                            height: '35px',
                            width: '120px',
                            backgroundColor: 'blue',
                            color: 'white',
                            borderRadius: '5px',
                            border: 'none'
                        }}
                        onClick={createDescription} 
                        >
                            <p>Subir</p>
                        </button>
                    </div>
                </div>
            </div>
        </NavigationBar>
    )
}

export default Users;