import { CiHome } from "react-icons/ci";
import { useNavigate } from "react-router";

const NavigationBar = ({children}) => {

    const navigate = useNavigate();

    const handleNavigate = (route) =>{
        navigate('/'+route);
    }
    return(
        <div style={{width:'100%', 
        height: '40px', 
        boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)'
        }}
    >
        <div style={{display: 'flex'}}>
            <div onClick={() => handleNavigate("")} style = {{display:'flex', cursor:'pointer'}}>
                <CiHome />
                <p>Dashboard</p>
            </div>
            <div onClick={() => handleNavigate("register")} style = {{display:'flex', cursor:'pointer'}}>
                <p>Registro</p>
            </div>            
            <input style={{border: '2px black solid', 
            width: '80px', 
            borderRadius:'10px'
            }}
            type='text' placeholder="Filtrar por nombre"/>
        </div>
        <p>Dashboard</p>
        {children}
        </div>
    )
}

export default NavigationBar;