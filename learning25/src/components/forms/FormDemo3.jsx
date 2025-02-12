import React from "react";
import { useForm } from "react-hook-form";

const FormDemo3 = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>TRIP TO MAHAKUMBH</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>NAME</label>
            <input
              type="text"
              placeholder="enter your name"
              {...register("NAME")}
            ></input>
          </div>
          <div>
            <label>TRANSPORTATION</label>
            <br></br>
            FLIGHT:
            <input
              type="radio"
              value="male"
              name="gender"
              {...register("gender")}
            ></input>
            TRAIN:
            <input
              type="radio"
              value="female"
              name="gender"
              {...register("gender")}
            ></input>
            BUS:
            <input
              type="radio"
              value="female"
              name="gender"
              {...register("gender")}
            ></input>
          </div>
          <div>
            <label>CITY</label>
            <label>CITY</label>
            <select {...register("city")}>
              <option value="ahmedabad">Ahmedabad</option>
              <option value="mumbai">Mumbai</option>
              <option value="pune">Pune</option>
            </select>
          </div>
          <div>
            <label>CHOICE</label>
            20km
            <input
              type="checkbox"
              value="20km"
              {...register("transport")}
            ></input>
            Swimming
            <input
              type="checkbox"
              value="swim"
              {...register("transport")}
            ></input>
            RETURN
            <input
              type="checkbox"
              value="return"
              {...register("transport")}
            ></input>
          </div>
          <div>
            <input type="submit" value="submit"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormDemo3;
