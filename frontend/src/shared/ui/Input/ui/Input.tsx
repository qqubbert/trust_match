import { useState, forwardRef, type ChangeEventHandler, type ReactNode } from "react";

import "./Input.scss";

import Send from "@icons/Send/Send.svg?react";
import Like from "@icons/Like/Like.svg?react";

type InputProps = {
  defaultValue?: string;
  inputLabel?: ReactNode;
  placeholder?: string;
  hasSendBtn?: boolean;
  changeFunc?: ChangeEventHandler<HTMLInputElement>;
  sendFunc?: () => void;
  hasLikeBtn?: boolean;
};

export const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      defaultValue = "",
      inputLabel = "",
      changeFunc = () => {},
      hasSendBtn = true,
      sendFunc = () => {},
      placeholder = "Введите текст...",
      hasLikeBtn = false,
    },
    ref
  ) => {
    const [value, setValue] = useState(defaultValue);

    const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      setValue(e.target.value);
      changeFunc(e);
    };

    return (
      <>
        <div className="input-container">
          {inputLabel && <span className="input-label">{inputLabel}</span>}
          <div className="input-and-btn">
            <input
              type="text"
              placeholder={placeholder}
              onChange={onInputChange}
              ref={ref}
              defaultValue={defaultValue}
            />
            {hasSendBtn && (
              <button onClick={sendFunc}>
                {hasLikeBtn ? (
                  <>
                    <Like className={`${value.length == 0 ? "visible" : ""}`}/>
                    <Send className={`${value.length > 0 ? "visible" : ""}`}/>
                  </>
                ) : (
                  <Send className="visible"/>
                )}
              </button>
            )}
          </div>
        </div>
      </>
    );
  }
);
