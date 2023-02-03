import { createContext, ReactNode, useState } from "react";

export interface IProduct {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    numberPrice: number;
    description: string;
    defaultPriceId: string;
}

interface CartContextData {
    cartItems: IProduct[];
    addToCart: (product: IProduct) => void;
    checkIFItemAlreadyExists: (productId: string) => boolean;
}

interface CartContextProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<IProduct[]>([]);

    function addToCart(product: IProduct) {
        setCartItems((state) => [...state, product]);
    }

    function checkIFItemAlreadyExists(productId: string) {
        return cartItems.some((product) => product.id === productId)
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, checkIFItemAlreadyExists }}>
            {children}
        </CartContext.Provider>
    )
}