import S from "./header.module.scss";

import MediaQuery from "react-responsive";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "/src/app/slice/sliceSideMenuMobile";

import Profile from "/src/components/Cards/Profile";
import Button from "/src/components/Button";
import Search from "/src/components/Inputs/Search";
import Logo from "/src/components/Logo";
import SearchTab from "/src/components/SearchTab";
import QuickButtons from "./QuickButtons";

import IC_Search from "/src/assets/icon/IC_Search";

const Header = () => {
  const [isSearchTabOpen, setIsSearchTabOpen] = useState(false);
  const isMenuClosedMobile = useSelector(
    (state) => state.isMenuClosedMobile.value
  );
  const dispatch = useDispatch();
  const handleCloseMenu = () => isMenuClosedMobile && dispatch(toggle(false));

  return (
    <header className={S["header"]} onClick={handleCloseMenu}>
      {/* on Desktop */}
      <MediaQuery minWidth="61.875rem">
        <Profile />
        <Search />
        <QuickButtons />
      </MediaQuery>

      {/* on Tablet */}
      <MediaQuery minWidth="30rem" maxWidth="61.938rem">
        <Button.HamburgerMenu
          isClosed={isMenuClosedMobile}
          onClick={() => dispatch(toggle(!isMenuClosedMobile))}
        />
        <Search />
        <Logo />
      </MediaQuery>

      {/* on Mobile */}
      <MediaQuery maxWidth="30rem">
        <SearchTab
          isTabOpen={isSearchTabOpen}
          setIsTabOpen={setIsSearchTabOpen}
        />
        <div className={S["mobile-buttons"]}>
          <Button.HamburgerMenu
            isClosed={isMenuClosedMobile}
            onClick={() => {
              dispatch(toggle(!isMenuClosedMobile));
            }}
          />
          <Button.Icon
            icon={<IC_Search />}
            dimension={3.25}
            alt="search icon"
            href="/filter"
            onClick={() => setIsSearchTabOpen(true)}
          />
        </div>
        <Logo />
      </MediaQuery>
    </header>
  );
};

export default Header;
