import {
  useState,
  forwardRef,
  type ChangeEventHandler,
  type ReactNode,
} from "react";

import "./Input.css";

import Send from "@icons/Send/Send.svg?react";
import Like from "@icons/Like/Like.svg?react";
import Mic from "@icons/Mic/Mic.svg?react";
import Video from "@icons/Video/Video.svg?react";

import { useLongPress } from "@shared/lib/useLongPress";

type InputProps = {
  defaultValue?: string;
  inputLabel?: ReactNode;
  placeholder?: string;
  hasSendBtn?: boolean;
  changeFunc?: ChangeEventHandler<HTMLInputElement>;
  sendMsgFunc?: () => void;
  sendVoiceFunc?: () => void;
  sendVideoFunc?: () => void;
  hasLikeBtn?: boolean;
  classes?: string;
  children?: ReactNode;
  hasLeftBtns?: boolean;
  hasMicBtn?: boolean;
  hasVideoBtn?: boolean;
};

export const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      defaultValue = "",
      inputLabel = "",
      changeFunc = () => {},
      hasSendBtn = true,
      sendMsgFunc = () => {},
      sendVoiceFunc = () => {},
      sendVideoFunc = () => {},
      placeholder = "Введите текст...",
      hasLikeBtn = false,
      classes = "",
      hasLeftBtns = false,
      children,
      hasMicBtn = false,
      hasVideoBtn = false,
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState(defaultValue);

    const [selectedOption, setSelectedOption] = useState(0);

    const [isVoiceRecording, setIsVoiceRecording] = useState(false);
    const [isVideoRecording, setIsVideoRecording] = useState(false);

    const sendBtnOptions = [
      { el: <Send className={`${inputValue.length > 0 ? "visible" : ""}`} /> },
      hasLikeBtn && {
        el: <Like className={`${inputValue.length === 0 ? "visible" : ""}`} />,
      },
      hasMicBtn && {
        el: (
          <Mic
            className={`${
              inputValue.length === 0 && selectedOption == 0 ? "visible" : ""
            }`}
          />
        ),
      },
      hasVideoBtn && {
        el: (
          <Video
            className={`${
              inputValue.length === 0 && selectedOption == 1 ? "visible" : ""
            }`}
          />
        ),
      },
    ].filter(Boolean) as { el: ReactNode }[];

    const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      setInputValue(e.target.value);
      changeFunc(e);
    };

    const { register: longPressRef, isLongPressTriggered } = useLongPress(
      () => {
        if (selectedOption === 0) {
          setIsVoiceRecording(true);
        } else {
          setIsVideoRecording(true);
        }
      },
      () => {
        if (selectedOption === 0) {
          setIsVoiceRecording(false);
          sendVoiceFunc();
        } else {
          setIsVideoRecording(false);
          sendVideoFunc();
        }
      },
      250,
    );

    const sendBtnClickHandle = () => {
      if (isLongPressTriggered.current) {
        return;
      }

      if (inputValue.length === 0) {
        setSelectedOption((prev) => (prev === 0 ? 1 : 0));
      } else {
        sendMsgFunc();
      }
    };

    return (
      <>
        <div className={`input-container ${classes}`}>
          {inputLabel && <span className="input-label">{inputLabel}</span>}
          <div className="input-and-btn">
            {hasLeftBtns && <div className="btns">{children}</div>}
            <input
              type="text"
              placeholder={placeholder}
              onChange={onInputChange}
              ref={ref}
              defaultValue={defaultValue}
            />
            {hasSendBtn && (
              <button
                className="sendBtn"
                onClick={sendBtnClickHandle}
                ref={longPressRef}
              >
                {sendBtnOptions.map((btn, i) => {
                  return <>{btn.el}</>;
                })}
                {/* {hasLikeBtn ? (
                  <>
                    <Like className={`${value.length == 0 ? "visible" : ""}`}/>
                    <Send className={`${value.length > 0 ? "visible" : ""}`}/>
                  </>
                ) : (
                  <Send className="visible"/>
                )} */}
              </button>
            )}
          </div>
        </div>
      </>
    );
  },
);
