import React from "react";
import { useForm } from "react-hook-form";

const FormDemo3 = () => {
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
      <h1>TRIP TO MAHAKUMBH</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
          />
          <span style={{ color: "red" }}>{errors.name?.message}</span>
        </div>

        <div>
          <label>TRANSPORTATION</label>
          <br />
          FLIGHT:{" "}
          <input
            type="radio"
            value="flight"
            name="transport"
            {...register("transport")}
          />
          TRAIN:{" "}
          <input
            type="radio"
            value="train"
            name="transport"
            {...register("transport")}
          />
          BUS:{" "}
          <input
            type="radio"
            value="bus"
            name="transport"
            {...register("transport")}
          />
        </div>

        <div>
          <label>CITY</label>
          <select {...register("city")}>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="mumbai">Mumbai</option>
            <option value="pune">Pune</option>
          </select>
        </div>

        <div>
          <label>CHOICE</label>
          <br />
          20km <input type="checkbox" value="20km" {...register("choice")} />
          Swimming{" "}
          <input type="checkbox" value="swim" {...register("choice")} />
          RETURN{" "}
          <input type="checkbox" value="return" {...register("choice")} />
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default FormDemo3;
