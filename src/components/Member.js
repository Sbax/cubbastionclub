import React from "react";
import styled from "styled-components";
import { shadows } from "../theme/theme";

const Card = styled.article`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);

  padding: 2rem;
  border-radius: 2rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: ${shadows.default};

  > * + * {
    margin-top: 1rem;
  }
`;

const Image = styled.img`
  width: 10rem;
  height: 10rem;

  border-radius: 50%;
  transition: all 300ms ease-in-out;
  transition-property: translate box-shadow border-radius;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Tags = styled.ul`
  display: flex;

  > * + * {
    margin-left: 0.75rem;
  }
`;

const Link = styled.a`
  opacity: 1;
  color: inherit;

  ${Title}, ${Tags} {
    opacity: 0.6;
    transition: opacity 300ms ease-in-out;
  }

  &:hover {
    ${Title}, ${Tags} {
      opacity: 1;
    }

    ${Image} {
      border-radius: 2rem;
      box-shadow: ${shadows.default};
      transform: translateY(-0.33rem);
    }
  }
`;

function Member({ image, name, tags, link }) {
  return (
    <Link href={link}>
      <Card>
        <Image src={image} alt={`Avatar di ${name}`} />
        <Title>{name}</Title>
        <Tags>
          {tags.map((tag) => (
            <li key={tag}>#{tag}</li>
          ))}
        </Tags>
      </Card>
    </Link>
  );
}

export default Member;
