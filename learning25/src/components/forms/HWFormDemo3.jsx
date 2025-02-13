import React from 'react';
import { useForm } from 'react-hook-form';

const HWFormDemo3 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const submitHandler = (data) => {
        console.log(data);
    };

    const validationSchema = {
        fullName: {
            required: "Full Name is required",
            minLength: {
                value: 3,
                message: "Full Name must be at least 3 characters"
            },
            maxLength: {
                value: 50,
                message: "Full Name cannot exceed 50 characters"
            }
        },
        deliveryDate: {
            required: "Delivery Date is required",
            validate: (value) => {
                const selectedDate = new Date(value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return selectedDate > today || "Delivery date must be in the future";
            }
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Reserve Your Electric Vehicle</h1>

            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Full Name:</label>
                    <input 
                        type='text' 
                        {...register("fullName", validationSchema.fullName)} 
                        placeholder="Enter your name" 
                    />
                    <span style={{ color: "red" }}>{errors.fullName?.message}</span>
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
                    <input 
                        type='date' 
                        {...register("deliveryDate", validationSchema.deliveryDate)} 
                    />
                    <span style={{ color: "red" }}>{errors.deliveryDate?.message}</span>
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
