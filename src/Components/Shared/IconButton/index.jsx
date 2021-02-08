import React from 'react';
import MinimalButton from '../MinimalButton';
import Image from './Image';

export default function IconButton({
  onClick: onClickProp = () => {},
  src = '',
  alt = 'icon',
  size = 22,
  disabled = false,
}) {
  /**
   * Check if onClick function provided as prop,
   * Call if valid prop provided
   *
   * @param {Object} e Click Event object
   */
  const handleIconClick = (e) => {
    if (typeof onClickProp === 'function') {
      onClickProp(e);
    }
  };
  return (
    <MinimalButton onClick={handleIconClick} disabled={disabled}>
      <Image src={src} alt={alt} size={size} disabled={disabled} />
    </MinimalButton>
  );
}
