import styled from 'styled-components';


export const ButtonContainer = styled.button<{children: string, onClick: React.MouseEventHandler<HTMLButtonElement> | undefined, isValid: boolean}>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: ${({ isValid }) => (isValid ? 0.6 : 1)};
        cursor: ${({ isValid }) => (isValid ? 'pointer' : 'not-allowed')};
    }
    &:disabled {
        background-color: #ccc;
        border: 1px solid #ccc;
        cursor: not-allowed;
    }
`