import React from 'react';
import { Alert } from 'antd';


const Message = (props) => {
  
  const onClose = (e) => {
    console.log(e, '');
  };

  return (
    <>
   <Alert
    message={props.msg}
    type={props.type}
    closable
    onClose={onClose}
  />
   </>
  );
}


export default Message;