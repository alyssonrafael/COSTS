import { useState, useEffect } from "react";
import style from "./Message.module.css";

function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;

    if (msg) {
      setVisible(true);

      timer = setTimeout(() => {
        setVisible(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      <div
        className={`${style.message} ${style[type]} ${
          visible ? style.active : ""
        }`}
      >
        {msg}
      </div>
    </>
  );
}

export default Message;
