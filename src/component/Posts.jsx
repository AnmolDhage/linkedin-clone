import { makeStyles } from "@material-ui/core";
import { Avatar, Button, Card, CardContent, CardMedia } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const useStyles = makeStyles((theme) => ({
  postCard: {
    marginTop: 10
  },
  postCardTitleGroup: {
    display: 'flex'
  },
  postCardButtonGrp: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'space-between',
    margin: "0 15px",
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

function Posts(props) {

  const classes = useStyles();
  return <Card className={classes.postCard}>
    <CardContent>
      <div className={classes.postCardTitleGroup}>
        <Avatar alt={props.name} src={props.avatar} sx={{ width: 56, height: 56, marginRight: 1 }} />
        <div>
          <div>
            <span style={{ fontSize: 16, fontWeight: 'bold' }}>{props.name}
            </span>
            <FiberManualRecordIcon style={{ fontSize: 10, color: '#919191', paddingLeft: 5 }} />
            <span style={{ fontSize: 15, color: "#919191" }}> {props.status}
            </span>
          </div>
          <span style={{ fontSize: 13, color: '#919191' }}>{props.description}</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>{props.date}</span>
            <FiberManualRecordIcon style={{ fontSize: 5, color: '#919191', padding: "3px 0 0 5px" }} />
            <span><PublicIcon style={{ fontSize: 20, color: '#919191', padding: "5px 0 0 5px" }} /></span></div>
        </div>
      </div>
      <div className={classes.postDescription}>
        {props.caption}
      </div>
      <div>
        <img style={{ margin: "10px 0", width: "100%" }} src={props.image} alt="post" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <div style={{ display: "flex", alignItems: 'center' }}><ThumbUpIcon style={{ fontSize: "13", marginTop: 3 }} /> <span style={{ fontSize: 15, marginLeft: 3 }}> {props.likesCount}</span>
        </div>
        <span style={{ fontSize: 14 }} > {props.commentsCount} comments</span>
      </div>
      <div style={{ borderTop: '1px solid #E9E3E2' }}></div>
      <div className={classes.postCardButtonGrp}>
        <Button className={classes.button} startIcon={<ThumbUpIcon />}><span className={classes.buttonText}>Like</span></Button>
        <Button className={classes.button} startIcon={<ChatOutlinedIcon />}><span className={classes.buttonText}>Comment</span></Button>
        <Button className={classes.button} startIcon={<ReplyOutlinedIcon />}><span className={classes.buttonText}>Share</span></Button>
        <Button className={classes.button} startIcon={<SendOutlinedIcon />}><span className={classes.buttonText}>Send</span></Button>

      </div>
    </CardContent>
  </Card>;
};

export default Posts;
