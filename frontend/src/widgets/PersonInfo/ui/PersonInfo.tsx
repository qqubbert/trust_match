import { type FC, useEffect, useState } from "react";
import type { PersonInfoType } from "@shared/types/UserTypes";

import "./PersonInfo.css";

import Edit from "@icons/Edit/Edit.svg?react";
import Cross from "@icons/Cross/Cross.svg?react";

import { useDebouncedCallback } from "@shared/lib/useDobunceCallback";
import { pastePlainText } from "@shared/lib/pastePlainText";
import { normalizeText } from "@shared/lib/normalizeText";

type PersonInfoProps = {
  person: PersonInfoType;
  classes?: string;
  hasEditBtn?: boolean;
  isSelf?: boolean;
  saveDataFunc?: () => void;
};

export const PersonInfo: FC<PersonInfoProps> = ({
  person,
  classes = "",
  hasEditBtn = false,
  isSelf = false,
  saveDataFunc = () => {},
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [personData, setPersonData] = useState(person);
  const [focusTarget, setFocusTarget] = useState("");

  useEffect(() => {
    if (!isEditing) {
      setFocusTarget("");
    }
  }, [isEditing]);

  const debouncedUpdate = useDebouncedCallback(() => {
    saveDataFunc();
  }, 500);

  const handleNameInput = (e: React.FormEvent<HTMLElement>) => {
    const rawText = e.currentTarget.textContent || "";
    const text = normalizeText(rawText);
    setPersonData((prev) => ({ ...prev, name: text }));
    debouncedUpdate();
  };

  const handleDescriptionInput = (e: React.FormEvent<HTMLElement>) => {
    const rawText = e.currentTarget.textContent || "";
    const text = normalizeText(rawText, true, false);
    setPersonData((prev) => ({ ...prev, description: text }));
    debouncedUpdate();
  };

  const handleKeyDownName = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const emptyInputClickHandler = (item: keyof PersonInfoType) => {
    if (personData[item] == "") {
      setIsEditing(true);
      setFocusTarget(item);
    }
  };

  return (
    <div
      className={`person-info ${classes} ${isEditing ? "editing" : ""} ${
        isSelf ? "self" : ""
      }`}
    >
      <div className="name-container">
        <div className="name-and-btn">
          <h1
            onClick={() => emptyInputClickHandler("name")}
            suppressContentEditableWarning
            contentEditable={isEditing}
            onInput={handleNameInput}
            onPaste={pastePlainText}
            onKeyDown={handleKeyDownName}
            className={`editable name ${personData.name ? "" : "empty"}`}
            data-placeholder="Введите имя..."
            ref={(el) => {
              if (el && !isEditing) el.textContent = personData.name;
              if (el && isEditing && focusTarget === "name") el.focus();
            }}
          >
            {/* {personData.name} */}
          </h1>
          {hasEditBtn && (
            <button
              className="edit-btn"
              onClick={() => setIsEditing((prev) => !prev)}
              title={`Изменить имя или описание`}
            >
              <Edit className={`${!isEditing ? "visible" : ""}`} />
              <Cross className={`${isEditing ? "visible" : ""}`} />
            </button>
          )}
        </div>
        <div className="icons"></div>
      </div>
      <hr />
      <p
        onClick={() => {
          emptyInputClickHandler("description");
        }}
        className={`editable description ${
          personData.description ? "" : "empty"
        }`}
        suppressContentEditableWarning
        onInput={handleDescriptionInput}
        onPaste={pastePlainText}
        contentEditable={isEditing}
        data-placeholder="Введите описание..."
        ref={(el) => {
          if (el && !isEditing) el.textContent = personData.description;
          if (el && isEditing && focusTarget === "description") el.focus();
        }}
      >
        {/* {personData.description} */}
      </p>
    </div>
  );
};
