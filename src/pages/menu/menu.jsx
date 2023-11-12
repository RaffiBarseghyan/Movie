import React, { useState } from "react";
import style from "./menu.module.scss";
import home from "../../assets/icons/Group 46.png";
import watchLater from "../../assets/icons/Group 47.png";
import genres from "../../assets/icons/Group 53.png";
import movies from "../../assets/icons/Group 54.png";
import TV from "../../assets/icons/Group 56.png";
import search from "../../assets/icons/ICON - Search.png";

import { Link, useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Menu() {
  const [window, setWindow] = useState(true);
  const location = useLocation();
  const [openLeng, setOpenleng] = React.useState(false);
  const [len, setLen] = React.useState("");

  const handleChange = (event) => {
    setLen(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpenleng(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpenleng(false);
    }
  };

  let open = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };

  let close = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };
  return (
    <>
      <nav
        onMouseEnter={() => open()}
        onMouseLeave={() => close()}
        className={`navbar-menu ${style.navbar_menu}`}
        style={{ width: window === false ? 250 : 80 }}
      >
        <ul className={style.navbar__list}>
          <Link
            className={`${
              location.pathname === "/search"
                ? window === true
                  ? style.navbar__li_box_select
                  : style.navbar__li_box_select_open
                : style.navbar__li_box
            }`}
            to={"/search"}
          >
            <img
              src={search}
              alt={search}
              style={{ paddingLeft: window === false ? 27 : 0 }}
            />

            <li
              className={style.navbar__li}
              style={{ display: window === false ? "inline-block" : "none" }}
            >
              Search
            </li>
          </Link>
          <Link
            className={`${
              location.pathname === "/"
                ? window === true
                  ? style.navbar__li_box_select
                  : style.navbar__li_box_select_open
                : style.navbar__li_box
            }`}
            to={"/"}
          >
            <img
              src={home}
              alt={home}
              style={{ paddingLeft: window === false ? 27 : 0 }}
            />

            <li
              className={`navbar__li ${style.navbar__li}`}
              style={{ display: window === false ? "inline-block" : "none" }}
            >
              Home
            </li>
          </Link>
          <Link
            className={`${
              location.pathname === "/tv"
                ? window === true
                  ? style.navbar__li_box_select
                  : style.navbar__li_box_select_open
                : style.navbar__li_box
            }`}
            to={"/tv"}
          >
            <img
              src={TV}
              alt={TV}
              style={{ paddingLeft: window === false ? 27 : 0 }}
            />
            <li
              className={`navbar__li ${style.navbar__li}`}
              style={{ display: window === false ? "inline-block" : "none" }}
            >
              TV Shows
            </li>
          </Link>

          <Link
            className={`${
              location.pathname === "/movies"
                ? window === true
                  ? style.navbar__li_box_select
                  : style.navbar__li_box_select_open
                : style.navbar__li_box
            }`}
            to={"/movies"}
          >
            <img
              src={movies}
              alt={movies}
              style={{ paddingLeft: window === false ? 27 : 0 }}
            />
            <li
              className={`navbar__li ${style.navbar__li}`}
              style={{ display: window === false ? "inline-block" : "none" }}
            >
              Movies
            </li>
          </Link>

          <Link
            className={`${
              location.pathname === "/genres"
                ? window === true
                  ? style.navbar__li_box_select
                  : style.navbar__li_box_select_open
                : style.navbar__li_box
            }`}
            to={"/genres"}
          >
            <img
              src={genres}
              alt={genres}
              style={{ paddingLeft: window === false ? 27 : 0 }}
            />
            <li
              className={`navbar__li ${style.navbar__li}`}
              style={{ display: window === false ? "inline-block" : "none" }}
            >
              Genres
            </li>
          </Link>

          <Link
            className={`${
              location.pathname === "/watchLater"
                ? window === true
                  ? style.navbar__li_box_select
                  : style.navbar__li_box_select_open
                : style.navbar__li_box
            }`}
            to={"/watchLater"}
          >
            <img
              src={watchLater}
              alt={watchLater}
              style={{ paddingLeft: window === false ? 27 : 0 }}
            />
            <li
              className={`navbar__li ${style.navbar__li}`}
              style={{ display: window === false ? "inline-block" : "none" }}
            >
              Watch Later
            </li>
          </Link>

          {window === false ? (
            <>
              <li
                className={`navbar__li ${style.navbar__li}`}
                style={{ display: window === false ? "inline-block" : "none" }}
              >
                <div>
                  <Button onClick={handleClickOpen} className={style.langs}>
                    LANGUAGE
                  </Button>
                  <Dialog
                    disableEscapeKeyDown
                    open={openLeng}
                    onClose={handleClose}
                  >
                    <DialogTitle>SELECT THE LANGUAGE</DialogTitle>
                    <DialogContent>
                      <Box
                        component="form"
                        sx={{ display: "flex", flexWrap: "wrap" }}
                      >
                        <FormControl sx={{ minWidth: 120 }}>
                          <InputLabel htmlFor="demo-dialog-native">
                            Language
                          </InputLabel>
                          <Select
                            native
                            value={len}
                            onChange={handleChange}
                            input={
                              <OutlinedInput
                                label="Len"
                                id="demo-dialog-native"
                              />
                            }
                          >
                            <option aria-label="None" value="" />
                            <option value={"en"}>EN</option>
                            <option value={"ru"}>RU</option>
                            <option value={"am"}>AM</option>
                          </Select>
                        </FormControl>
                      </Box>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={handleClose}>Ok</Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </li>
              <li
                className={style.footer__li}
                style={{ display: window === false ? "inline-block" : "none" }}
              >
                GET HELP
              </li>
              <li
                className={style.footer__li}
                style={{ display: window === false ? "inline-block" : "none" }}
              >
                EXIT
              </li>
            </>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </>
  );
}

export default Menu;
