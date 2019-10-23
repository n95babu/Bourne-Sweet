import React from 'react';
import './Desserts.css'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles({
})
const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <a href="https://www.facebook.com/" target='blank'> <BottomNavigationAction value="recents" icon={<FacebookIcon />} /> </a>
      <a href="https://www.instagram.com/" target='blank'> <BottomNavigationAction value="recents" icon={<InstagramIcon />} /> </a>
      <a href="https://www.twitter.com/" target='blank'> <BottomNavigationAction value="recents" icon={<TwitterIcon />} /> </a>

    </BottomNavigation>
  );
}

export default Footer;
