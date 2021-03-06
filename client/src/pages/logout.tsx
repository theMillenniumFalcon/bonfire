import React from "react";
import { StandardLink } from "../ui/StandardLink";

interface logoutProps { }

// purpose of this page is to wait for token store to be cleared
// should be done by the component sending the user here
// then it should redirect to landing page
const Logout: React.FC<logoutProps> = ({ }) => {

  return (
    <StandardLink href="/" color='red' fontSize='15px' content='click here if you are not automatically redirected' />
  )
}

export default Logout