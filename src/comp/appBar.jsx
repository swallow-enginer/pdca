import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import React from 'react';
import appConst from "@lib/appConst";
import { useRouter } from 'next/router';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  headerButton: {
      borderRadius: "10px 10px 10px 10px",
      backgroundColor: "white",
      '&:hover': { background: "rgba(255, 255, 255, 0.94)" }
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const router = useRouter();

  const getAppBar = () => {
    const href = router.pathname;
    
    switch (href) {
      //ホーム画面
      case appConst.URL.INDEX:
        return getHomeAppBar();
      
      //入力画面
      case appConst.URL.INPUT:
        return getInputAppBar();
      
      //検索画面
      case appConst.URL.SEARCH:
        return getSearchAppBar();
    }
  }

  const compProps = {
    iconButton: {
      edge       : "start",
      className  : classes.menuButton,
      color      : "inherit",
      "aria-label"  : "menu",
      
    },
    headerButton : {
      className  : classes.headerButton,
      color      : "primary",
      onClick    : props.onButtonClick
    },
    headerTitle : {
      variant   : "h6",
      className : classes.title
    }
  }

  /**
   * ホーム画面のヘッダー
   */
  const getHomeAppBar = () => {
    return (
      <>
        <IconButton {...compProps.iconButton}>
          <MenuIcon />
        </IconButton>
          <Typography {...compProps.headerTitle}>
            ホーム
          </Typography>
          <Avatar />
          <Box ml={2}><Button {...compProps.headerButton}>
            <AddIcon />タスク追加
          </Button></Box>
      </>
    )
  }

  /**
   * 入力画面のヘッダー
   */
  const getInputAppBar = () => {
    return (
      <>
        <ArrowBackIcon />
        <Typography {...compProps.headerTitle}>
            タスク登録
          </Typography>
        <Box ml={2}><Button {...compProps.headerButton}>
          <SaveIcon />保存
        </Button></Box>
      </>
    )
  }

  /**
   * 検索画面のヘッダー
   */
  const getSearchAppBar = () => {
    return (
      <>
        <ArrowBackIcon />
        <Typography {...compProps.headerTitle}>
            検索
        </Typography>
      </>
    )
  }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {getAppBar()}
        </Toolbar>
      </AppBar>
    </div>
  );
}