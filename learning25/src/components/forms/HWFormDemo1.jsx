import React from 'react';
import { useForm } from 'react-hook-form';

const HWFormDemo1 = () => {
    const { register, handleSubmit } = useForm();
    
    const submitHandler = (data) => {
        console.log(data);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>AI Chatbot Customization</h1>

            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Chatbot Name:</label>
                    <input type='text' {...register("botName")} placeholder="Enter chatbot name" />
                </div>

                <div>
                    <label>AI Personality:</label><br />
                    Friendly <input type='radio' {...register("personality")} value="friendly" />
                    Professional <input type='radio' {...register("personality")} value="professional" />
                    Humorous <input type='radio' {...register("personality")} value="humorous" />
                </div>

                <div>
                    <label>Response Speed:</label>
                    <select {...register("responseSpeed")}>
                        <option value="instant">Instant</option>
                        <option value="fast">Fast</option>
                        <option value="normal">Normal</option>
                    </select>
                </div>

                <div>
                    <label>Integration Platforms:</label><br />
                    WhatsApp <input type='checkbox' value="whatsapp" {...register("platforms")} />
                    Telegram <input type='checkbox' value="telegram" {...register("platforms")} />
                    Website <input type='checkbox' value="website" {...register("platforms")} />
                </div>

                <div>
                    <label>AI Model:</label>
                    <input type='text' {...register("aiModel")} placeholder="Enter AI model (e.g., GPT-4)" />
                </div>

                <div>
                    <input type='submit' value="Customize AI" />
                </div>
            </form>
        </div>
    );
};

export default HWFormDemo1;
