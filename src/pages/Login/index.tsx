import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { Column, Container, LoginContainer, Spacing, Title } from "./styles";
import { IFormLogin, defaultValues } from "./types";

const schema = yup
    .object({
        email: yup
            .string()
            .email("E-mail inválido")
            .required("Campo obrigatório"),
        password: yup
            .string()
            .min(6, "No minimo 6 caracteres")
            .required("Campo obrigatório"),
        isValid: yup.boolean(),
    })
    .required();

const Login = () => {
    const {
        control,
        formState: { errors, isValid },
    } = useForm<IFormLogin>({
        resolver: yupResolver(schema),
        mode: "onBlur",
        defaultValues,
        reValidateMode: "onChange",
    });

    return (
        <Container>
            <LoginContainer>
                <Column>
                    <Title>Login</Title>
                    <Spacing />
                    <Input
                        name="email"
                        placeholder="Email"
                        control={control}
                        errorMessage={errors?.email?.message}
                    />
                    <Spacing />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Senha"
                        control={control}
                        errorMessage={errors?.password?.message}
                    />
                    <Spacing />
                    {isValid ? (
                        <Button title="Entrar" isValid={isValid} />
                    ) : (
                        <Button title="Entrar" isValid={isValid} />
                    )}
                </Column>
            </LoginContainer>
        </Container>
    );
};

export default Login;
