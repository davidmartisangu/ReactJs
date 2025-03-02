import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

export default function ExpenseList() {

    const {state} = useBudget()
    const filterCategory = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses

    const isEmpty = useMemo(()=> filterCategory.length === 0, [filterCategory])

    return (
        <div className="mt-10 rounded-lg shadow-lg p-10">
            {isEmpty ? <p className=" text-gray-600 text-2xl font-bold">No hay gastos</p> : (
                <>
                    <p className=" text-gray-600 text-2xl font-bold my-5">Lista de gastos:</p>
                    {filterCategory.map(expense=>(
                        <ExpenseDetail
                            key={expense.id}
                            expense={expense}
                        />
                    ))}
                </>)}
        </div>
    )
}
