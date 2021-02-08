import styled from 'styled-components';

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 16px;

  @media (max-width: 680px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (max-width: 428px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default ProfileGrid;
