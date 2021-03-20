import { useState } from "react";
import { BookList } from "../../components/BookList/BookList";
import { HomeLogo } from "../../components/HomeComponents/HomeLogo";
import Login from '../../components/Login/Login';


const Home = () => {
  const [displayLogin, setDisplayLogin] = useState(false)
  return (
    <div>
      <HomeLogo />
      {displayLogin ? <Login setDisplayLogin={setDisplayLogin} /> : <div></div> }
      <BookList showLogin={setDisplayLogin}  />
    </div>
  );
};

export default Home;
