import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero 
      isLoggedIn={false}
      onChatClick={() => console.log('Chat clicked')}
      onLoginClick={() => console.log('Login clicked')}
    />
  );
}
