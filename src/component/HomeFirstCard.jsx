import { makeStyles } from "@material-ui/core";
import { Avatar, Button, Card, CardContent, TextField } from "@mui/material";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArticleIcon from '@mui/icons-material/Article';


const useStyles = makeStyles((theme) => ({
  homeFirstCard: {
    display: 'flex',
    alignItems: 'center',
    gap: 12
  },
  homeButtonGrp: {
    paddingTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    color: '#767676 !important',
  },
  buttonText: {
    [theme.breakpoints.down("sm")]: {
      display: 'none',
    }
  }
}))

function HomeFirstCard() {
  const classes = useStyles();

  return (
    <Card >
      <CardContent style={{ padding: '0 !important' }}>
        <div className={classes.homeFirstCard}><Avatar alt="Anmol Dhage" src="images/profilePic.jpeg" />
          <TextField style={{ borderRadius: '10px !important' }} fullWidth label="Search.." id="inputRounded" />
        </div>
        <div className={classes.homeButtonGrp}>
          <Button className={classes.button} variant="text" startIcon={<PhotoSizeSelectActualIcon />}><span className={classes.buttonText}>Photo</span></Button>
          <Button className={classes.button} variant="text" startIcon={<VideoLibraryIcon />}><span className={classes.buttonText}>Video</span></Button>
          <Button className={classes.button} variant="text" startIcon={<DateRangeIcon />}><span className={classes.buttonText}>Event</span></Button>
          <Button className={classes.button} variant="text" startIcon={<ArticleIcon />}><span className={classes.buttonText}>Write Article</span></Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default HomeFirstCard;