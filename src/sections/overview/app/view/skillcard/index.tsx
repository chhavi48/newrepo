import axios from 'axios';
import { Key, useState } from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Card, { CardProps } from '@mui/material/Card';
import {
  Chip,
  Grid,
  Dialog,
  Button,
  TextField,
  CardHeader,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';

import AnalyticsCurrentSubject from 'src/sections/overview/analytics/analytics-current-subject';

import QuizComponent from '../quiz/quiz';

interface Props extends CardProps {
  title: string;
  skillsArray: any;
  onSkillsUpdated: () => void;
  getUserDetails:()=>void;
}

export default function SkillCard({ title, skillsArray,getUserDetails, onSkillsUpdated, sx, ...other }: Props) {
  const [open, setOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [newSkill, setNewSkill] = useState('');
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [suggestedSkills, setSuggestedSkills] = useState<any[]>([]);
  const [deleteSkill, setDeleteSkill] = useState<string | null>(null); // New state for delete confirmation

  const theme = useTheme();
  console.log(quizCompleted);
  const handleClickOpen = async () => {
    setOpen(true);

    try {
      const response = await axios.get('/users/skillspopup', {
        headers: {
          'auth-token': `${window.localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
      });

      const limitedSkills = response.data.slice(0, 10);
      setSuggestedSkills(limitedSkills);
    } catch (error) {
      console.error('Error fetching suggested skills:', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setQuizOpen(false);
    setDeleteSkill(null);
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setQuizOpen(true);
    }
  };

  const handleQuizComplete = (score: number, answeredQuestions: number) => {
    setQuizCompleted(true);
    setQuizOpen(false);

    const skillData = {
      skill_name: newSkill,
      score,
    };

    axios
      .put('/users/skills', skillData, {
        headers: {
          'Content-Type': 'application/json',
          'Auth-Token': `${localStorage.getItem('auth-token')}`,
        },
      })
      .then((response) => {
        console.log('Skill added:', response.data);

        skillsArray.push({ skill_name: newSkill, score });

        setNewSkill('');

        // Notify parent about the skill update
        if (typeof onSkillsUpdated === 'function') {
          onSkillsUpdated();
        }
      })
      .catch((error) => {
        console.error('Error adding skill:', error);
      });
  };
  const handleDeleteSkill = (skillName: string) => {
    setDeleteSkill(skillName); // Set the skill to be deleted and open confirmation dialog
  };

  const confirmDelete = () => {
    if (deleteSkill) {
      const updatedSkills = skillsArray.filter((skill: any) => skill.skill_name !== deleteSkill);

      axios
        .delete(`/users/skills/${deleteSkill}`, {
          headers: {
            'Content-Type': 'application/json',
            'Auth-Token': `${localStorage.getItem('auth-token')}`, // Ensure token is passed for authentication
          },
        })
        .then((response) => {
          console.log('Skill deleted successfully:', response.data);
          setSuggestedSkills(updatedSkills); // Update local state to remove the skill
          setDeleteSkill(null); // Close confirmation dialog
          getUserDetails()
        })
        .catch((error) => {
          console.error('Error deleting skill:', error);
        });
    }
  };

  const handleSuggestedSkillClick = (skillName: string) => {
    setNewSkill(skillName);
    setQuizOpen(true);
  };

  // Prepare data for the chart
  const skillCategories = skillsArray?.map((skill: any) => skill?.skill_name);
  const skillScores = skillsArray?.map((skill: any) => skill?.score);

  const chartData = {
    categories: skillCategories,
    series: [
      {
        name: 'Skill Scores',
        data: skillScores,
      },
    ],
  };

  return (
    <>
      <Card sx={{ display: 'flex', height: 320, mt: 1, ...sx }} {...other}>
        <Box sx={{ flexGrow: 1 }}>
          <CardHeader title={title} />
          <Grid
            container
            sx={{
              mt: 1,
              borderTop: `dashed 1px ${theme.palette.divider}`,
            }}
          >
            <Grid item md={7} xs={12} lg={6}>
              <Box
                sx={{
                  mt: 1.2,
                  display: 'flex',
                  width: 350,
                  flexWrap: 'wrap',
                }}
              >
                <Grid sx={{ p: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {skillsArray?.map((skill: any, index: Key | null | undefined) => (
                    <Chip
                      key={index}
                      variant="outlined"
                      label={skill?.skill_name}
                      color="primary"
                      onDelete={() => handleDeleteSkill(skill?.skill_name)}
                    />
                  ))}
                  <Chip
                    variant="outlined"
                    label={skillsArray?.length > 0 ? 'Add Other' : 'Add Skills'}
                    color="warning"
                    onClick={handleClickOpen}
                  />
                </Grid>
              </Box>
            </Grid>
            <Grid item md={5} lg={5} xs={12}>
              {skillsArray?.length > 2 ? (
                <AnalyticsCurrentSubject title="Skill Analytics" chart={chartData} />
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 240,
                    borderRadius: 2,
                    p: 3,
                    textAlign: 'center',
                  }}
                >
                  <Box>
                    <strong>Add more than 3 skills to view the skill radar chart.</strong>
                  </Box>
                </Box>
              )}
            </Grid>
          </Grid>
        </Box>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a New Skill</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the name of the new skill you want to add, or select from the suggested
            skills.
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Skill"
            type="text"
            fullWidth
            variant="standard"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />

          {suggestedSkills.length > 0 && (
            <Box sx={{ mt: 2 }}>
              <DialogContentText>Suggested Skills:</DialogContentText>
              <Grid sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {suggestedSkills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    color="secondary"
                    onClick={() => handleSuggestedSkillClick(skill)}
                  />
                ))}
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddSkill}>Add</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deleteSkill} onClose={handleClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the skill {deleteSkill}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={confirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <QuizComponent open={quizOpen} onClose={handleClose} onComplete={handleQuizComplete} />
    </>
  );
}
