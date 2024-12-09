import { Box, Grid, Button, Container, Typography } from '@mui/material';

const HomePage = () => {
  console.log('home');
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mt: 10 }}>
        <Typography variant="h3" gutterBottom>
          Be the top 1%
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Create your portfolio the way companies want to see
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Try For Free
        </Button>
      </Box>

      {/* Boxes Row */}
      {/* <Grid container spacing={2} justifyContent="center" sx={{ mt: 5 }}>
        <Grid item xs={12} sm={4} md={3}>
          <Paper
            elevation={3}
            sx={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Box 1
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper
            elevation={3}
            sx={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Box 2
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper
            elevation={3}
            sx={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Box 3
          </Paper>
        </Grid>
      </Grid> */}

      {/* Story Section */}
      <Grid container spacing={2} sx={{ justifyContent: 'center', mt: 4 }}>
        <Grid md={8} lg={8} xs={12}>
          <Box sx={{ textAlign: 'center', mb: 5, mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1" color="textSecondary">
              PropelX was born from a simple yet powerful realization: the disconnect between
              academic training and real-world job requirements leaves countless talented
              individuals underprepared for the workforce. Founded by a team of professionals with a
              shared passion for innovation, education, and employability, PropelX aims to transform
              how skills are built, validated, and presented. We envisioned a platform where
              students are not just taught but equipped with tangible proof of their abilities,
              making them job-ready from day one. By integrating AI, real-world projects, and
              data-driven insights, PropelX bridges the gap between potential and performance,
              offering value to students, colleges, and companies alike.
            </Typography>
          </Box>

          {/* Products Section */}
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="h5" gutterBottom>
              Product
            </Typography>
            <Typography variant="body1" color="textSecondary" component="div">
              <Box sx={{ textAlign: 'left', display: 'inline-block', margin: 'auto' }}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>
                    1. AI-Powered Learning:
                  </Typography>{' '}
                  PropelX designs personalized learning paths that adapt to individual skill levels
                  and industry trends. - Put the personalised learning snapshot
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>
                    2. Proof of Work:
                  </Typography>{' '}
                  Students showcase their skills through validated projects, offering employers
                  tangible evidence of expertise. - Snapshot of project section
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>
                    3. Pre-Vetted Talent Marketplace:
                  </Typography>{' '}
                  Companies access job-ready candidates, saving time and money in the recruitment
                  process with our very own AI Agent.
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>
                    4. Bridging Gaps:
                  </Typography>{' '}
                  We connect job seekers and employers on a unified platform, ensuring seamless
                  collaboration.
                </Box>
                <Box>
                  <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>
                    5. Future-Ready Workforce:
                  </Typography>{' '}
                  PropelX doesn’t just prepare individuals for jobs; it equips them to thrive in a
                  rapidly evolving world. - Snapshot of overall profile. At PropelX, we don’t just
                  create opportunities—we shape the future of employability.
                </Box>
              </Box>
            </Typography>
          </Box>

          {/* About Us Section */}
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="h5" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" color="textSecondary">
              At PropelX, we’re revolutionizing how individuals upskill and prepare for the
              workforce. By combining AI-powered personalized learning paths, real-world proof of
              work, and a pre-vetted talent marketplace, we empower students and professionals to
              excel in their careers. Our mission is to bridge the gap between education and
              industry demands, creating a seamless connection between talent and opportunity.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
