import React, { useState } from 'react';
import useDirectExpense from '../hooks/useDirectExpense';

const DirectExpense = () => {
    const [directExpenseDetails, setDirectExpenseDetails] = useState([])
    const handelDirectExpense = event => {
        event.preventDefault()
        const voucher = event.target.voucher.value
        const particular = event.target.particular.value
        const amount = event.target.amount.value




        const directExpense = { voucher, particular, amount }
        setDirectExpenseDetails(directExpense)

        fetch('http://localhost:5000/direct-expense', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(directExpense)
        })
            .then(res => res.json())
            .then((data) => {
                event.target.reset()
            })

    }

    const [directExpense] = useDirectExpense()
    console.log(directExpense);

    return (
        <div>
            <div>
                <form onSubmit={handelDirectExpense}>
                    <label htmlFor="voucher">Voucher No</label>
                    <input type="text" name="voucher" id="" placeholder='Voucher Number' />
                    <label htmlFor="particular">Particular</label>
                    <textarea name="particular" id="" ></textarea>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount" id="" />
                    <input type="submit" value="Save" />
                </form>
            </div>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <p className='mt-10 ml-3'>Direct Expense Details:</p>
                        <tbody>
                            <tr>
                                {
                                    directExpense.map(directExpense => <tr>
                                        <td>Voucher No: {directExpense?.voucher}</td>
                                        <td>Particular: {directExpense?.particular}</td>
                                        <td>Amount: {directExpense?.amount}</td>
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

export default DirectExpense;