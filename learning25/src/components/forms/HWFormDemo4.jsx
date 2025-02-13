import React from 'react';
import { useForm } from 'react-hook-form';

const HWFormDemo4 = () => {
    const { register, handleSubmit } = useForm();
    
    const submitHandler = (data) => {
        console.log(data);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>AI Resume Builder</h1>

            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Full Name:</label>
                    <input type='text' {...register("fullName")} placeholder="Enter your name" />
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
                    <input type='text' {...register("skills")} placeholder="e.g., React, Python, SEO" />
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
