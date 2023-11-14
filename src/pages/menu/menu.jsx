import React, { useState } from "react";
import style from "./menu.module.scss";

import home from "../../assets/icons/Group 46.png";
import watchLater from "../../assets/icons/Group 47.png";
import genres from "../../assets/icons/Group 53.png";
import movies from "../../assets/icons/Group 54.png";
import TV from "../../assets/icons/Group 56.png";
import search from "../../assets/icons/ICON - Search.png";

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
import Butons from "./butons";

function Menu() {
  const [window, setWindow] = useState(true);
  const [openLeng, setOpenleng] = useState(false);
  const [EXET, setEXET] = useState(false);

  const [len, setLen] = useState("");

  const obj = {
    search: search,
    "": home,
    TVShows: TV,
    movies: movies,
    genres: genres,
    watchLater: watchLater,
  };

  const handleChange = (event) => {
    setLen(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpenleng(true);
  };

  const handleClickEXIT = () => {
    setEXET(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpenleng(false);
    }
  };

  const handleEXETClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setEXET(false);
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
          <Butons obj={obj} window={window} />

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
                className="ms-1"
                style={{ display: window === false ? "inline-block" : "none" }}
              >
                <Button
                  onClick={handleClickEXIT}
                  className={`${style.footer__li} ms-2`}
                >
                  EXIT
                </Button>
                <Dialog
                  disableEscapeKeyDown
                  open={EXET}
                  onClose={handleEXETClose}
                >
                  <DialogTitle>Are you sure you want to Exet?</DialogTitle>
                  <DialogActions>
                    <Button onClick={handleEXETClose}>Cancel</Button>
                    <Button onClick={handleEXETClose}>Ok</Button>
                  </DialogActions>
                </Dialog>
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
