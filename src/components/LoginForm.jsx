import { useRef, useState } from "react";

import { checkValidation } from "../utils/validation";

   


const LoginForm = ()=>{

    const [errorMessage, setErrorMessage] = useState(null)
    const email = useRef(null)
    const password = useRef(null)

    const [isLoginForm, setIsLoginForm] = useState(true)

    const handleLoginSignUp=()=>{
        setIsLoginForm(!isLoginForm)
    }

    const handleSubmit = ()=>{
        
        const message = checkValidation(email.current.value, password.current.value)
        setErrorMessage(message)

    }

    return(
        <form onSubmit={(e)=>{e.preventDefault()}} className="w-[450px]  p-16 mx-auto text-white bg-black bg-opacity-75 rounded-lg" >

            <h1 className="text-3xl font-bold">{ isLoginForm?"Sign In":"Sign Up"}</h1>
            
{!isLoginForm&&<input className="w-full bg-black border border-white rounded-md p-4 mt-6" type="text" placeholder="Enter your email here" /> }        

            <input ref={email} className="w-full bg-black border border-white rounded-md p-4 mt-6" type="email" placeholder="Enter your email here" />
            <input ref={password} className="w-full bg-black border border-white p-4 rounded-md mt-6 mb-2" type=" password" placeholder="Enter your password here" />
            
            <p className="text-red-700 ">{errorMessage}</p>
            
            <button
            
            onClick={handleSubmit}
            
            className="p-2 rounded-md my-2 hover:bg-red-800 bg-red-600 w-full  mt-6">{isLoginForm?"Sign In":"Sign Up"}</button>
            
            { isLoginForm&&<p className="text-center my-4">OR</p>}
            
           {isLoginForm&& <button className="w-full hover:bg-gray-500 bg-gray-400 bg-opacity-75 p-2 rounded-md ">Use a Sign-in Code</button>}
           {isLoginForm&& <p className="text-center my-3 hover:underline text-white">Forgot password?</p> }
            {isLoginForm&&<div className="flex gap-1 text-md my-2">
                <input type="checkbox" className="text-black bg-black" />
                <p>Remember me</p>
            </div>}
            <p className="text-gray-400">{isLoginForm?"New to Netflix?":"Already registered?"}  
                <span
                    onClick={handleLoginSignUp}
                 className=" text-white ml-1 cursor-pointer hover:underline">{isLoginForm?"Sign up now":"Sign In now"}</span>
            </p>
        </form>
    )
}

export default LoginForm;