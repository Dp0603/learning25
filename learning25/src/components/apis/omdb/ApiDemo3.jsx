import React from 'react'
import { useForm } from 'react-hook-form'
const ApiDemo3 = () => {
    const {register,handleSubmit} = useForm()
    const submitHandler = async (data)=>{
        // console.log(data)
        const res = await axios.post(
            "https://node5.onrender.com/user/user",
            data
          );
          console.log(res.data);
          if (res.status == 201){
            alert ("data saved");
          }
        };      


  return (
    <div style={{textAlign:"center"}}>
        <h1>Api Demo 3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name</label>
          <input type='text'{...register("name")}></input>
        </div>
        <div>
          <label>Age</label>
          <input type='number'{...register("age")}></input>
        </div>
        <div>
          <label>Email</label>
          <input type='text'{...register("email")}></input>
        </div>
        <div>
          <label>Status</label>
          <input type='text'{...register("isActive")}></input>
        </div>
        </form>
        <button type="text">Submit</button>
    </div>
  );
};

export default ApiDemo3
