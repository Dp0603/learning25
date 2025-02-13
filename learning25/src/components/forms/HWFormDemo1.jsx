import React from "react";
import { useForm } from "react-hook-form";

const HWFormDemo1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("errors", errors);

  const submitHandler = (data) => {
    console.log(data);
  };

  const validationSchema = {
    botName: {
      required: {
        value: true,
        message: "Chatbot name is required",
      },
      minLength: {
        value: 3,
        message: "Chatbot name must be at least 3 characters",
      },
      maxLength: {
        value: 20,
        message: "Chatbot name cannot exceed 20 characters",
      },
    },
    aiModel: {
      required: {
        value: true,
        message: "AI model is required",
      },
      minLength: {
        value: 2,
        message: "AI model name must be at least 2 characters",
      },
      maxLength: {
        value: 15,
        message: "AI model name cannot exceed 15 characters",
      },
    },
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>AI Chatbot Customization</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Chatbot Name:</label>
          <input
            type="text"
            {...register("botName", validationSchema.botName)}
            placeholder="Enter chatbot name"
          />
          <span style={{ color: "red" }}>{errors.botName?.message}</span>
        </div>

        <div>
          <label>AI Personality:</label>
          <br />
          Friendly{" "}
          <input type="radio" {...register("personality")} value="friendly" />
          Professional{" "}
          <input
            type="radio"
            {...register("personality")}
            value="professional"
          />
          Humorous{" "}
          <input type="radio" {...register("personality")} value="humorous" />
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
          <label>Integration Platforms:</label>
          <br />
          WhatsApp{" "}
          <input type="checkbox" value="whatsapp" {...register("platforms")} />
          Telegram{" "}
          <input type="checkbox" value="telegram" {...register("platforms")} />
          Website{" "}
          <input type="checkbox" value="website" {...register("platforms")} />
        </div>

        <div>
          <label>AI Model:</label>
          <input
            type="text"
            {...register("aiModel", validationSchema.aiModel)}
            placeholder="Enter AI model (e.g., GPT-4)"
          />
          <span style={{ color: "red" }}>{errors.aiModel?.message}</span>
        </div>

        <div>
          <input type="submit" value="Customize AI" />
        </div>
      </form>
    </div>
  );
};

export default HWFormDemo1;
