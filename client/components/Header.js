import Link from 'next/link';
import { StyledLink } from '../styles/StyledLink';

const Header = () => (
  <div>
    <Link href="/" passHref>
      <StyledLink>Home</StyledLink>
    </Link>
    <Link href="/about" passHref>
      <StyledLink>About</StyledLink>
    </Link>
  </div>
);

export default Header;
