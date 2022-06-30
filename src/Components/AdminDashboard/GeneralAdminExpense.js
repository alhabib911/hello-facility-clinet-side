import React, { useState } from 'react';
import useGaExpense from '../hooks/useGaExpense';

const GeneralAdminExpense = () => {
    const [gaExpenseDetails, setGaExpenseDetails] = useState([])
    const handelGAExpense = event => {
        event.preventDefault()
        const voucher = event.target.voucher.value
        const particular = event.target.particular.value
        const amount = event.target.amount.value




        const GAExpense = { voucher, particular, amount }
        setGaExpenseDetails(GAExpense)

        fetch('http://localhost:5000/ga-expense', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(GAExpense)
        })
            .then(res => res.json())
            .then((data) => {
                event.target.reset()
            })
    }

    const [gaExpense] = useGaExpense()
    console.log(gaExpense);
    return (
        <div>
            <div>
                <form onSubmit={handelGAExpense}>
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
                        <p className='mt-10 ml-3'>General & Admin Expense Details:</p>
                        <tbody>
                            <tr>
                                {
                                    gaExpense.map(gaExpense => <tr>
                                        <td>Voucher No: {gaExpense?.voucher}</td>
                                        <td>Particular: {gaExpense?.particular}</td>
                                        <td>Amount: {gaExpense?.amount}</td>
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

export default GeneralAdminExpense;