import React from 'react'
import './Desserts.css'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import image from '../assets /pie_1.jpg'
import image2 from '../assets /pie_2.jpg'
import image3 from '../assets /pie_3.jpg'
import image4 from '../assets /pie_4.jpg'
import image5 from '../assets /pie_5.jpg'
import image6 from '../assets /pie_6.jpg'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },

  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const tileData = [
  {
    img: image,
    title: 'NB',
    author: 'NB'
  },
  {
    img: image2,
    title: 'NB',
    author: 'NB'
  },
  {
    img: image3,
    title: 'NB',
    author: 'NB'
  },
  {
    img: image4,
    title: 'NB',
    author: 'NB'
  },
  {
    img: image5,
    title: 'NB',
    author: 'NB'
  },
  {
    img: image6,
    title: 'NB',
    author: 'NB'
  },
];


const Desserts = () => {
  const classes = useStyles();
  return (
    <div className='page dess'>
      <div className={classes.root}>
        <GridList cellHeight={250} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img className="main_image" src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  )
}


export default Desserts;


