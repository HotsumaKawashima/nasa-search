import React, { useEffect } from 'react';

import { withStyles } from '@material-ui/styles';

const styles = {
  input: {
    marginTop: '40px',
    marginLeft: '180px',
    outline: 'none',
    borderRadius: '22px',
    height: '44px',
    width: '508px',
    fontSize: '16px',
    paddingInlineStart: '52px',
  },
  wrapper: {
    marginTop: '25px',
    marginLeft: '180px',
    display: 'grid',
    gridTemplateColumns: '800px',
    gridGap: '30px',
  },
  image: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    float: 'left',
    marginRight: '20px',
  },
  descriptionBox: {
    marginTop: '10px',
  },
  title: {
    fontSize: '20px',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  description: {
    height: '100px',
    width: '630px',
    overflow: 'hidden',
  },
  bottom: {
    marginTop: '20px',
    marginLeft: '520px',
    fontSize: '20px',
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
      <input className={classes.input} value={props.input} onKeyDown={props.onInputKeyDown} onChange={props.onInputChange}/>
      <div className={classes.wrapper}>
        { props.items.map(item =>
          <div key={item.href}>
            <img className={classes.image} src={item.links[0].href} />
            <div className={classes.descriptionBox}>
              <a className={classes.title} href={item.links[0].href}>{item.data[0].title}</a>
              <div className={classes.description}>{item.data[0].description}</div>
            </div>
          </div>
        )}
      </div>
      <div className={classes.bottom}>
        <a href='#' className={classes.prev} onClick={props.onClickNext}>prev</a>
        <a href='#' className={classes.next} onClick={props.onClickNext}>next</a>
      </div>
    </div>
  )
}

export default withStyles(styles)(SearchPage);
