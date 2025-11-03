import { useState } from 'react';
import LoginModal from '../LoginModal';

export default function LoginModalExample() {
  const [open, setOpen] = useState(true);

  return (
    <LoginModal 
      open={open}
      onOpenChange={setOpen}
      onLogin={(email) => console.log('Logged in as:', email)}
    />
  );
}
