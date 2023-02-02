import * as Diolog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { X } from "phosphor-react";
import { CartButton } from "../CartButton";
import { CartClose, CartContent, CartFinalization, CartProduct, CartProductDetails, CartProductImage, FinalizationDetails } from './styles';

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
                        {/* <p>Parece que seu carrinho está vazio :(</p> */}

                        <CartProduct>
                            <CartProductImage>
                                <Image 
                                    width={100}
                                    height={93}
                                    alt=""
                                    src="https://s3-alpha-sig.figma.com/img/387d/13ce/de131bd1ccf9bbe6b2331e88d3df20cd?Expires=1676246400&Signature=mU-mXt5DGYNDRpMwLXoUS6PHnt-UQDUzvQMWkE~J1evMIB6Fk4~-U6XBr~M8Q6UtUZdtxuBHjeuX4oE9ONO~1stFepXnUk10J3QKvgqR2QiaUf3qkVDrayd7T4MzSQnAECR60luM4T3rBkXUNIec2OXyHaQ-jK3d8vbX5xzlkvZ6q6OgrLZM2IOp0J7dOVFd02vqy9M~e4zaVWMzToeOFGVPHlVjpqg5zS6Qrp-or7FORrNIfeAWOAWu5p2lFGCqE2iXRFdUPHG3Z7YKhCtD7FybbDLv963KTlS03iJfyS9ROQe8gR~vsm7QTXpFkrzHssSeioyMOTBdFdDR~0ksmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                />
                            </CartProductImage>

                            <CartProductDetails>
                                <p>Produto 1</p>
                                <strong> R$50,00</strong>
                                <button>Revover</button>
                            </CartProductDetails>
                        </CartProduct>
                    </section>

                    <CartFinalization>
                        <FinalizationDetails>
                            <div>
                                <span>Quantidade</span>
                                <p>2 itens</p>
                            </div>
                            <div>
                                <span>Valor total</span>
                                <p>R$100,00</p>
                            </div>
                        </FinalizationDetails>

                        <button>Finalizar compra</button>
                    </CartFinalization>
                </CartContent>
            </Diolog.Portal>
        </Diolog.Root>
    )
}