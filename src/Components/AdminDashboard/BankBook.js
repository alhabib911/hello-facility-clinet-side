import React, { useState } from 'react';
import useBankBook from '../hooks/useBankBook';

const BankBook = () => {
    const [expense, setExpense] = useState()
    const [expenseType, setExpenseType] = useState()
    const [bankBookDetails, setBankBookDetsils] = useState([])

    const handelBankBook = event => {
        event.preventDefault()
        const date = event.target.date.value
        const voucher = event.target.voucher.value
        const particular = event.target.particular.value
        const projectName = event.target.projectName.value
        const debit = event.target.debit.value
        const credit = event.target.credit.value



        const bankBook = { date, voucher, particular, expense, expenseType, projectName, debit, credit }
        setBankBookDetsils(bankBook)

        fetch('http://localhost:5000/bankbook', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bankBook)
        })
            .then(res => res.json())
            .then((data) => {
                event.target.reset()
            })

    }

    const [bankBook] = useBankBook()
    console.log(bankBook);

    return (
        <div>
            <div>
                <form onSubmit={handelBankBook}>
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
                                    bankBook.map(bankBook => <tr>
                                        <td>Date: {bankBook?.date}</td>
                                        <td>Voucher No: {bankBook?.voucher}</td>
                                        <td>Particular: {bankBook?.particular}</td>
                                        <td>Expense Head: {bankBook?.expense}</td>
                                        <td>Project Name: {bankBook?.projectName}</td>
                                        <td>Expense Type: {bankBook?.expenseType}</td>
                                        <td>Debit: {bankBook?.debit}</td>
                                        <td>Credit: {bankBook?.credit}</td>
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

export default BankBook;