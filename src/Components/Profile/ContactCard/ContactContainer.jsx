import styled from 'styled-components';

const ContactContainer = styled.div`
  position: absolute;
  right: 0;

  @media (max-width: 768px) {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export default ContactContainer;
