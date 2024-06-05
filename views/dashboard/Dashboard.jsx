import { useEffect, useState } from "react";
import Card from './components/Card';
import NavigationBar from "../../src/shared/NavigationBar";

const Dashboard = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async() => {
        const response = await fetch('http://localhost:3003/users');
        const data = await response.json();
        setUsers(data);
        console.log(data);
      }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <NavigationBar>
            <div style={{display:'flex', flexDirection: 'column'}}>
                {users.map((user) => (
                    <div key={user.id} style={{padding: '2%'}}>
                        <Card user={user} />
                    </div>
                ))}
            </div>
        </NavigationBar>
    )
}

export default Dashboard;