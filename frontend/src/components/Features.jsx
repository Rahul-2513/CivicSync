import React from 'react'
import { 
MapPin, 
Settings, 
Timer, 
Eye, 
BarChart3, 
ShieldCheck 
} from "lucide-react";

const Features = () => {

const features=[
{
title:"Real-Time Tracking",
desc:"Track issue progress from report to resolution.",
icon:MapPin
},
{
title:"Smart Issue Management",
desc:"Efficient categorization and workflow handling.",
icon:Settings
},
{
title:"SLA Monitoring",
desc:"Ensure issues are resolved within deadlines.",
icon:Timer
},
{
title:"Transparent Resolution",
desc:"Full visibility into complaint status.",
icon:Eye
},
{
title:"Department Analytics",
desc:"Performance insights for better governance.",
icon:BarChart3
},
{
title:"Secure Reporting",
desc:"Safe and reliable complaint submission.",
icon:ShieldCheck
}
]

return (

<div className="bg-pink-100/10 py-22 px-8">

{/* Heading */}

<div className="text-center max-w-2xl mx-auto mb-16">

<h1 className="text-3xl font-bold text-cyan-900">
What You Can Do
</h1>

<p className="text-gray-500 mt-2 leading-relaxed">
From reporting local problems to tracking their resolution, 
our platform empowers citizens and authorities to work 
together for a cleaner, safer, and smarter city.
</p>

</div>

{/* Feature Cards */}

<div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-8">

{features.map((feature,index)=>{

const Icon=feature.icon

return(

<div
key={index}
className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition duration-300"
>

<div className="bg-blue-100 w-fit p-3 rounded-lg mb-5">

<Icon className="text-blue-600" size={26}/>

</div>

<h2 className="text-lg font-semibold text-gray-900">
{feature.title}
</h2>

<p className="text-gray-500 mt-2 text-sm leading-relaxed">
{feature.desc}
</p>

</div>

)

})}

</div>

</div>

)

}

export default Features