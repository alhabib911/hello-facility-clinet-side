import React, { useState } from 'react';
import useCashBook from '../hooks/useCashBook';


const CashBook = () => {
    const [expense, setExpense] = useState()
    const [expenseType, setExpenseType] = useState()
    const [cashBookDetails, setCashBookDetsils] = useState([])

    const handelCashBook = event => {
        event.preventDefault()
        const date = event.target.date.value
        const voucher = event.target.voucher.value
        const particular = event.target.particular.value
        const projectName = event.target.projectName.value
        const debit = event.target.debit.value
        const credit = event.target.credit.value



        const cashBook = { date, voucher, particular, expense, expenseType, projectName, debit, credit }
        setCashBookDetsils(cashBook)

        fetch('http://localhost:5000/cashbook', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cashBook)
        })
            .then(res => res.json())
            .then((data) => {
                event.target.reset()
            })

    }

    const [cashBook] = useCashBook()
    console.log(cashBook);

    return (
        <div>
            <div>
                <form onSubmit={handelCashBook}>
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="" />
                    <label htmlFor="voucher">Voucher No:</label>
                    <input type="number" name="voucher" id="" placeholder='Voucher Number' />
                    <label htmlFor="particular">Particular</label>
                    <textarea name="particular" id="" ></textarea>
                    <label htmlFor="expense">Expense Header</label>
                    <select value={expense} onChange={event => setExpense(event.target.value)} required>
                        <option disabled selected>Select Your Expense</option>
                        <option>Direct Expense</option>
                        <option>General & Admin Expense</option>
                        <option>Project Expense</option>
                    </select>
                    <label htmlFor="projectName">Expense Type</label>
                    <input type="text" name="projectName" id="" placeholder='Project Name' />
                    <label htmlFor="expenseType">Expense Type</label>
                    <select value={expenseType} onChange={event => setExpenseType(event.target.value)} required>
                        <option disabled selected>Expense Type</option>
                        <option>Salary</option>
                        <option>Materials</option>
                        <option>Uniform</option>
                    </select>
                    <label htmlFor="debit">Debit</label>
                    <input type="number" name="debit" id="" />
                    <label htmlFor="credit">Credit</label>
                    <input type="number" name="credit" id="" />
                    <input type="submit" value="Save" />
                </form>
            </div>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <p className='mt-10 ml-3'>CashBook Details:</p>
                        <tbody>
                            <tr>
                                {
                                    cashBook.map(cashBook => <tr>
                                        <td>Date: {cashBook?.date}</td>
                                        <td>Voucher No: {cashBook?.voucher}</td>
                                        <td>Particular: {cashBook?.particular}</td>
                                        <td>Expense Head: {cashBook?.expense}</td>
                                        <td>Project Name: {cashBook?.projectName}</td>
                                        <td>Expense Type: {cashBook?.expenseType}</td>
                                        <td>Debit: {cashBook?.debit}</td>
                                        <td>Credit: {cashBook?.credit}</td>
                                    </tr>)
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CashBook;