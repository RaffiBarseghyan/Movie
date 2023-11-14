import { Link, useLocation } from "react-router-dom";
import style from "./menu.module.scss";

function Butons(val) {
  const location = useLocation();

  return (
    <>
      {Object.entries(val.obj).map((value) => {
        return (
          <Link
            key={value[0]}
            className={`${
              location.pathname === `/${value[0]}`
                ? val.window === true
                  ? style.navbar__li_box_select
                  : style.navbar__li_box_select_open
                : style.navbar__li_box
            } container`}
            to={`/${value[0]}`}
          >
            <img src={value[1]} alt={value[1]} />

            <li
              className={style.navbar__li}
              style={{
                display: val.window === false ? "inline-block" : "none",
              }}
            >
              {value[0] == ""
                ? "Home"
                : value[0] == "TVShows"
                ? "TV Shows"
                : value[0] == "watchLater"
                ? "Watch Later"
                : value[0]}
            </li>
          </Link>
        );
      })}
    </>
  );
}

export default Butons;
