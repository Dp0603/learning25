import React from 'react'
import { useForm } from 'react-hook-form'
const FormDemo1 = () => {
    const {register,handleSubmit} = useForm()
    const submitHandler = (data)=>{
        console.log(data);
    };
  return (
    <div>

    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 1</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' placeholder='enter name' {...register("firstname")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='text' placeholder='enter age' {...register("age")}></input>
            </div>

            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
    </div>

  )
}

export default FormDemo1
