import React from 'react';
import styled from 'styled-components';
import MinimalButton from './MinimalButton';

export default function IconButton({
  onClick: onClickProp = () => {},
  src = '',
  alt = 'icon',
  size = 22,
}) {
  const Img = styled.img`
    width: ${size}px;
    height: ${size}px;
  `;
  const handleIconClick = (e) => {
    if (typeof onClickProp === 'function') {
      onClickProp(e);
    }
  };
  return (
    <MinimalButton onClick={handleIconClick}>
      <Img src={src} alt={alt} />
    </MinimalButton>
  );
}
