import * as Diolog from '@radix-ui/react-dialog';
import { X } from "phosphor-react";
import { CartButton } from "../CartButton";
import { CartClose, CartContent } from './styles';

export function Cart() {
    return (
        <Diolog.Root>
            <Diolog.Trigger asChild>
                <CartButton />
            </Diolog.Trigger>

            <Diolog.Portal>
                <CartContent>
                    <CartClose>
                        <X size={24} weight="bold" />
                    </CartClose>

                    <h2>Sacola de compras</h2>

                    <section>
                        <p>Parece que seu carrinho está vazio :(</p>
                    </section>
                </CartContent>
            </Diolog.Portal>
        </Diolog.Root>
    )
}