import { Avatar, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from "@material-ui/core";
import AddBoxIcon from '@mui/icons-material/AddBox';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const useStyles = makeStyles((theme) => ({
  home: {
    marginTop: theme.spacing(10),
    backgroundColor: '#EFEEEE'
  },
  gridItem: {
    height: '100vh'
  },
  profilePicOuter: {
    display: 'flex',
    justifyContent: 'center',
    height: '20px'
  },
  profilePic: {
    position: 'absolute',
    bottom: 32,
    border: "3px solid white"
  },
  profileCardSec2: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 14,
    fontWeight: 500,
    color: 'gray',
    padding: '8px 9px',
    "&:hover": {
      backgroundColor: "#E7E5E5"
    }
  },
  profileCardSec3: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 14,
    padding: '8px',
    "&:hover": {
      backgroundColor: "#E7E5E5"
    }
  },
  profileCardSec4: {
    display: "flex", fontWeight: '500', padding: '8px 9px', "&:hover": {
      backgroundColor: "#E7E5E5"
    }
  },
  extraContent: {
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.show ? "none" : "block")
    }
  }

}));

function HomeLeftCard1(props) {
  const show = props.show;
  const classes = useStyles({ show });

  return (
    <Card sx={{ width: "100%", backgroundColor: "white" }}>
      <CardMedia
        component="img"
        height="60"
        image="images/background.jpg"
        alt="green iguana"
      />
      <div className={classes.profilePicOuter}><Avatar className={classes.profilePic} alt="Remy Sharp" src="images/profilePic.jpeg" sx={{ width: 60, height: 60 }} /></div>
      <CardContent>
        <div style={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h6" component="div">
            Anmol Dhage
          </Typography>
          <Typography variant="body2" color="text.secondary">
            MERN Stack developer | Programmer | Video Editor
          </Typography></div>
      </CardContent>
      <div style={{ borderTop: '1px solid #E9E3E2' }}></div>
      <div className={classes.extraContent}>
        <div style={{ padding: "1rem 0" }}>
          <div className={classes.profileCardSec2}>Who viewed your profile <span style={{ color: "#52ADED", fontWeight: "500" }}>37</span></div>
          <div className={classes.profileCardSec2}><div>Connections <br /> <span style={{ color: 'black' }}>Grow your network</span></div> <span style={{ color: "#52ADED", fontWeight: "500" }}>375</span></div>
        </div>

        <div style={{ borderTop: '1px solid #E9E3E2' }}></div>

        <div className={classes.profileCardSec3}>
          <span>Access exclusive tools & insights</span>
          <span style={{ display: "flex", fontWeight: '500', paddingTop: 1 }}><AddBoxIcon style={{ fontSize: 20, color: "#EDCC52" }} />Try Premium for free</span>
        </div>

        <div style={{ borderTop: '1px solid #E9E3E2' }}></div>
        <div className={classes.profileCardSec4}>
          <BookmarkIcon /> My Items
        </div>
      </div>
    </Card>
  )
}

export default HomeLeftCard1;