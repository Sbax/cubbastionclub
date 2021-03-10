import React from "react";
import styled from "styled-components";
import members from "../data/data.json";
import { breakpoints } from "../theme/theme";
import Member from "./Member";

const List = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));

  width: 100%;
  padding: 2rem;
  grid-gap: 2rem;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

function Members() {
  return (
    <List>
      {members.map((member) => (
        <Member {...member} key={member.name} />
      ))}
    </List>
  );
}

export default Members;
