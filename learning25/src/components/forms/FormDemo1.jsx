import React from "react";
import { useForm } from "react-hook-form";

const FormDemo1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  const validationSchema = {
    name: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Name must be at least 3 characters",
      },
      maxLength: {
        value: 30,
        message: "Name cannot exceed 30 characters",
      },
    },
    age: {
      required: "Age is required",
      pattern: {
        value: /^[0-9]+$/,
        message: "Age must be a number",
      },
      min: {
        value: 1,
        message: "Age must be at least 1",
      },
      max: {
        value: 100,
        message: "Age cannot exceed 100",
      },
    },
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FORM DEMO 1</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input
            type="text"
            placeholder="Enter name"
            {...register("firstname", validationSchema.name)}
          />
          <span style={{ color: "red" }}>{errors.firstname?.message}</span>
        </div>

        <div>
          <label>AGE</label>
          <input
            type="text"
            placeholder="Enter age"
            {...register("age", validationSchema.age)}
          />
          <span style={{ color: "red" }}>{errors.age?.message}</span>
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default FormDemo1;
