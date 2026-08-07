"use client";

import {
Landmark,
HeartPulse,
Factory,
GraduationCap,
ShoppingCart,
Building2,
Users,
Cpu,
ArrowRight
} from "lucide-react";

import IndustryCard from "./IndustryCard";

const industries=[

{
title:"Banking & Finance",
icon:Landmark,
},
{
title:"Healthcare",
icon:HeartPulse,
},
{
title:"Manufacturing",
icon:Factory,
},
{
title:"Education",
icon:GraduationCap,
},
{
title:"Retail & E-Commerce",
icon:ShoppingCart,
},
{
title:"Government",
icon:Building2,
},
{
title:"MSME",
icon:Users,
},
{
title:"IT & Technology",
icon:Cpu,
},

];

export default function IndustriesGrid(){

return(

<>

<div className="grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-8">

{industries.map((item)=>(

<IndustryCard
key={item.title}
title={item.title}
icon={item.icon}
/>

))}

</div>

<div className="mt-12 text-center">

<button className="inline-flex items-center gap-3 rounded-xl border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">

View All Industries

<ArrowRight size={18}/>

</button>

</div>

</>

);

}