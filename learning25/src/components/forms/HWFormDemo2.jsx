import React from "react";
import { useForm } from "react-hook-form";

const HWFormDemo2 = () => {
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
    nameValidator: {
      required: {
        value: true,
        message: "Name is required",
      },
      minLength: {
        value: 3,
        message: "Name must be at least 3 characters",
      },
      maxLength: {
        value: 30,
        message: "Name cannot exceed 30 characters",
      },
    },

    amountValidator: {
      required: {
        value: true,
        message: "Investment amount is required",
      },
      min: {
        value: 5,
        message: "Minimum amount is $5",
      },
      max: {
        value: 10000,
        message: "Maximum amount is $10,000",
      },
      valueAsNumber: true,
    },
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Cryptocurrency Investment</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Investor Name:</label>
          <input
            type="text"
            {...register("investorName", validationSchema.nameValidator)}
            placeholder="Enter your name"
          />
          <span style={{ color: "red" }}>{errors.investorName?.message}</span>
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
          <input
            type="number"
            {...register("investmentAmount", validationSchema.amountValidator)}
            placeholder="Enter amount"
          />
          <span style={{ color: "red" }}>
            {errors.investmentAmount?.message}
          </span>
        </div>

        <div>
          <label>Risk Level:</label>
          <br />
          Low <input type="radio" {...register("riskLevel")} value="low" />
          Medium <input type="radio" {...register("riskLevel")} value="medium" />
          High <input type="radio" {...register("riskLevel")} value="high" />
        </div>

        <div>
          <label>Receive Market Updates:</label>
          <input type="checkbox" {...register("receiveUpdates")} />
        </div>

        <div>
          <input type="submit" value="Invest Now" />
        </div>
      </form>
    </div>
  );
};

export default HWFormDemo2;
