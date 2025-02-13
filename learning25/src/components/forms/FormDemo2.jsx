import React from "react";
import { useForm } from "react-hook-form";

const FormDemo2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>TRIP TO GOA</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input
            type="text"
            placeholder="Enter name"
            {...register("firstname", { required: "Name is required" })}
          />
          <span style={{ color: "red" }}>{errors.firstname?.message}</span>
        </div>

        <div>
          <label>AGE</label>
          <input
            type="text"
            placeholder="Enter age"
            {...register("age", { required: "Age is required" })}
          />
          <span style={{ color: "red" }}>{errors.age?.message}</span>
        </div>

        <div>
          <label>BUDGET</label>
          <input
            type="number"
            placeholder="Enter budget"
            {...register("budget")}
          />
        </div>

        <div>
          <label>GENDER</label>
          <br />
          MALE:{" "}
          <input
            type="radio"
            value="male"
            name="gender"
            {...register("gender")}
          />
          FEMALE:{" "}
          <input
            type="radio"
            value="female"
            name="gender"
            {...register("gender")}
          />
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default FormDemo2;
