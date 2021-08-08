import React, { useState } from "react";
import InputSrc from "./InputSrc";
import { createImage, removeImage } from "./redux/reduser";
import { useDispatch, useSelector } from "react-redux";

function CreateImg(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const [drag, setDrag] = useState(false);
  const [remove, setRemove] = useState(false);
  const dragStartHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e) => {
    e.preventDefault();
    let imageUrl = [...e.dataTransfer.getData("text/html").split("\n")];
    let rex = /src="?([^"\s]+)"?\s*/;
    let value = rex.exec(imageUrl);
    handleDrop(value[1]);
    setDrag(false);
  };

  const handleDrop = (value) => {
    dispatch(createImage(value));
  };

  const dragStartRemoveHandler = (e) => {
    e.preventDefault();
    setRemove(true);
  };

  const dragLeaveRemoveHandler = (e) => {
    e.preventDefault();
    setRemove(false);
  };

  const onDropRemoveHandler = (e) => {
    e.preventDefault();
    let files = [...e.dataTransfer.getData("url").split("\n")];
    const value = files[0];
    setRemove(false);
    handleRemoveDrop(value);
  };

  const handleRemoveDrop = (value) => {
    dispatch(removeImage(value));
  };

  if (loading) {
    return <div>загрузка...</div>;
  }

  return (
    <div className="createImg">
      <div className="drag">
        <div className="drop">
          {drag ? (
            <div
              onDragStart={(e) => dragStartHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragStartHandler(e)}
              onDrop={(e) => onDropHandler(e)}
            >
              Отпустите для загрузки
            </div>
          ) : (
            <div
              onDragStart={(e) => dragStartHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragStartHandler(e)}
            >
              Перетащите для загрузки
            </div>
          )}
        </div>
      </div>
      <div className="drag">
        <div className="drop">
          {remove ? (
            <div
              onDragStart={(e) => dragStartRemoveHandler(e)}
              onDragLeave={(e) => dragLeaveRemoveHandler(e)}
              onDragOver={(e) => dragStartRemoveHandler(e)}
              onDrop={(e) => onDropRemoveHandler(e)}
            >
              Отпустите для удаления
            </div>
          ) : (
            <div
              onDragStart={(e) => dragStartRemoveHandler(e)}
              onDragLeave={(e) => dragLeaveRemoveHandler(e)}
              onDragOver={(e) => dragStartRemoveHandler(e)}
            >
              Перетащите для удаления
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateImg;
