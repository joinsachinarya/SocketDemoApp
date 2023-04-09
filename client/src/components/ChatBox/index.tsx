import React, { useState } from "react";

interface Props {
  onSubmit: (value: string) => void;
}

const ChatBox: React.FC<Props> = (props) => {
  const { onSubmit } = props;
  const [value, setValue] = useState<string>("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleOnSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(value);
    setValue("");
  };

  return (
    <>
      <form onSubmit={handleOnSend} className="chat-box-input">
        <input
          type="text"
          value={value}
          onChange={handleOnChange}
          placeholder="What's in your mind?"
          className=""
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default ChatBox;
