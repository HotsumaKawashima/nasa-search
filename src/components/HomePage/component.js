import React from 'react';

import { withStyles } from '@material-ui/styles';

const styles = {
  logo: {
    position: 'relative',
    marginTop: '56px',
    minHeight: '280px'
  },
  logoDefault: {
    position: 'absolute',
    bottom: '38px',
    height: '160px',
    left: 'calc(50% - 320px/2)'
  },
  input: {
    outline: 'none',
    borderRadius: '22px',
    height: '44px',
    width: '508px',
    fontSize: '16px',
    paddingInlineStart: '52px',
    position: 'absolute',
    left: 'calc(50% - 560px/2)'
  }
};

function HomePage(props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.logo}>
        <img className={classes.logoDefault} src='/images/nasa-logo-web-rgb.png'/>
      </div>
      <input className={classes.input} value={props.input} onKeyDown={props.onInputKeyDown} onChange={props.onInputChange}/>
    </div>
  )
}

export default withStyles(styles)(HomePage);
