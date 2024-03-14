import './App.css';
import React, { useState, useEffect, useContext } from 'react';

import HouseappForm from './component/AddHouseForm';
import HouseList from './component/HouseList';
import LoginForm from './component/Login';
import Header from "./component/Header";
import { UserProvider, UserContext } from "./component/authContext";
function App() {



  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

const AppContent = () => {
  const { setUsername, username } = useContext(UserContext);

  const [houses, setHouses] = useState([]);
  const initialLoggedInState = localStorage.getItem('isLoggedIn') === 'true';
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedInState);

  // 登录成功后的处理函数
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    console.log("handleLoginSuccess", isLoggedIn);
  };

  // 登录失败后的处理函数
  const handleLoginFailure = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    console.log("handleLoginFailure", isLoggedIn);
    setUsername("");
  };

  useEffect(() => {
    // 初始加載房屋列表
    fetchHouses();

    // 每秒更新房屋列表
    const interval = setInterval(() => {
      fetchHouses();
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const fetchHouses = async () => {
    try {
      const response = await fetch('http://localhost:8000/House/house_list/');
      const data = await response.json();

      // console.log("fetchHouses", data)
      setHouses(data.houses);
    } catch (error) {
      console.error('Error fetching houses:', error);
    }
  };

  const handleDelete = () => {
    // 刷新房屋列表
    fetchHouses();
  };


  return (
    <div>
      {isLoggedIn ? (
        // 用户已登录，显示房屋信息管理系统的内容
        <>
          <Header isLoggedIn={isLoggedIn} handleLogout={handleLoginFailure} />

          <h1>房屋信息管理系统</h1>
          <HouseappForm />
          <HouseList houses={houses} onDelete={handleDelete} />
        </>
      ) : (
        // 用户未登录，显示登录表单
        <LoginForm onLoginSuccess={handleLoginSuccess} onLoginFailure={handleLoginFailure} />
      )
      }
    </div >
  );
}

export default App;
