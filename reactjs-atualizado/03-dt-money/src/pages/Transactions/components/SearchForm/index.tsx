import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from 'zod'; 
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
type SearchFormInputs = z.infer<typeof searchFormSchema>;
    const { fetchTransactions } = useContext(TransactionsContext)
    const { 
        register, 
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });

    async function handleSubmitSearchTransactions(data: SearchFormInputs) {
        await fetchTransactions(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSubmitSearchTransactions)}>
            <input 
                type="text" 
                placeholder="Busque por transações" 
                {...register('query')}
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}