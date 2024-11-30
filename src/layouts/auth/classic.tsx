
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
  image?: string;
  children: React.ReactNode;
};

export default function AuthClassicLayout({ children, image, title }: Props) {
  const theme = useTheme();
  // const mdUp = useResponsive('up', 'md');

  const renderLogo = (
    <Avatar
      alt="Profile"
      src="https://i.ibb.co/w6RnYHS/propelx-Shortlogo.jpg"
      sx={{
        zIndex: 9,
        position: 'absolute',
        top: { xs: 16, md: 32 },
        left: { xs: 16, md: 32 },
        width: { xs: 48, md: 64 },
        height: { xs: 48, md: 64 },
      }}
    />
  );

  const renderBackground = (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(
            theme.palette.background.default,
            theme.palette.mode === 'light' ? 0.88 : 0.94
          ),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );

  const renderContent = (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: 1,
        minHeight: '100vh',
        px: 2,
        py: { xs: 5, md: 10 },
      }}
    >
      <Box
        sx={{
          maxWidth: 480,
          width: '100%',
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
          p: { xs: 3, md: 5 },
          textAlign: 'center',
        }}
      >
        {children}
      </Box>
    </Stack>
  );

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {renderBackground}
      {renderLogo}
      {renderContent}
    </Box>
  );
}
