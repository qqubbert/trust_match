

import { forwardRef, type ChangeEventHandler, type ReactNode } from 'react';

import './Input.scss';

import Send from '@icons/Send/Send.svg?react';

type InputProps = {
  defaultValue?: string;
  inputLabel?: ReactNode;
  placeholder?: string;
  hasSendBtn?: boolean;
  changeFunc?: ChangeEventHandler<HTMLInputElement>;
  sendFunc?: () => void;
}

export const CustomInput = forwardRef<HTMLInputElement, InputProps> (({
  defaultValue = "",
  inputLabel = "",
  changeFunc = () => {},
  hasSendBtn = true,
  sendFunc = () => {},
  placeholder = "Введите текст...",
}, ref) => {
  return (
    <>
      <div className="input-container">
        {inputLabel && <span className='input-label'>{inputLabel}</span>}
        <div className="input-and-btn">
          <input type="text" placeholder={placeholder} onChange={(e)=>{changeFunc(e)}} ref={ref} defaultValue={defaultValue}/>
          {hasSendBtn &&
          <button onClick={sendFunc}>
            <Send/>
          </button>}
        </div>
      </div>
    </>
  );
});