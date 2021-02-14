import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import Chip from "@material-ui/core/Chip";

import * as data from "../Data/work.json";
import YouTube from "react-youtube";
import Page from "./Page";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const descriptions = data.descriptions;
const Welcome = React.forwardRef((_, ref) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Page id="work" ref={ref}>
      <Grid container direction="column" wrap="noWrap">
        <Grid item>
          <Grid container alignItems="center">
            <Grid item>
              <img
                src="https://img.icons8.com/doodle/96/000000/home-office.png"
                style={{
                  width: theme.typography.pxToRem(60),
                  height: theme.typography.pxToRem(60),
                }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h3">WORK</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={1} direction="column" wrap="noWrap">
          {descriptions.map((desc, i) => {
            return (
              <Grid item key={"work-tile-" + i}>
                <Card variant="outlined">
                  <Grid container spacing={2} wrap="nowrap" alignItems="center">
                    <Grid item xs>
                      <Grid
                        container
                        spacing={2}
                        justifyContent="flex-start"
                        direction="column"
                      >
                        <Grid item>
                          <Grid
                            container
                            direction="row"
                            // wrap="nowrap"
                            alignItems={"center"}
                            spacing={2}
                          >
                            <Grid item {...(matches ? null : { xs: 2 })}>
                              <Link href={desc.link} underline="none">
                                <img
                                  src={desc.logo}
                                  width={"100%"}
                                  style={{ maxWidth: 60 }}
                                />
                              </Link>
                            </Grid>
                            <Grid item {...(matches ? null : { xs: true })}>
                              <Grid container direction="column">
                                <Grid item>
                                  <Typography variant="h4">
                                    {desc.title}
                                  </Typography>
                                </Grid>
                                <Grid
                                  container
                                  spacing={1}
                                  alignItems={"center"}
                                >
                                  {desc.tags.map((tag, i) => {
                                    return (
                                      <Grid item key={"work-item-tag-" + i}>
                                        <Chip label={tag} color="primary" />
                                      </Grid>
                                    );
                                  })}
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        {desc.preview && (
                          <Hidden mdUp>
                            <Grid item>
                              <YouTube
                                videoId="aTrGWET6B0M"
                                opts={{ width: "100%", height: 200 }}
                              />
                            </Grid>
                          </Hidden>
                        )}
                        <Grid item>
                          <Typography variant="body1">
                            {`Developed for the You.i Engine, a platform agnostic SDK; ` +
                              `Written C++ APIs to implement and extend the React Native framework to use the You.i engine, ` +
                              `enabling development for console, TV, desktop and all currently supported platforms by React Native through the You.i SDK.`}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    {desc.preview && (
                      <Hidden smDown>
                        <Grid item xs={4}>
                          <YouTube
                            videoId={desc.preview.videoId}
                            opts={desc.preview.opts}
                          />
                        </Grid>
                      </Hidden>
                    )}
                  </Grid>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Page>
  );
});
Welcome.displayName = "Work";
export default Welcome;
