import logoImg from '../../assets/logo.svg';

import { Container, Content } from './style';

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="my money" />
                <button type="button">
                    Nova transacao
                </button>
            </Content>
        </Container>
    )
}