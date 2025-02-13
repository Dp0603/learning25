import React from "react";
import { useForm } from "react-hook-form";

const FormDemo4 = () => {
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
      <h1>ORDER FOOD</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            {...register("fname", { required: "Name is required" })}
          />
          <span style={{ color: "red" }}>{errors.fname?.message}</span>
        </div>

        <div>
          <label>Food Preference</label>
          <br />
          VEG: <input type="radio" {...register("fpref")} value="veg" />
          NON-VEG: <input type="radio" {...register("fpref")} value="non-veg" />
          VEGAN: <input type="radio" {...register("fpref")} value="vegan" />
        </div>

        <div>
          <label>Toppings</label>
          <br />
          Cheese:{" "}
          <input type="checkbox" value="cheese" {...register("toppings")} />
          Sauce:{" "}
          <input type="checkbox" value="sauce" {...register("toppings")} />
          Onion:{" "}
          <input type="checkbox" value="onion" {...register("toppings")} />
        </div>

        <div>
          <label>TIME</label>
          <input
            type="text"
            {...register("preptime", { required: "Time is required" })}
          />
          <span style={{ color: "red" }}>{errors.preptime?.message}</span>
        </div>

        <div>
          <input type="submit" value="Create" />
        </div>
      </form>
    </div>
  );
};

export default FormDemo4;
