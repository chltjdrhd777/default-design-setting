import React from "react";
import styled from "styled-components/macro";
import { B } from "components";
import { flexMiddle } from "globalCSS/theme";

//This part is like folder to control all segments
class HomeCSS {
  Header = styled(B.Header)`
    width: 100%;
    height: 6rem;
  `;

  Section = styled(B.Section)`
    padding: 5rem 0;
  `;

  Media = styled.div`
    ${({ theme }) => theme.mediaQuery.phone} {
    }
  `;
}

export const H = new HomeCSS();
