import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormDemo1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [output, setOutput] = useState();
  const [isSubmitted, setisSubmitted] = useState(false);

  const submitHandler = (data) => {
    console.log(data);
    setOutput(data);
    setisSubmitted(true);
  };

  const validationSchema = {
    name: {
      required:{
        value:true,
        message:"Name is requried",
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
  
    age: {
      required:{
        value:true,
        message:"Age is requried"
      },
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
  
    refcodeValidator: {
      required: {
        value: true,
        message: "Refcode is required",
      },
      validate: (value) => {
        return value == "royal" || "code must be royal only";
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
            {...register("name", validationSchema.name)}
          />
          <span style={{ color: "red" }}>{errors.name?.message}</span>
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
          <label>Ref Code</label>
          <input
            type="text"
            placeholder="Enter your Ref code"
            {...register("refcode", validationSchema.refcodeValidator)}
          >
         
          </input>
          <span style={{ color: "red" }}>
              {errors.refcode?.message}
            </span>
        </div>
        <div>
          <label>Color</label>
          <input type="color" {...register("color")}></input>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
      {isSubmitted == true ? (
        <div style={{ color: output.color }}>
          <h1>Name = {output?.name}</h1>
          <h2>Age = {output?.age}</h2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FormDemo1;
