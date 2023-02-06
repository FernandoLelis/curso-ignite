import * as Diolog from '@radix-ui/react-dialog';
import axios from 'axios';
import Image from 'next/image';
import { X } from "phosphor-react";
import { useState } from 'react';
import { useCart } from '../../hooks/UseCart';
import { CartButton } from "../CartButton";
import { CartClose, CartContent, CartFinalization, CartProduct, CartProductDetails, CartProductImage, FinalizationDetails } from './styles';

export function Cart() {
    const { cartItems, removeCartItem, cartTotal } = useCart();
    const cartQuantity = cartItems.length;

    const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
       style: 'currency',
       currency: 'BRL', 
    }).format(cartTotal);

    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);


    async function handleCheckout() {
        try {
            setIsCreatingCheckoutSession(true);

            const response = await axios.post('/api/checkout', {
                products: cartItems,
            });

            const { checkoutUrl } = response.data;
            
            window.location.href = checkoutUrl;
        } catch(err) {
            setIsCreatingCheckoutSession(false);
            alert('Falha ao redirecionar ao checkout!');
        }
    }

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
                        {cartQuantity<= 0 && <p>Parece que seu carrinho está vazio :(</p>}

                        {cartItems.map((cartItems) => (
                            <CartProduct key={cartItems.id}>
                                <CartProductImage>
                                    <Image 
                                        width={100}
                                        height={93}
                                        alt=""
                                        src={cartItems.imageUrl}
                                    />
                                </CartProductImage>

                                <CartProductDetails>
                                    <p>{cartItems.name}</p>
                                    <strong>{cartItems.price}</strong>
                                    <button onClick={() => removeCartItem(cartItems.id)
                                    }>Revover</button>
                                </CartProductDetails>
                            </CartProduct>
                        ))}
                    </section>

                    <CartFinalization>
                        <FinalizationDetails>
                            <div>
                                <span>Quantidade</span>
                                <p>{cartQuantity} {cartQuantity === 1 ? "item" : "itens"}</p>
                            </div>
                            <div>
                                <span>Valor total</span>
                                <p>{formattedCartTotal}</p>
                            </div>
                        </FinalizationDetails>

                        <button
                            onClick={handleCheckout}
                            disabled={isCreatingCheckoutSession || cartQuantity <= 0}
                        >Finalizar compra</button>
                    </CartFinalization>
                </CartContent>
            </Diolog.Portal>
        </Diolog.Root>
    )
}