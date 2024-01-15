import React from "react";

import HeaderAuthorized from "./HeaderAuthorized";
import HeaderNotAuthorized from "./HeaderNotAuthorized";

function Header({ loggedIn }) {
  return <>{loggedIn ? <HeaderAuthorized /> : <HeaderNotAuthorized />}</>;
}

export default Header;
