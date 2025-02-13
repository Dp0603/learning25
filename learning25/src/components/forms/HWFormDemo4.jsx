import React from 'react';
import { useForm } from 'react-hook-form';

const HWFormDemo4 = () => {
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
        skills: {
            required: "Key Skills are required",
            minLength: {
                value: 3,
                message: "Enter at least 3 characters"
            },
            maxLength: {
                value: 100,
                message: "Skills cannot exceed 100 characters"
            }
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>AI Resume Builder</h1>

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
                    <label>Job Industry:</label>
                    <select {...register("industry")}>
                        <option value="software">Software Development</option>
                        <option value="marketing">Marketing</option>
                        <option value="finance">Finance</option>
                        <option value="healthcare">Healthcare</option>
                    </select>
                </div>

                <div>
                    <label>Experience Level:</label><br />
                    Junior <input type='radio' {...register("experience")} value="junior" />
                    Mid-Level <input type='radio' {...register("experience")} value="mid" />
                    Senior <input type='radio' {...register("experience")} value="senior" />
                </div>

                <div>
                    <label>Key Skills:</label>
                    <input 
                        type='text' 
                        {...register("skills", validationSchema.skills)} 
                        placeholder="e.g., React, Python, SEO" 
                    />
                    <span style={{ color: "red" }}>{errors.skills?.message}</span>
                </div>

                <div>
                    <label>Include Cover Letter?</label>
                    <input type='checkbox' {...register("coverLetter")} />
                </div>

                <div>
                    <input type='submit' value="Generate Resume" />
                </div>
            </form>
        </div>
    );
};

export default HWFormDemo4;
