import axios from 'axios';
import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { _appFeatured } from 'src/_mock';
import { SeoIllustration } from 'src/assets/illustrations';

import { useSettingsContext } from 'src/components/settings';

import SkillCard from './skillcard';
import AppWelcome from '../app-welcome';
import AppFeatured from '../app-featured';
import AppTopRelated from '../app-top-related';
import ConnectSocialMedia from './connectsocialmedia';
import ProjectCards from './connectsocialmedia/projectcard';

// ----------------------------------------------------------------------

interface UserData {
  name: string;
  phone: any;
  profileImageUrl: any;
  email: string;
  skills: any[];
  projects: any[];
  socialMediaLinks: SocialMediaLink[];
}

interface Article {
  title: string;
  link: string;
}

interface SocialMediaLink {
  platform: string;
  link: string;
}

export default function OverviewAppView() {
  const settings = useSettingsContext();

  const [userData, setUserdata] = useState<UserData | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);

  const getUserDetails = async () => {
    try {
      // Fetch user details
      const response = await axios.get('/users/me', {
        headers: {
          'auth-token': `${window.localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
      });

      const user = response?.data;
      localStorage.setItem('id', user._id);
      setUserdata(user);

      // Process skills if they exist
      if (user.skills && user.skills.length > 0) {
        // Extract skill names
        const skillsString = user.skills
          .map((skill: { skill_name: any }) => skill.skill_name) // Get the skill_name from each object
          .join(', '); // Join them into a single string

        console.log(skillsString, 'skillssss'); // Debugging log

        // Fetch articles based on skills
        const feedResponse = await axios.post(
          '/feeds/latest-articles',
          {
            skill: skillsString,
          },
          {
            headers: {
              'auth-token': `${window.localStorage.getItem('auth-token')}`,
              'Content-Type': 'application/json',
            },
          }
        );

        // Extract and set articles
        const articlesData = feedResponse?.data?.articles.map(
          (article: { title: any; link: any }) => ({
            title: article.title,
            link: article.link,
          })
        );

        setArticles(articlesData);
      }
    } catch (error) {
      console.error('Error uploading image:::::', error);
    }
  };

  const refreshArticles = async () => {
    if (userData?.skills && userData.skills.length > 0) {
      const skillsString = userData.skills.join(', ');

      try {
        const feedResponse = await axios.post(
          '/feeds/latest-articles',
          { skill: skillsString },
          {
            headers: {
              'auth-token': `${window.localStorage.getItem('auth-token')}`,
              'Content-Type': 'application/json',
            },
          }
        );

        const articlesData = feedResponse?.data?.articles.map((article: any) => ({
          title: article.title,
          link: article.link,
        }));

        setArticles(articlesData);
      } catch (error) {
        console.error('Error refreshing articles:', error);
      }
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid md={8} lg={8} xs={12}>
          <AppWelcome
            title={`Welcome back 👋 \n ${userData?.name}`}
            description={`Phone No: ${userData?.phone}`}
            otherinfo={`Email : ${userData?.email}`}
            userData={userData}
            img={
              <SeoIllustration profilePic="https://static.vecteezy.com/system/resources/previews/026/976/801/non_2x/3d-icon-avatar-business-woman-with-glasses-illustration-of-smiling-happy-girl-cartoon-close-up-portrait-of-standing-girl-on-isolated-on-transparent-background-generative-ai-png.png" />
            }
            socialMediaLinks={userData?.socialMediaLinks || []} // Pass social media links here
          />
          <SkillCard
            getUserDetails={getUserDetails}
            onSkillsUpdated={refreshArticles}
            skillsArray={userData?.skills}
            title="Skills"
          />

          <ConnectSocialMedia
            getUserDetails={getUserDetails}
            title="Proof of Work"
            socialMediaLinks={userData?.socialMediaLinks || []}
          />
          <ProjectCards posts={userData?.projects} title="Your Projects" />
        </Grid>
        <Grid
          sx={{
            height: '600px',
          }}
          md={4}
          lg={4}
          xs={12}
        >
          <AppTopRelated title="Your Learning Journal" list={articles} />
          <AppFeatured list={_appFeatured} />
        </Grid>
      </Grid>
    </Container>
  );
}
