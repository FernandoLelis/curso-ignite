import logoImg from '../../assets/logo.svg';

export function Header() {
    return (
        <header>
            <img src={logoImg} alt="my money" />
            <button type="button">
                Nova transacao
            </button>
        </header>
    )
}