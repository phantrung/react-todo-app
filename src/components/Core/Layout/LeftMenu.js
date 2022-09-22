import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
// import PropTypes from 'prop-types'
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useNavigate } from "react-router-dom";
import { appNavigation } from "../../../configs/navigationConfig";

const LeftMenu = (props) => {
  const navigate = useNavigate();

  const handleClickMenu = (path) => {
    navigate(path);
  };

  const renderMenu = () => {
    return appNavigation.map((menu, index) => {
      return (
        <ListItem
          key={index}
          disablePadding
          onClick={() => handleClickMenu(menu.url)}
        >
          <ListItemButton>
            <ListItemText primary={menu.title} />
          </ListItemButton>
        </ListItem>
      );
    });
  };

  return (
    <>
      <List>{renderMenu()}</List>
    </>
  );
};

//LeftMenu.defaultProps = {}

//LeftMenu.propTypes = {}

export default React.memo(LeftMenu);
