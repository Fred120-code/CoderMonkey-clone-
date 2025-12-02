import React, { useState } from 'react'
import LoginView from './LoginView'
import { LoginFormFielsType } from "@/types/form";
import { SubmitHandler, useForm } from 'react-hook-form';

const LoginContainer = () => {


    const [ isLoading, setIsloading] = useState<boolean>(false)
  
    const {
		handleSubmit,
		control,
		formState: { errors },
		register,
		setError,
		reset,
	} = useForm<LoginFormFielsType>();
  
    const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
      console.log("formData", formData)
		setIsloading(true);
	};
    
  return (
		<div>
			<LoginView
				form={{
					errors,
					control,
					register,
					handleSubmit,
					onSubmit,
					isLoading,
				}}
			/>
		</div>
  );
}

export default LoginContainer