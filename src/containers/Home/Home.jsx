import {useState} from 'react'
import { BookList } from "../../components/BookList/BookList";
import { HomeLogo } from "../../components/HomeComponents/HomeLogo";
import Login from '../../components/Login/Login'
const Home = () => {
  const [isLoggedIn,setIsLogged] = useState(false);

  return (
    <div>
      <HomeLogo />
      {isLoggedIn ? <Login /> : <div></div> }
      <BookList setIsLogged={setIsLogged} />
    </div>
  );
};

export default Home;
