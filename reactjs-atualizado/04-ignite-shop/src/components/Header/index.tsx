import Link from "next/link";
import { HeaderContainer } from "./styles";
import { Card } from "../Cart";

import logoImg from '../../assets/logo.svg';


export function Header() {
    return (
        <HeaderContainer>
            <Link href="/">
            <img src={logoImg.src} alt="" />
            </Link>

            <Card />
        </HeaderContainer>
    )
}