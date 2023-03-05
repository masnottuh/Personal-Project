import { redirect } from "react-router-dom";

import App from "../App/App";

const logout_user = async () => {
  return redirect("../NavPages/JobBoard.js");
  // sessionStorage.clear();
  
}
export default logout_user