import { Box, Grid, Button, Container, Typography, Card, CardMedia } from '@mui/material';

const HomePage = () => {
  console.log('homepage');
  return (
    <Grid container sx={{ justifyContent: 'center' }}>
      <Grid item md={10} lg={10} xs={12}>
        <Container maxWidth="lg" sx={{ py: 5 }}>
          {/* Header Section */}
          <Box sx={{ textAlign: 'center', mt: 10 }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontWeight: 'bold', color: 'primary.main' }}
            >
              Be the Top 1%
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 3, color: 'text.secondary' }}>
              Create a portfolio that companies want to see
            </Typography>
            <Button variant="contained" color="primary">
              Try For Free
            </Button>
          </Box>

          {/* Our Story Section */}
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Our Story
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8, mb: 4 }}>
              <b>PropelX was born from a powerful realization:</b> the disconnect between academic
              training and real-world job requirements leaves countless talented individuals
              underprepared for the workforce. Our platform equips students with tangible proof of
              their abilities, making them job-ready from day one. By integrating AI, real-world
              projects, and data-driven insights, PropelX bridges the gap between potential and
              performance, offering value to students, colleges, and companies alike.
            </Typography>
          </Box>

          {/* Products Section */}
          <Box sx={{ mt: 8 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ textAlign: 'center', fontWeight: 'bold', mb: 5 }}
            >
              Our Products
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  title: 'AI-Powered Learning',
                  description:
                    'Personalized learning paths adapt to individual skill levels and industry trends.',
                  image:
                    'https://private-user-images.githubusercontent.com/77965216/393938432-f99d1057-5fdc-407b-8d61-94ba0d7b6c21.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM3NjU3MTIsIm5iZiI6MTczMzc2NTQxMiwicGF0aCI6Ii83Nzk2NTIxNi8zOTM5Mzg0MzItZjk5ZDEwNTctNWZkYy00MDdiLThkNjEtOTRiYTBkN2I2YzIxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjA5VDE3MzAxMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWIxZDE3ODM1YzI1YmI5NjRiYmFkYTA3YTRiZWU0NGIwM2Y1Y2I1OTI2YjM1MzBhN2JhNjk4MmZjZmViN2U5NzQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.gLxE1jlwUGZtEcECcGt-mv149iK8n-FbIZAr2AemMbM',
                },
                {
                  title: 'Proof of Work',
                  description:
                    'Validated projects showcase skills, offering employers tangible evidence of expertise.',
                  image:
                    'https://private-user-images.githubusercontent.com/77965216/393943726-37ecbe6f-47f5-4421-904d-e8590cc39eb9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM3NjY1MjMsIm5iZiI6MTczMzc2NjIyMywicGF0aCI6Ii83Nzk2NTIxNi8zOTM5NDM3MjYtMzdlY2JlNmYtNDdmNS00NDIxLTkwNGQtZTg1OTBjYzM5ZWI5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjA5VDE3NDM0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBlMGI4ODQyZTFjYmEwMDhkNzRjZTNhM2MwOGM0MGM2YTZjNjljYmIwZjY1MGMzMDVhNDc1ZmZjZjllYTFmMmMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.AcP5G8ilXF9XsLI8KdU0tRFVJTNsFhjTrdWK-ALBHxk',
                },
                {
                  title: 'Pre-Vetted Talent Marketplace',
                  description:
                    'Companies access job-ready candidates, saving time and money with our AI Agent.',
                  image:
                    'https://private-user-images.githubusercontent.com/77965216/393943068-dec07663-36f0-467c-892b-2d5394a2a785.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM3NjY1MjMsIm5iZiI6MTczMzc2NjIyMywicGF0aCI6Ii83Nzk2NTIxNi8zOTM5NDMwNjgtZGVjMDc2NjMtMzZmMC00NjdjLTg5MmItMmQ1Mzk0YTJhNzg1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjA5VDE3NDM0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThjMWJlYmMwNmM1M2MwYWJjMDI1OTMzZWFkNDlmYjc0OTJmNjkyYTkzNDU3MDc3NTA0YjE2MGJlYjM4ZWEwMGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.pzIm3iTCziee02LP2flQFstDI1_cijtnJXnClvpFdKs',
                },
                {
                  title: 'Bridging Gaps',
                  description:
                    'We connect job seekers and employers on a unified platform for seamless collaboration.',
                  image: 'https://via.placeholder.com/400x250',
                },
                {
                  title: 'Future-Ready Workforce',
                  description:
                    'We prepare individuals to thrive in a rapidly evolving world with dynamic profiles.',
                  image: 'https://via.placeholder.com/400x250',
                },
              ].map((product, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card sx={{ boxShadow: 3 }}>
                    {/* <CardMedia component="img" height="200" image={product.image} alt={product.title} /> */}
                    <Box sx={{ p: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {product.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {product.description}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* About Us Section */}
          <Box sx={{ mt: 8 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ textAlign: 'center', fontWeight: 'bold', mb: 5 }}
            >
              About Us
            </Typography>
            <Grid container spacing={4} alignItems="center">
            
              <Grid item xs={12} md={12}>
                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8 }}>
                  At PropelX, we’re revolutionizing how individuals upskill and prepare for the
                  workforce. By combining AI-powered personalized learning paths, real-world proof
                  of work, and a pre-vetted talent marketplace, we empower students and
                  professionals to excel in their careers. Our mission is to bridge the gap between
                  education and industry demands, creating a seamless connection between talent and
                  opportunity.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default HomePage;
