import React from "react";
import styled from "styled-components";
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
  const members = [
    {
      name: "heysbax",
      image: "/assets/heysbax.png",
      link: "http://heysbax.cubbastion.club",
      tags: ["gaming", "development", "learning"],
    },
    {
      name: "tappuccha",
      image: "/assets/tappuccha.png",
      link: "http://tappuccha.cubbastion.club",
      tags: ["gaming", "puccha", "tappa"],
    },
  ];

  return (
    <List>
      {members.map((member) => (
        <Member {...member} key={member.name} />
      ))}
    </List>
  );
}

export default Members;
