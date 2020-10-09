import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';
import AppConst from "@lib/appConst";

const useStyles = makeStyles({
  root: {
    width: "85%"
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const router = useRouter();

  /**
   * タスクカードをクリックしたときの処理
   * @param {Event} e イベントオブジェクト
   */
  const onClickTaskCard = (task_id) => {
    // const task_id = e.target.value;  //タスクID
    alert(task_id)
    router.push({
      pathname: AppConst.URL.TASK_SHOW,
      query: { task_id: task_id },
    });
  }

  /**
   * コンポーネントに渡す引数
   */
  const compProps = {
    card : {
      className: classes.root
    },
    cardTitle : {
      variant   : "h5",
      component : "h2",
      noWrap    : true
    },
    cardAction : {
      value : "1",
    }
  }

  return (
    <Card {...compProps.card}>
      <ButtonBase onClick={() => onClickTaskCard(1)}>
      <CardContent>
        <Typography {...compProps.cardTitle}>
          {props.title}
        </Typography>
      </CardContent>
      </ButtonBase>
    </Card>
  );
}
