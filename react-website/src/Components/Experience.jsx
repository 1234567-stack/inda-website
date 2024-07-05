import React from 'react';
import { makeStyles } from '@mui/styles';
import '../css/Sections.css'
import '../css/HeroSection.css'
// import { Button } from "./Button";
// import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }));

// import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2), // Example of using theme.spacing
    background: theme.palette.primary.main,
  },
}));

const Experience = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      {/* Your content here */}
      <p style={{ color: theme.palette.secondary.main }}>Experience Component</p>
    </div>
  );
};

export default Experience;

// export default function Experience() {
//     const classes = useStyles();
  
//     function FormRow3() {
//       return (
//         <div>

//         </div>
    //     <React.Fragment>
    //       <Grid item xs={4}>
    //         <Paper className={classes.paper}>item</Paper>
    //       </Grid>
    //       <Grid item xs={4}>
    //         <Paper className={classes.paper}>item</Paper>
    //       </Grid>
    //       <Grid item xs={4}>
    //         <Paper className={classes.paper}>item</Paper>
    //       </Grid>
    //     </React.Fragment>
    //   );
    // }
    // function FormRow2() {
    //   return (
    //     <React.Fragment>
    //       <Grid item xs={12}>
    //         <Paper className={classes.paper}>item</Paper>
    //       </Grid>
    //     </React.Fragment>
    //   );
    // }
  
    // return (
    //   <div >
    //     <Grid container spacing={1}>
    //       <Grid container item xs={6} spacing={3}>
    //         <FormRow3 />
    //         <FormRow3 />
    //       </Grid>
    //       <Grid container item xs={6} spacing={3}>
    //         <FormRow2 />
    //       </Grid>
    //     </Grid>
//     );
//   }
// }
  