import { useEffect, useState } from "react";
import Card from './components/Card';
import NavigationBar from "../../src/shared/NavigationBar";

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('');

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:3003/users');
        const data = await response.json();
        setUsers(data);
        console.log(data);
    }

    const handleFilterChange = (filterValue) => {
        setFilter(filterValue);
    };

    const filteredUsers = users.filter(user =>
        user.name && user.name.toLowerCase().includes(filter.toLowerCase())
    );
    
    useEffect(() => {
        fetchUsers();
    }, []);

    const handleFilterChange = (filterValue) => {
        setFilter(filterValue);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <NavigationBar onFilter={handleFilterChange}>
<<<<<<< HEAD
            <div style={{display:'flex', flexDirection: 'column'}}>
                {filteredUsers.map((user) => (
                    <div key={user.id} style={{padding: '2%'}}>
=======
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {filteredUsers.map((user) => (
                    <div key={user.id} style={{ padding: '2%' }}>
>>>>>>> eddacfd0fca1fbecf6dc9de46a01aadcf6158ba0
                        <Card user={user} />
                    </div>
                ))}
            </div>
        </NavigationBar>
    )
}

export default Dashboard;
