import React from 'react';
import styled from 'styled-components';

interface MessageProps {
  role: string;
  msg: string;
}
const StyledMsgContainer = styled.div<MessageProps>`
  width: 80px;
  height: 45px;
  border-radius: 10px;
  background-color: ${(props) => (props.role === 'sender' ? '#e8b8c5' : '#F1F3F6')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMsg = styled.p<MessageProps>`
  color: ${(props) => (props.role === 'sender' ? '#fff' : '#111')};
  font-family: 'Pretendard Regular';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.4px;
`;

const Message = (props: MessageProps) => {
  return (
    <StyledMsgContainer role={props.role} msg={props.msg}>
      <StyledMsg role={props.role} msg={props.msg}>
        {props.msg}
      </StyledMsg>
    </StyledMsgContainer>
  );
};

export default Message;
