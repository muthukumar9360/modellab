import React, { useState } from 'react';

function BillCalculator() {
    const [amount, setAmount] = useState('');
    const [tax, setTax] = useState('');
    const [total, setTotal] = useState(null);

    const calculateTotal = (e) => {
        e.preventDefault();
        const amt = parseFloat(amount) || 0;
        const taxAmt = parseFloat(tax) || 0;
        const result = amt + (amt * taxAmt / 100);
        setTotal(result.toFixed(2));
    };

    return (
        <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
            <h2>Online Bill Calculator</h2>
            <form onSubmit={calculateTotal}>
                <div>
                    <label>Amount: </label>
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} required />
                </div>
                <div>
                    <label>Tax (%): </label>
                    <input type="number" value={tax} onChange={e => setTax(e.target.value)} />
                </div>
                <button type="submit">Calculate</button>
            </form>
            {total && (
                <div>
                    <h3>Total Bill: ${total}</h3>
                </div>
            )}
        </div>
    );
}

export default BillCalculator;