import styled, { css } from 'styled-components';


const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: #636f83;
  &:hover {
    background: #8a93a2;
  }
  ${props =>
    props.fullWidth && css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
    ${props =>
    props.cyan && css`
      background: #0dcaf0;
      &:hover {
        background: #3dd5f3;
      }
    `}
    &:disabled {
      background: #c4c9d0;
      color: #9da5b1;
      cursor: not-allowed;
    }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;


const Button = props => {
    return (
        <StyledButton {...props} />
    );
}

export default Button;