import React, { useEffect } from 'react';

import { withStyles } from '@material-ui/styles';

const styles = {
  input: {
    marginTop: '10px',
    outline: 'none',
    borderRadius: '22px',
    height: '44px',
    width: '508px',
    fontSize: '16px',
    paddingInlineStart: '52px',
    position: 'absolute',
    left: 'calc(50% - 560px/2)'
  },
  wrapper: {
    position: 'absolute',
    marginTop: '66px',
    left: 'calc(50% - 800px/2)',
    display: 'grid',
    gridTemplateColumns: '200px 200px 200px 200px'
  },
  image: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
  },
};

function SearchPage(props) {
  const { classes } = props;

  useEffect(() => {
    props.onLoadPage();
  }, [props.q]);

  return (
    <div>
      <input className={classes.input} value={props.input} onKeyDown={props.onInputKeyDown} onChange={props.onInputChange}/>
      <div className={classes.wrapper}>
        <div>
          <img className={classes.image} src='/images/nasa-logo-web-rgb.png' />
        </div>
        <div>
          <img className={classes.image} src='/images/nasa-logo-web-rgb.png' />
        </div>
        <div>
          <img className={classes.image} src='/images/nasa-logo-web-rgb.png' />
        </div>
        <div>
          <img className={classes.image} src='/images/nasa-logo-web-rgb.png' />
        </div>
        <div>
          <img className={classes.image} src='/images/nasa-logo-web-rgb.png' />
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(SearchPage);
