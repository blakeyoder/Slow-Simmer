import Link from 'next/link';
import { StyledLink } from '../../styles/StyledLink';

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`} passHref>
      <StyledLink {...props}>
        {props.title}
      </StyledLink>
    </Link>
  </li>
);

export default PostLink;
