import React, { useState } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Lives from './Lives';
import Menus from './Menus';
import { makeStyles, Theme, createStyles, Modal, Typography, Grid } from '@material-ui/core';
import ParticleBG from './ParticleBG';
import cover from '../imgs/cover.png'
import TouchAppIcon from '@material-ui/icons/TouchApp';

const useStyle = makeStyles((theme: Theme) => createStyles({
  div: {
    overflow: "hidden"
  },
  concent: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    color: "white",
  },
  dummyPlayer: {
    width: "100vw",
    height: "calc(100vw * 0.5625)",
    maxHeight: "71vh",
    outlineOffset: "-20px",
    backgroundImage: `url(${cover})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  },
}))

function App() {
  const [bgmId, setBgmId] = useState<null | string>(null)
  const classes = useStyle()
  return (
    <div className={classes.div}>
      <Menus setBgmId={setBgmId} bgmId={bgmId} />
      <Modal open={bgmId === null} onClick={() => setBgmId("isMmbbVuyQs")} className={classes.concent} >
        <div style={{ width: "100%", height: "100%" }}>
          <Grid container direction="column" alignItems="center" justify="center" spacing={1} style={{ width: "100%", height: "100%" }} onClick={() => setBgmId("isMmbbVuyQs")}>
            <Grid item>
              <div className={classes.dummyPlayer} />
            </Grid>
            <Grid item>
              <Typography variant="h5">やさしい波音と<br />可愛いイルカに癒される</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">寝る前のリラックスやオンラインデートに</Typography>
            </Grid>
            <br />
            <Grid item>
              <TouchAppIcon fontSize="large" />
            </Grid>
            <Grid item>
              <Typography variant="h3">Click to Start</Typography>
            </Grid>
          </Grid>
          <ParticleBG />
        </div>
      </Modal>
      <Switch>
        <Route path="/lives">
          <Lives />
        </Route>
        <Route path="/">
          <Redirect to="/lives/fe5a775b-3d87-400f-87ae-dd33faa8b480" />
        </Route>
      </Switch>
      <ParticleBG />
    </div>
  );
}

export default App;
