"use client";

import { LucideIcon } from "lucide-react";

interface Props{
    title:string;
    icon:LucideIcon;
}

export default function IndustryCard({
    title,
    icon:Icon,
}:Props){

return(

<div
className="group rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
>

<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 transition group-hover:bg-blue-600">

<Icon className="h-8 w-8 text-blue-600 group-hover:text-white"/>

</div>

<h3 className="mt-5 font-semibold text-slate-800">
{title}
</h3>

</div>

);
}