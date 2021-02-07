import React from 'react';
import styled from 'styled-components';
import MinimalButton from './MinimalButton';

const Img = styled.img`
  width: ${({ size }) => `${size}px`};
  ${({ disabled }) => disabled && 'opacity: 0.5'};
`;

export default function IconButton({
  onClick: onClickProp = () => {},
  src = '',
  alt = 'icon',
  size = 22,
  disabled = false,
}) {
  const handleIconClick = (e) => {
    if (typeof onClickProp === 'function') {
      onClickProp(e);
    }
  };
  return (
    <MinimalButton onClick={handleIconClick} disabled={disabled}>
      <Img src={src} alt={alt} size={size} disabled={disabled} />
    </MinimalButton>
  );
}
