/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.js";

// contact icons
import icon_linkedin from "assets/icons/fa-linkedin.svg";
import icon_github from "assets/icons/fa-github.svg";
import icon_email from "assets/icons/fa-email.svg";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          text="hello"
          color="transparent"
          className={classes.navLink}
        >
        Connect
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="connect-linkedin"
          title="LinkedIn"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.linkedin.com/in/ericjohnson1728"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <img src={icon_linkedin} className={classes.socialIcons} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="connect-github"
          title="GitHub"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.github.com/eric1728"
            target="_blank"
            className={classes.navLink}
          >
            <img src={icon_github} className={classes.socialIcons} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="connect-email"
          title="Reach out via e-mail"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="mailto:ejohnson1728kc@gmail.com"
            target="_blank"
            className={classes.navLink}
          >
            <img src={icon_email} className={classes.socialIcons} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
