import Link from "next/link";
import { HeaderContainer } from "./styles";

import logoImg from '../../assets/logo.svg';

export function Header() {
    return (
        <HeaderContainer>
            <Link href="/">
            <img src={logoImg.src} alt="" />
            </Link>
        </HeaderContainer>
    )
}