import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import { Avatar, Badge, Grid, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { makeStyles } from "@material-ui/core";
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: "white",
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 !important'
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#E3EBEB",
    borderRadius: 3,
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
    }
  },
  shortSearch: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "none" : "flex"),
      paddingRight: 15
    }
  },
  canBtn: {
    marginRight: 5,
    alignItems: "center",
    display: (props) => (props.open ? "flex" : "none"),
  },
  input: {
    color: "black",
  },
  navIcon: {
    display: 'flex',
    gap: 3,
    flexDirection: 'column',
    alignItems: 'center',
    color: 'black',
    "&:hover": {
      color: "black"
    }
  },
  iconsAndSearch: {
    display: "flex",
    alignItems: "center",
  },
  navIconGrp: {
    paddingTop: '10px',
    paddingRight: '20px',
    display: "flex",
    justifyContent: 'end',
    alignItems: "center",
    gap: 30,
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "none" : "flex"),
      paddingTop: '5px',
    }
  },
  icon: {
    color: "gray",
    "&:hover": {
      color: "black"
    }
  },
  workSection: {
    borderLeft: "1px solid #E9E3E2",
    paddingTop: "10px",
    paddingLeft: "20px",
    color: "black",
    display: 'flex',
    gap: 10,
    textAlign: "center",
    justifyContent: "start",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    }
  },
  notNec: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    }
  },
  iconText: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    }
  },

  isNec: {
    display: "none !important",
    [theme.breakpoints.down("sm")]: {
      display: "flex !important",
    }
  },
  tryPrem: {
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    }
  }

}))


function Header() {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  const [anchorElUser, setAnchorElUser] = useState(null);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return <AppBar >
    <Toolbar className={classes.toolbar} variant="dense">
      <Grid container >
        <Grid item lg={1.5} sm={0}></Grid>
        <Grid item lg={7} sm={10} xs={12}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

            <div className={classes.iconsAndSearch}>

              <LinkedInIcon style={{ fontSize: 50, color: "#238AB3" }} />
              <div className={classes.search}>
                <SearchIcon style={{ margin: '0 5', color: "black" }} />
                <InputBase placeholder="Search..." className={classes.input} />
                <div className={classes.canBtn} onClick={() => setOpen(false)}>
                  <CancelIcon />
                </div>
              </div>
              <div className={classes.shortSearch}>
                <SearchIcon onClick={() => setOpen(true)} style={{ margin: '0 5', color: "black" }} /></div>
            </div>

            <div className={classes.navIconGrp}>

              <div className={classes.navIcon}>
                <Badge badgeContent={4} color="primary" >
                  <HomeIcon className={classes.icon} />
                </Badge>
                <Typography className={classes.iconText} style={{ fontSize: 10 }}>Home</Typography>
              </div>


              <div className={clsx(classes.navIcon, classes.notNec)}>
                <Badge badgeContent={4} color="primary">
                  <PeopleAltIcon className={classes.icon} />
                </Badge>
                <Typography className={classes.iconText} style={{ fontSize: 10 }}>My Network</Typography>
              </div>

              <div className={clsx(classes.navIcon, classes.notNec)}>
                <Badge badgeContent={4} color="primary">
                  <EmailIcon className={classes.icon} />
                </Badge>
                <Typography className={classes.iconText} style={{ fontSize: 10 }}>Jobs</Typography>
              </div>

              <div className={classes.navIcon}>
                <Badge badgeContent={2} color="primary">
                  <BusinessCenterIcon className={classes.icon} />
                </Badge>
                <Typography className={classes.iconText} style={{ fontSize: 10 }}>Messaging</Typography>
              </div>

              <div className={classes.navIcon}>
                <Badge badgeContent={4} color="primary">
                  <NotificationsIcon className={classes.icon} />
                </Badge>
                <Typography className={classes.iconText} style={{ fontSize: 10 }}>Notifications</Typography>
              </div>
              <div className={classes.navIcon}>
                <Avatar sx={{ width: 25, height: 25 }} alt="Profile" src="images/profilePic.jpeg" />
                <Typography onClick={handleOpenUserMenu} style={{ fontSize: 10, display: 'flex', alignItems: "center" }}>Me <ArrowDropDownIcon style={{ fontSize: 20 }} /></Typography>
                <Menu
                  sx={{ mt: "25px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {/* SavePOint */}

                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem className={classes.isNec} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Network</Typography>
                  </MenuItem>
                  <MenuItem className={classes.isNec} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Job</Typography>
                  </MenuItem>
                  <MenuItem className={classes.isNec} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Work</Typography>
                  </MenuItem>
                  <MenuItem className={classes.isNec} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Try Premium</Typography>
                  </MenuItem>
                </Menu>


              </div>
            </div>
          </div>

        </Grid>
        <Grid item lg={2} sm={2}>
          <div className={classes.workSection}>
            <div className={classes.navIcon}>
              <ViewComfyIcon />
              <Typography style={{ fontSize: 10, display: 'flex', alignItems: "center" }}>Work <ArrowDropDownIcon style={{ fontSize: 20 }} /></Typography>
            </div>
            <Typography className={classes.tryPrem} style={{ fontSize: 12, display: 'flex', alignItems: "center", flexDirection: 'column' }}> <span>Try Premium </span><span>for free</span></Typography>

          </div>
        </Grid>
        <Grid item lg={1.5} sm={0}></Grid>
      </Grid>
    </Toolbar>
  </AppBar>
}

export default Header;
