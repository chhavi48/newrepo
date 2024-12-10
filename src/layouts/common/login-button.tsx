import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import { Theme, SxProps } from '@mui/material/styles';

type Props = {
  sx?: SxProps<Theme>;
};

export default function LoginButton({ sx }: Props) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login-page'); // Navigate to the JWT login page
  };
  const handleSignUpClick = () => {
    navigate('/auth/jwt/register'); // Navigate to the
  };

  return (
    <>
      <Button variant="outlined" sx={{ mr: 1, ...sx }} onClick={handleSignUpClick}>
        Sign Up
      </Button>
      <Button variant="outlined" sx={{ mr: 1, ...sx }} onClick={handleLoginClick}>
        Login
      </Button>
    </>
  );
}
