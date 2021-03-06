import React, { useEffect } from 'react';

import { withStyles } from '@material-ui/styles';

import logo from '../../images/logo.png';
import load from '../../images/load.gif';

const styles = {
  inputBox: {
    top: '0px',
    left: '0px',
    width: '100%',
    height: '110px',
    backgroundColor: '#FFFF',
    position: 'fixed',
    display: 'flex',
    boxShadow: '0px 0px 3px 0px rgba(51,48,0,0.4)',
  },
  logo: {
    marginTop: '28px',
    height: '70px',
  },
  searchButton: {
    outline: '0',
    marginTop: '45px',
    marginLeft: '30px',
    height: '40px',
    backgroundColor: '#0B3D91',
    color: '#FFFF',
    border: 'none',
    fontWeight: 'bold',
    padding: '8px 16px 8px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
  },
  input: {
    marginTop: '40px',
    marginLeft: '10px',
    outline: 'none',
    borderRadius: '22px',
    height: '44px',
    width: '508px',
    fontSize: '16px',
    paddingInlineStart: '52px',
  },
  load: {
    position: 'absolute',
    marginTop: '200px',
    left: 'calc(50% - 80px/2)'
  },
  wrapper: {
    marginTop: '125px',
    marginLeft: '20px',
    marginRight: '20px',
    display: 'flex',
    flexFlow: 'row wrap',
    flexBasis: 'auto',
  },
  imageBox: {
    margin: '5px',
    flexGrow: '1',
  },
  image: {
    width: '300px',
    height: '200px',
    objectFit: 'cover',
  },
  descriptionBox: {
    marginTop: '10px',
    marginBottom: '20px',
    width: '300px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  title: {
    fontSize: '14px',
    color: '#3c4043',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  bottom: {
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '20px',
    height: '60px',
  },
  next: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  prev: {
    marginRight: '10px',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  }
};

function SearchPage(props) {
  const { classes } = props;

  useEffect(() => {
    props.onLoadPage();
  }, [props.q, props.page]);

  return (
    <div>
      <div className={classes.inputBox}>
        <a href='#' onClick={props.onClickLogo}><img className={classes.logo} src={logo} /></a>
        <input className={classes.input} value={props.input} onKeyDown={props.onInputKeyDown} onChange={props.onInputChange}/>
        <button className={classes.searchButton} onClick={props.onClickSearchButton}>SEARCH !</button>
      </div>
      { props.loading ? <img className={classes.load} src={load} /> :
          <React.Fragment>
            <div className={classes.wrapper}>
              { props.items.map(item =>
                <div key={item.href} className={classes.imageBox}>
                  <a href={item.links[0].href}><img className={classes.image} src={item.links[0].href} /></a>
                  <div className={classes.descriptionBox}>
                    <a className={classes.title} href={item.links[0].href}>{item.data[0].title}</a>
                  </div>
                </div>
              )}
            </div>
            <div className={classes.bottom}>
              { props.page != 1 && <a href='#' className={classes.prev} onClick={props.onClickPrev}>prev</a> }
              { !(props.items.length < 100) && <a href='#' className={classes.next} onClick={props.onClickNext}>next</a> }
            </div>
        </React.Fragment>
      }
    </div>
  )
}

export default withStyles(styles)(SearchPage);
