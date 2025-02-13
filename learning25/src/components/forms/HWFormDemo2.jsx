import React from 'react';
import { useForm } from 'react-hook-form';

const HWFormDemo2 = () => {
    const { register, handleSubmit } = useForm();
    
    const submitHandler = (data) => {
        console.log(data);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Cryptocurrency Investment</h1>

            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Investor Name:</label>
                    <input type='text' {...register("investorName")} placeholder="Enter your name" />
                </div>

                <div>
                    <label>Preferred Cryptocurrency:</label>
                    <select {...register("cryptoType")}>
                        <option value="bitcoin">Bitcoin</option>
                        <option value="ethereum">Ethereum</option>
                        <option value="dogecoin">Dogecoin</option>
                        <option value="solana">Solana</option>
                    </select>
                </div>

                <div>
                    <label>Investment Amount ($):</label>
                    <input type='number' {...register("investmentAmount")} placeholder="Enter amount" />
                </div>

                <div>
                    <label>Risk Level:</label><br />
                    Low <input type='radio' {...register("riskLevel")} value="low" />
                    Medium <input type='radio' {...register("riskLevel")} value="medium" />
                    High <input type='radio' {...register("riskLevel")} value="high" />
                </div>

                <div>
                    <label>Receive Market Updates:</label>
                    <input type='checkbox' {...register("receiveUpdates")} />
                </div>

                <div>
                    <input type='submit' value="Invest Now" />
                </div>
            </form>
        </div>
    );
};

export default HWFormDemo2;
