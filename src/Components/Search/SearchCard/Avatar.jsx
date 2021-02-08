import styled from 'styled-components';

const Avatar = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 428px) {
    width: 128px;
    height: 128px;
  }
`;

export default Avatar;
