import { useState } from 'react';
import { CiHome } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

const NavigationBar = ({ children, onFilter }) => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('');

    const handleNavigate = (route) => {
        navigate('/' + route);
    };

    const handleFilterChange = (e) => {
        const value = e.target.value;
        setFilter(value);
        onFilter(value); // Call the parent component's filter function
    };

    return (
        <div style={{
            width: '100%',
            height: '40px',
            boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)'
        }}>
            <div style={{ display: 'flex' }}>
                <div onClick={() => handleNavigate("")} style={{ display: 'flex', cursor: 'pointer' }}>
                    <CiHome />
                    <p>Dashboard</p>
                </div>
                <div onClick={() => handleNavigate("register")} style={{ display: 'flex', cursor: 'pointer' }}>
                    <p>Registro</p>
                </div>
                <input
                    style={{
                        border: '2px black solid',
                        width: '80px',
                        borderRadius: '10px'
                    }}
                    type='text'
                    placeholder="Filtrar por nombre"
                    value={filter}
                    onChange={handleFilterChange}
                />
            </div>
            <p>Dashboard</p>
            {children}
        </div>
    );
};

export default NavigationBar;
