import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadImages } from "./redux/reduser";

function Gallery(props) {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.items);
  const loading = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  if (loading) {
    return <div>загрузка...</div>;
  }

  return (
    <div className="flexbox">
      {images.map((item) => {
        return <img key={item._id} src={item.img} />;
      })}
    </div>
  );
}

export default Gallery;
