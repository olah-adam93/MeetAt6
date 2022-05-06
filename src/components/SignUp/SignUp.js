import {useState} from 'react';

function SignUp() {
  const SignUpForm = ({handleClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      handleClose();
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <label> Username </label>
      <input
        type='text'
        name='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label> Password</label>
      <input
        type='password'
        name='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <Button type='submit' onClick={handleClose}>Signup</Button>
      </div>
    </form>
  );
}

export default SignUp;

