export const WithAuth = () => {
  let user = localStorage.getItem("loggedUser");
  
  if (user == null) {
    return false;
  } else {
    return true;
  }
};
