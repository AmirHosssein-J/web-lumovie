import S from "./header.module.scss";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "/src/app/slice/sliceSideMenuMobile";
import useWindowSize from "/src/hooks/useWindowSize";

import Profile from "/src/components/Cards/Profile";
import Button from "/src/components/Button";
import Search from "/src/components/Inputs/Search";
import Logo from "/src/components/Logo";
import SearchTab from "/src/components/SearchTab";
import QuickButtons from "./QuickButtons";

import IC_Search from "/src/assets/icon/IC_Search";

const Header = () => {
  const { width } = useWindowSize();
  const [isSearchTabOpen, setIsSearchTabOpen] = useState(false);
  const isMenuClosedMobile = useSelector(
    (state) => state.isMenuClosedMobile.value
  );
  const dispatch = useDispatch();
  const handleCloseMenu = () => isMenuClosedMobile && dispatch(toggle(false));

  //Media Queries
  const onDesktop = width >= 990;
  const onTablet = width <= 990 && width >= 479;
  const onMobile = width <= 479;

  return (
    <header className={S["header"]} onClick={handleCloseMenu}>
      {onDesktop && (
        <>
          <Profile />
          <Search />
          <QuickButtons />
        </>
      )}

      {onTablet && (
        <>
          <Button.HamburgerMenu
            isClosed={isMenuClosedMobile}
            onClick={() => dispatch(toggle(!isMenuClosedMobile))}
          />
          <Search />
          <Logo />
        </>
      )}

      {onMobile && (
        <>
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
        </>
      )}
    </header>
  );
};

export default Header;
