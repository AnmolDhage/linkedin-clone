import { Card, Collapse, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { makeStyles } from "@material-ui/core";
import React from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles((theme) => ({
  expandIcon: {
    visibility: 'hidden'
  },
  collapse: {
    cursor: 'pointer',
    padding: "0 5px",
    "&:hover $expandIcon": {
      visibility: 'visible'
    }
  },
  collapseText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'gray',
    cursor: 'pointer'
  },
  discover: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    "&:hover": {
      backgroundColor: "#E7E5E5"
    }
  },
  extraContent: {
    [theme.breakpoints.up("sm")]: {
      position: 'sticky',
      top: '70px'
    },
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.show ? "none" : "block")
    }
  }
}))

function HomeLeftCard2(props) {

  const [openRecent, setOpenRecent] = React.useState(true);
  const [openGroups, setOpenGroups] = React.useState(true);
  const show = props.show;
  const classes = useStyles({ show });

  const handleRecentClick = () => {
    setOpenRecent(!openRecent);
  };
  const handleGroupClick = () => {
    setOpenGroups(!openGroups);
  };

  return <Card className={classes.extraContent} sx={{ marginTop: 2 }}>
    <List
      sx={{ width: '100%' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <div style={{ marginBottom: 15 }}>
        <div className={classes.collapse}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{ paddingLeft: 5 }}>Recent</div>
            <div className={classes.expandIcon}>
              {openRecent ? <ExpandLessIcon onClick={handleRecentClick} /> : <ExpandMoreIcon onClick={handleRecentClick} />}
            </div>
          </div>
        </div>
        <Collapse in={openRecent} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItemButton style={{ padding: "0 10px" }}  >
              <ListItemText primary={<Typography className={classes.collapseText}>Front End Developer Group</Typography>} />
            </ListItemButton>
            <ListItemButton style={{ padding: "0 10px" }} >
              <ListItemText primary={<Typography className={classes.collapseText}>Data Hackathon</Typography>} />
            </ListItemButton>
          </List>
        </Collapse>
      </div>

      <div style={{ marginBottom: 15 }}>
        <div className={classes.collapse}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{ paddingLeft: 5, color: 'blue', fontWeight: 500 }}>Group</div>
            <div className={classes.expandIcon}>
              {openGroups ? <ExpandLessIcon onClick={handleGroupClick} /> : <ExpandMoreIcon onClick={handleGroupClick} />}
            </div>
          </div>
        </div>
        <Collapse in={openGroups} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItemButton style={{ padding: "0 10px" }}  >
              <ListItemText primary={<Typography className={classes.collapseText}>Front End Developer Group</Typography>} />
            </ListItemButton>
            <ListItemButton style={{ padding: "0 10px" }} >
              <ListItemText primary={<Typography className={classes.collapseText}>See all</Typography>} />
            </ListItemButton>
          </List>
        </Collapse>
      </div>
    </List>

    <div style={{ borderTop: '1px solid #E9E3E2' }}></div>

    <div className={classes.discover}> Discover More</div>
  </Card>;

}

export default HomeLeftCard2;
