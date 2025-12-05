import { useState } from 'react';
import { useUserStore } from '../stores/user';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const userStore = useUserStore();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await userStore.login(username, password);
    navigate('/dashboard');
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Login</h2>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <br />
      <input
        value={password}
        type="password"
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
