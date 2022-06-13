/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

function Popup({ title, buttonName, children }) {
  const [isOpen, setIsOpen] = useState(true);

  const onOpenClick = () => {
    setIsOpen(true);
  };

  const onCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={onOpenClick}>{buttonName}</button>
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

          display: ${isOpen ? "flex" : "none"};
        `}
      >
        <div
          css={css`
            max-width: 300px;
            box-shadow: 0 0 0 0 black;
            position: relative;
            display: ${isOpen ? "block" : "none"};

            background: white;
            padding: 20px;
          `}
        >
          <h2>{title}</h2>
          <span
            onClick={onCloseClick}
            css={css`
              position: absolute;
              top: 5px;
              right: 5px;
            `}
          >
            X
          </span>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Popup;
