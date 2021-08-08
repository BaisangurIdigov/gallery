import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createImage } from "./redux/reduser";

function InputSrc(props) {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    dispatch(createImage(value));
    setValue("");
  };

  return (
    <div className="input">
      <TextField
        id="standard-basic"
        label="Ввод"
        onChange={handleInput}
        value={value}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 10 }}
        onClick={handleClick}
      >
        Добавить
      </Button>
    </div>
  );
}

export default InputSrc;
