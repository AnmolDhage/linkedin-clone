import { Button, Container, Grid } from '@mui/material';
import { makeStyles } from "@material-ui/core";
import React, { useState } from 'react';
import HomeLeftCard2 from './HomeLeftCard2'
import HomeLeftCard1 from './HomeLeftCard1'
import HomeFirstCard from './HomeFirstCard'
import Posts from './Posts';
import HomeRightCard from './HomeRightCard'
const useStyles = makeStyles((theme) => ({
  home: {
    minHeight: '100vh',
    marginTop: theme.spacing(9),
    backgroundColor: '#EFEEEE'
  },
  gridItem: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  showMain: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  }
}));

function Home() {
  const classes = useStyles();
  const [hidden, setHidden] = useState(true);

  return <div className={classes.home}>
    <Grid container spacing={2} >

      <Grid item className={classes.gridItem} lg={1.5} sm={0} xs={0}></Grid>

      <Grid item className={classes.gridItem} lg={2} sm={3} xs={0}>

        <HomeLeftCard1
          show={hidden}
        />
        <HomeLeftCard2
          show={hidden}
        />
      </Grid>

      <Grid item lg={5} sm={6} xs={12}>
        <Container className={classes.showMain}>
          <div className={classes.showMain}>
            <HomeLeftCard1
              show={hidden}
            />
            <HomeLeftCard2
              show={hidden}
            />

            <div style={{ textAlign: 'center' }} ><Button onClick={() => setHidden(!hidden)}><span>Show More</span></Button></div>
          </div>
          <HomeFirstCard />
          <Posts
            avatar="images/Ranveer.jpg"
            name="Ranveer"
            status="following"
            description="Founder of BeerBiceps & Co-founder of Monk Entertainment"
            date="1w"
            caption="lorem ipsum dolor sit amet, consectetur adip"
            image="images/posts/postImage2.jpg"
            likesCount='122'
            commentsCount='98'
          />
          <Posts
            avatar="images/pp2.jpg"
            name="Lavanya. B"
            status="2nd"
            description="Cosmetic surgeon I OnabotulinumoxtinA (Botox Cosmetic) l Corporate Grooming"
            date="2w"
            caption="lorem ipsum dolor sit amet, consectetur adip"
            image="images/posts/postImage3.jpg"
            likesCount='210'
            commentsCount='130'
          />
          <Posts
            avatar="images/pp3.jpg"
            name="Matthijs Cox"
            status="3rd+"
            description="Building the next numerical computing ecosystem at ASML"
            date="4w"
            caption="lorem ipsum dolor sit amet, consectetur adip"
            image="images/posts/postImage4.jpg"
            likesCount='210'
            commentsCount='130'
          />
          <Posts
            avatar="images/pp4.jpg"
            name="Nikita Ambekar"
            status="1st"
            description="Web Development intern at Oasis Infobyte"
            date="1w"
            caption="lorem ipsum dolor sit amet, consectetur adip"
            image="images/posts/postImage5.jpg"
            likesCount='300'
            commentsCount='230'
          />
        </Container>
      </Grid>

      <Grid item className={classes.gridItem} lg={2} sm={3} xs={0}>
        <HomeLeftCard2
          show={hidden}
        />
      </Grid>

      <Grid item className={classes.gridItem} lg={1.5} sm={0} xs={0}></Grid>
    </Grid>
  </div>
}

export default Home;
