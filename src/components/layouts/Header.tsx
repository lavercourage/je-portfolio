/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const onClickMoveMenu = (e: any) => {
    router.push(e.target.id);
  };

  return (
    <>
      <header id="header">
        <div className="header-wrap">
          <img
            id="/"
            onClick={onClickMoveMenu}
            src="/img/logo.png"
            alt="로고"
          />
          <div className="header-wrap-menu">
            <p id="/about" onClick={onClickMoveMenu}>
              About
            </p>
            <p id="/archive" onClick={onClickMoveMenu}>
              Archive
            </p>
            <p id="/career" onClick={onClickMoveMenu}>
              Career
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
