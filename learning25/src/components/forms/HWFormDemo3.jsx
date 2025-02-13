import React from 'react';
import { useForm } from 'react-hook-form';

const HWFormDemo3 = () => {
    const { register, handleSubmit } = useForm();
    
    const submitHandler = (data) => {
        console.log(data);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Reserve Your Electric Vehicle</h1>

            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Full Name:</label>
                    <input type='text' {...register("fullName")} placeholder="Enter your name" />
                </div>

                <div>
                    <label>EV Model:</label>
                    <select {...register("evModel")}>
                        <option value="tesla_model_3">Tesla Model 3</option>
                        <option value="nissan_leaf">Nissan Leaf</option>
                        <option value="ford_mach_e">Ford Mustang Mach-E</option>
                        <option value="hyundai_ioniq">Hyundai Ioniq</option>
                    </select>
                </div>

                <div>
                    <label>Charging Preference:</label><br />
                    Home Charger <input type='radio' {...register("chargingOption")} value="home" />
                    Public Charging Stations <input type='radio' {...register("chargingOption")} value="public" />
                </div>

                <div>
                    <label>Preferred Delivery Date:</label>
                    <input type='date' {...register("deliveryDate")} />
                </div>

                <div>
                    <label>Would you like a test drive?</label>
                    <input type='checkbox' {...register("testDrive")} />
                </div>

                <div>
                    <input type='submit' value="Reserve Now" />
                </div>
            </form>
        </div>
    );
};

export default HWFormDemo3;
