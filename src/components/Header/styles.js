import styled from "styled-components";

export const Header = styled.header`
  background-color: #c50000;
  
  a {
    color: var(--white);
    font-size: 1.25rem;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: #c50000;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const Brand = styled.div`
  a {
    font-weight: 800;
    font-size: 1.75rem;
  }
`;
