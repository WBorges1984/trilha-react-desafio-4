import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isValid }: IButtonProps) => {
    return (
        <ButtonContainer onClick={onClick} isValid={isValid}>
            {title}
        </ButtonContainer>
    );
};

export default Button;
