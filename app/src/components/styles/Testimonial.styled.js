import styled from "styled-components";

export const TestimonialStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("/images/pattern-bg.svg");
  background-repeat: no-repeat;
  background-size: contain;
  padding: 1.2em;
  gap: 1.5em;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    display: grid;
    grid-template-columns: 50% 50%;

    gap: 0;
    align-items: center;
    background-position: right center;
  }

  .image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      position: relative;
      order: 2;
    }
    img {
      box-shadow: 0px 28px 98px -6px rgba(161, 161, 196, 1);
    }
  }
  .buttons {
    display: flex;
    position: absolute;
    top: 335px;
    gap: 0.5em;
    padding: 0.5em;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
    @media (min-width: ${({ theme }) => theme.desktop}) {
      top: 520px;
      right: 380px;
    }
    button {
      border: none;
      background-color: transparent;
    }
  }

  .testimonial-wrapper {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1em;
    background-image: url("/images/pattern-quotes.svg");
    background-repeat: no-repeat;
    background-position: top center;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      text-align: left;
      width: 700px;
      order: 1;
      z-index: 2;
    }
  }

  p {
    margin-top: 40px;
    font-size: 0.8em;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.darkBlue};
    @media (min-width: ${({ theme }) => theme.desktop}) {
      margin-top: 60px;
      font-size: 32px;
    }
  }

  .author {
    display: flex;
    flex-direction: column;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      flex-direction: row;
      align-items: center;
      gap: 0.5em;
    }
  }

  span {
    font-size: 0.7em;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  small {
    font-size: 0.6em;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grayishBlue};
  }
`;
