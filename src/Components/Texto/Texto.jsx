import React from 'react';
import S from './Texto.module.css';

const Texto = ({ titulo, texto, img, mediaType }) => {
  return (
    <div className={S.div}>
      <h1 className={S.h1}>{titulo}</h1>
      <p className={S.p}>{texto}</p>
      {mediaType == 'image' ? (
        <img className={S.img} src={img} alt="" />
      ) : (
        <iframe src={img} />
      )}
    </div>
  );
};

export default Texto;
