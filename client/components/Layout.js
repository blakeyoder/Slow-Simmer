import { StyledLayout } from '../styles/StyledLayout';
import Header from '../components/Header';

const Layout = (props) => (
  <StyledLayout>
    <Header />
    {props.children}
  </StyledLayout>
);

export default Layout;
