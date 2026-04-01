import React from 'react'
import { BadgeAlert, CheckCircle, Clock, Users } from "lucide-react";

const Stats = () => {

const stats=[
{
title:"Total Issues",
value:"12,425",
change:"+12% this month",
desc:"Issues reported by citizens",
icon:BadgeAlert,
color:"text-red-500",
bg:"bg-red-100",
border:"border-red-900"
},
{
title:"Resolved",
value:"8,210",
change:"High Performance",
desc:"Successfully resolved cases",
icon:CheckCircle,
color:"text-green-500",
bg:"bg-green-100",
border:"border-green-900"
},
{
title:"Pending",
value:"3,120",
change:"Processing...",
desc:"Awaiting authority action",
icon:Clock,
color:"text-yellow-500",
bg:"bg-yellow-100",
border:"border-yellow-900"
},
{
title:"Active Users",
value:"2,450",
change:"+9% this month",
desc:"Citizens using CivicSync",
icon:Users,
color:"text-blue-500",
bg:"bg-blue-100",
border:"border-blue-900"
}
]

return (

<div className="bg-gray-50 py-20 px-6">

<div className="text-center max-w-2xl mx-auto mb-14">

<h1 className="text-3xl font-bold text-cyan-900">
Platform Statistics
</h1>

<p className="text-gray-500 mt-3">
Real-time insights into civic issues reported by citizens.
</p>

</div>

<div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">

{stats.map((item,index)=>{

const Icon=item.icon

return(

<div
key={index}
className={`p-6 bg-white border-l-4 ${item.border} hover:-translate-y-2 transition duration-300 rounded-xl shadow-sm hover:shadow-lg`}>

<div className="flex justify-between items-center">

<div className={`${item.bg} p-2 rounded-lg`}>

<Icon size={24} className={item.color}/>

</div>

<p className={`${item.bg} ${item.color} text-xs font-semibold px-3 py-1 rounded-md`}>
{item.change}
</p>

</div>

<p className="text-3xl font-bold text-gray-900 mt-6">
{item.value}
</p>

<p className="text-gray-600 font-medium mt-1">
{item.title}
</p>

<p className="text-gray-400 text-sm mt-2">
{item.desc}
</p>

</div>

)

})}

</div>

</div>

)

}

export default Stats