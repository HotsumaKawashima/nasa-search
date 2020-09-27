import React from 'react';

import { withStyles } from '@material-ui/styles';

import logo from '../../images/logo.png';

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
  },
  searchButton: {
    position: 'absolute',
    left: 'calc(50% - 110px/2)',
    outline: '0',
    marginTop: '80px',
    backgroundColor: '#0B3D91',
    color: '#FFFF',
    border: 'none',
    fontWeight: 'bold',
    padding: '8px 16px 8px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
  }
};

function HomePage(props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.logo}>
        <img className={classes.logoDefault} src={logo}/>
      </div>
      <input className={classes.input} value={props.input} onKeyDown={props.onInputKeyDown} onChange={props.onInputChange}/>
      <button className={classes.searchButton} onClick={props.onClickSearchButton}>SEARCH !</button>
    </div>
  )
}

export default withStyles(styles)(HomePage);
