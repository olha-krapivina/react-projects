/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PopupCard from "./components/PopupCard";
import usePopup from "./hooks/usePopup";

function Popup({ title, buttonName, ContentComponent }) {
  const { isOpen, isRender, onClose, onOpen } = usePopup();
  return (
    <div>
      <button onClick={onOpen}>{buttonName}</button>
      {isRender && (
        <div
          css={css`
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: #0000005e;

            display: flex;
            justify-content: center;
            align-items: center;

            transition: 1s;
            opacity: ${isOpen ? "1" : "0"};
          `}
        >
          <PopupCard isOpen={isOpen}>
            <h2>{title}</h2>
            <span
              onClick={onClose}
              css={css`
                position: absolute;
                top: 5px;
                right: 5px;
              `}
            >
              X
            </span>
            <ContentComponent onClose={onClose} />
          </PopupCard>
        </div>
      )}
    </div>
  );
}

export default Popup;
