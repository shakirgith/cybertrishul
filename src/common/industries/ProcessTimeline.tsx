"use client";

const process=[

{
step:"01",
title:"Assessment",
},
{
step:"02",
title:"Risk Analysis",
},
{
step:"03",
title:"Implementation",
},
{
step:"04",
title:"Monitoring",
},
{
step:"05",
title:"Support",
},

];

export default function ProcessTimeline(){

return(

<div className="mt-20 rounded-3xl bg-[#061426] px-10 py-14 text-white">

<p className="text-center text-xs uppercase tracking-[0.25em] text-cyan-400">
Our Process
</p>

<h3 className="mt-3 text-center text-3xl font-bold">
A Proven Approach to Cybersecurity
</h3>

<div className="relative mt-16 grid gap-10 md:grid-cols-5">

<div className="absolute left-0 top-5 hidden h-[2px] w-full border-t border-dashed border-blue-500 md:block"/>

{process.map((item)=>(

<div
key={item.step}
className="relative text-center"
>

<div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold">

{item.step}

</div>

<h4 className="mt-5 font-semibold">
{item.title}
</h4>

<p className="mt-2 text-sm text-slate-300">

Professional cybersecurity implementation and continuous support.

</p>

</div>

))}

</div>

</div>

);

}