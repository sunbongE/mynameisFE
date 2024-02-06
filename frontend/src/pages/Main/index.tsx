import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import MainSection from '../../modules/mainModules/MainSection';
import Footer from '../../components/footer/Footer';
import Cookies from 'js-cookie';
import { useRecoilState, useRecoilValue, RecoilValue, useRecoilCallback } from 'recoil';
import { TokenAtom } from '../../recoil/atoms/userAuthAtom';
import { isLoginSelector } from '../../recoil/selectors/isLoginSelector';
import { userInfoState } from '../../recoil/atoms/userState';
import ActionButton from '../../components/actionButton/ActionButton';
import ChatPage from '../chatPage/ChatPage';

const MainContainer = styled.div`
  width: 100%;
  background-color: #f2eeea;
`;

const ImgContainer = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid black;
`;

const ChatContainer = styled.div`
  background-color: #000;
`;

const Main = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const isLogin = useRecoilValue(isLoginSelector);
  const setLoginState = useRecoilCallback(({ set }) => (newValue: boolean) => {
    set(isLoginSelector, newValue);
  });

  const handleLogin = () => {
    console.log('로그인');
    navigate('/login');
  };

  const handleLogout = () => {
    console.log('로그아웃');
    setMyPageOpen(false);
    setLoginState(false);
    alert('로그아웃 되었습니다.');
    window.location.reload();
  };

  const handleSignUp = () => {
    console.log('회원가입');
    navigate('/signup');
  };

  const [myPageOpen, setMyPageOpen] = useState<boolean>(false);

  const handleMyPage = () => {
    setMyPageOpen(!myPageOpen);
  };
  const [faqOpen, setFaqOpen] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState(false);
  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const tempArray = ['일', '이', '삼', '사', '오'];

  const [scrolling, setScrolling] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolling(window.scrollY > 0 ? true : false);
  //   };
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <MainContainer>
      <Header isLogin={isLogin} onClickLogin={handleLogin} onClickLogout={handleLogout} onClickSignUp={handleSignUp} onClickMyPage={handleMyPage} isMyPageOpen={myPageOpen} showHeader={scrolling} />
      <MainSection />
      {/* <Button
        backgroundColor={'#e1a4b4'}
        width={'200px'}
        height={'80px'}
        borderRadius={'16px'}
        onButtonClick={() => {
          navigate('/room');
        }}
      >
        준비페이지로 이동
      </Button> */}
      <Footer />
      <ActionButton faqOpen={faqOpen} setFaqOpen={setFaqOpen} />
      <ChatPage />
    </MainContainer>
  );
};

export default Main;
