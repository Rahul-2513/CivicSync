import React, { useState } from "react";

const Login = () => {

const [mode,setMode]=useState("login");

const inputStyle=
"w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition"

return(

<div className="min-h-screen flex items-center justify-center bg-slate-950 px-5">

<div className="w-105 bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl">

{/* Toggle */}

<div className="flex bg-slate-800 rounded-full p-1 mb-8 text-sm font-semibold">

<button
type="button"
className={`flex-1 py-2 rounded-full transition cursor-pointer ${
mode==="login"
? "bg-cyan-500 text-slate-900"
: "text-gray-400"
}`}
onClick={()=>setMode("login")}
>
Login
</button>

<button
type="button"
className={`flex-1 py-2 rounded-full transition cursor-pointer ${
mode==="signup"
? "bg-cyan-500 text-slate-900"
: "text-gray-400"
}`}
onClick={()=>setMode("signup")}
>
Signup
</button>

</div>

{/* LOGIN UI */}

{mode==="login" && (

<form className="space-y-5">

<div>

<label className="block text-gray-300 text-sm mb-2">
Email
</label>

<input
className={inputStyle}
type="email"
placeholder="Enter your email"
/>

</div>

<div>

<label className="block text-gray-300 text-sm mb-2">
Password
</label>

<input
className={inputStyle}
type="password"
placeholder="Enter your password"
/>

</div>

<div className="flex justify-between text-sm text-gray-400">

<label className="flex gap-2">
<input type="checkbox"/>
Remember me
</label>

<button type="button" className="text-cyan-400 hover:text-cyan-300 cursor-pointer">
Forgot password?
</button>

</div>

<button
className="w-full bg-cyan-500 hover:bg-cyan-400 py-3 rounded-lg font-semibold transition cursor-pointer"
type="submit"
>
Sign In
</button>

<p className="text-gray-400 text-center text-sm">

Don't have an account?

<button
type="button"
className="text-cyan-400 ml-2 hover:text-cyan-300 cursor-pointer"
onClick={()=>setMode("signup")}
>
Create account
</button>

</p>

</form>

)}

{/* SIGNUP UI */}

{mode==="signup" && (

<form className="space-y-5">

<div>

<label className="block text-gray-300 text-sm mb-2">
Full Name
</label>

<input
className={inputStyle}
type="text"
placeholder="Enter your name"
/>

</div>

<div>

<label className="block text-gray-300 text-sm mb-2">
Email
</label>

<input
className={inputStyle}
type="email"
placeholder="Enter your email"
/>

</div>

<div className="grid grid-cols-2 gap-4">

<div>

<label className="block text-gray-300 text-sm mb-2">
Password
</label>

<input
className={inputStyle}
type="password"
placeholder="Password"
/>

</div>

<div>

<label className="block text-gray-300 text-sm mb-2">
Confirm
</label>

<input
className={inputStyle}
type="password"
placeholder="Confirm"
/>

</div>

</div>

<button
className="w-full bg-cyan-500 hover:bg-cyan-400 py-3 rounded-lg font-semibold transition cursor-pointer"
type="submit"
>
Create Account
</button>

<p className="text-gray-400 text-center text-sm">

Already have account?

<button
type="button"
className="text-cyan-400 ml-2 hover:text-cyan-300 cursor-pointer"
onClick={()=>setMode("login")}
>
Login
</button>

</p>

</form>

)}

</div>

</div>

)

}

export default Login