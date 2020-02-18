import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

const Logo = () => {
  return <LogoContainer>i am dain</LogoContainer>;
};

export default Logo;

const LogoContainer = styled.div`
  color: ${p => p.theme.colors.primary};
  font-size: 2em;
  opacity: 0.5;
  font-weight: 200;
  transition: all 0.2s var(--ease-in-out-quad);
  transform-origin: center left;
  &:hover {
    opacity: 1;
    font-weight: 600;
    transform: scale(1.625);
  }
  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }

    .Logo__Mobile{
      display: block;
    }
  `}
`;
