import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProfileCardFn from './components/ProfileCardFn';
import RenderingPlayground from './components/RenderingPlayground';
import UserStatus from './components/UserStatus';

// Page Components
const Home = ({ user }) => (
  <div className="page-home">
    <h1>Home Page</h1>
    <section>
      <h2>Profile Section</h2>
      <ProfileCardFn />
    </section>

    <hr style={{ margin: '30px 0' }} />

    <section>
      <h2>User Status Demo</h2>
      <UserStatus user={user} />
    </section>

    <hr style={{ margin: '30px 0' }} />

    <section>
      <RenderingPlayground />
    </section>
  </div>
);

const About = () => <div className="page"><h1>About Page</h1><p>This is the user profile application.</p></div>;
const Contact = () => <div className="page"><h1>Contact Page</h1><p>Contact us at example@email.com.</p></div>;

function App() {
  // Toggle User State
  const [user, setUser] = useState(null);

  const toggleUser = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({
        name: "Jane Smith",
        email: "jane.smith@example.com",
        isActive: true
      });
    }
  };

  return (
    <div className="app-container">
      <nav style={{ padding: '15px', background: '#eee', marginBottom: '20px', display: 'flex', gap: '15px' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <div style={{ marginLeft: 'auto' }}>
          <button onClick={toggleUser}>
            {user ? "Simulate Logout (Set Null)" : "Simulate Login (Set User)"}
          </button>
        </div>
      </nav>

      <div style={{ padding: '0 20px' }}>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
