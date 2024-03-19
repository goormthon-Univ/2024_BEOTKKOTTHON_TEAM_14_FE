import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Screen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.3rem;

  background-color: #000;
`;

const Backbtn = styled.div`
  width: 100%;
  height: 3.125rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;

  cursor: pointer;
`;

const Title = styled.div`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  padding-left: 2.6rem;

  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 2.1875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.13125rem;
`;

const InputItem = styled.div`
  width: 100%;
  padding-left: 2.6rem;
  color: #fff;
  font-family: Inter;
  font-size: 1.44213rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0865rem;
`;

const InputForm = styled.input`
  width: 18.76744rem;
  padding-bottom: 0.5rem;

  border-bottom: 0.894px solid #fff;
  background: none;

  color: #fff;
  font-family: Inter;
  font-size: 1.00538rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.06031rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #fff;
  }
`;

const Button = styled.div`
  width: 7.0625rem;
  height: 2.75rem;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 3.125rem;
  border: 1px solid #fff;

  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  cursor: pointer;
`;

const JoinPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/start');
  };

  const goStart = () => {
    navigate('/start');
  };

  return (
    <Screen>
      <Backbtn onClick={goBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="15"
          viewBox="0 0 10 15"
          fill="none"
        >
          <path
            d="M10 1.11727L9.04902 0L0 7.5L1.14885 8.45391L9.04902 15L10 13.8827L2.2977 7.5L10 1.11727Z"
            fill="white"
          />
        </svg>
      </Backbtn>

      <Title>Sign Up</Title>
      <p />

      <InputItem>Username</InputItem>
      <InputForm placeholder="이름을 입력해주세요."></InputForm>
      <p />
      <InputItem>Email</InputItem>
      <InputForm placeholder="이메일을 입력해주세요."></InputForm>
      <p />
      <InputItem>Password</InputItem>
      <InputForm placeholder="비밀번호를 입력해주세요."></InputForm>
      <p />
      <InputItem>Phone number</InputItem>
      <InputForm placeholder="전화번호를 입력해주세요."></InputForm>
      <p />

      <Button onClick={goStart}>가입 완료</Button>
    </Screen>
  );
};

export default JoinPage;