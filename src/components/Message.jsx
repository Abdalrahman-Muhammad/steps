const Message = ({ message, step }) => {
  return (
    <p className='message'>
      Step {step}: {message}
    </p>
  );
};

export default Message;
