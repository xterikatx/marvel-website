import { Link } from 'react-router-dom';
import { Container, InnerContent, Header as HeaderContainer, Brand } from './styles';

export const Header = () => (
  <HeaderContainer>
    <Container>
      <InnerContent>
        <Brand>
          <Link to="/">MARVEL</Link>
        </Brand>
      </InnerContent>
    </Container>
  </HeaderContainer>
);
