import { useState, useEffect } from "react";
import Link from "next/link";
import getStyles from "./styles";
import Button from "@components/Elements/Button";
import { makeStyles } from "@material-ui/core/styles";
import { buttonTypes } from "@types";

import Hamburger from "../Hamburger";

const useStyles = makeStyles((theme) => getStyles(theme));

// import Logo from "@components/Logo";

const nonAuthorizedMenu = [
  { label: "stories", path: "/stories" },
  { label: "other link", path: "/stories" },
];

const MainNav = () => {
  const [isActive, setIsActive] = useState(false);
  const classes = useStyles({ isActive });

  // const handleIsActive = useMemo(() => {
  //   setIsActive((prev) => !prev);
  // }, [isActive]);

  function handleHamburger() {
    setIsActive((prev) => !prev);
  }
  const isLoggedIn = false;

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isActive) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  }, [isActive]);

  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <Link href="/">
          <span className={classes.logo}>ZENOTE</span>
        </Link>

        <div className={classes.navGroupsWrapper}>
          <ul className={classes.primaryMenu}>
            {nonAuthorizedMenu.map(({ label, path }) => (
              <li key={label}>
                <Link href={path}>
                  <span className={classes.primaryMenuItem}>{label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className={classes.buttonsWrapper}>
            <div>
              <Button type={buttonTypes.secondary}>Sign up </Button>
            </div>
            <div>
              <Button type={buttonTypes.primary}>Log in</Button>
            </div>
          </div>
          <div className={classes.hamburgerWrapper}>
            <Hamburger isActive={isActive} handleClick={handleHamburger} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
