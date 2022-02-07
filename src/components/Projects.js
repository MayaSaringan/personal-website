import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import * as data from "../Data/projects.json";
import Hidden from "@material-ui/core/Hidden";
import IconTitle from "./IconTitle";
import Chip from "@material-ui/core/Chip";

import Page from "./Page";
const descriptions = data.descriptions;
const Projects = React.forwardRef(({ classes }, ref) => {
  return (
    <Page id="projects" ref={ref}>
      <Grid container direction="column" wrap="noWrap">
        <Grid item>
          <IconTitle
            title="PROJECTS"
            src="https://img.icons8.com/dusk/64/000000/innovation.png"
            iconSize={50}
          />
        </Grid>
        <Grid container spacing={1} direction="column" wrap="noWrap">
          {descriptions.map((desc, i) => {
            return (
              <Grid
                item
                style={{ display: "inline-flex" }}
                key={"project-tile-" + i}
              >
                <Grid
                  container
                  spacing={2}
                  alignItems={"center"}
                  xs
                  wrap="noWrap"
                >
                  <Grid item xs>
                    <Link href={desc.link} underline="none" color="secondary">
                      <Typography variant="h4">{desc.title}</Typography>
                    </Link>
                    <Grid container spacing={1} alignItems={"center"}>
                      {desc.tags.map((tag, i) => {
                        return (
                          <Grid
                            item
                            key={"project-tile-" + desc.title + "-" + i}
                          >
                            <Chip label={tag} color="primary" />
                          </Grid>
                        );
                      })}
                    </Grid>
                    <Typography variant="body1">
                      {desc.description} See at{" "}
                      <Link href={desc.link}>{desc.link}</Link>
                    </Typography>
                  </Grid>
                  {
                    <Hidden xsDown>
                      <Grid item xs={2}>
                        <img src={desc.preview} className={classes.preview} />
                      </Grid>
                    </Hidden>
                  }
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Page>
  );
});

Projects.displayName = "Projects";
export default withStyles({
  root: {
    minHeight: "100vh",
  },
  descWrapper: {
    display: "flex",
    alignItems: "flex-start",
    marginTop: 10,
    width: "100%",
  },
  preview: {
    borderRadius: 6,
    width: "100%",
    objectFit: "cover",
  },
  tagBg: {
    padding: 3,
    borderRadius: 4,
    color: "white",
  },
  tag: {
    margin: 0,
  },
})(Projects);
