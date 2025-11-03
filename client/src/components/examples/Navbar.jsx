import Navbar from '../Navbar';

export default function NavbarExample() {
  return (
    <Navbar 
      isLoggedIn={false}
      username="user@example.com"
      onLoginClick={() => console.log('Login clicked')}
      onLogoutClick={() => console.log('Logout clicked')}
    />
  );
}
