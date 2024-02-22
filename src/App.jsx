import { useState } from 'react';
import Message from './components/Message.jsx';
import { Number } from './components/Number.jsx';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const increaseStep = () => {
    if (step < messages.length) setStep((preStep) => preStep + 1);
  };
  const decreaseStep = () => {
    if (step > 1) setStep((preStep) => preStep - 1);
  };

  return (
    <>
      <button className='close' onClick={() => setIsOpen((pre) => !pre)}>
        &times;
      </button>

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            {messages.map((message, i) => (
              <Number
                key={message}
                number={i + 1}
                isActive={step >= i + 1 ? true : false}
              />
            ))}
          </div>
          <Message message={messages[step - 1]} step={step} />
          <div className='buttons'>
            <button
              className='previous'
              onClick={decreaseStep}
              disabled={step === 1}
            >
              Previous
            </button>
            <button
              className='next'
              onClick={increaseStep}
              disabled={step === messages.length}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
