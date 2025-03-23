import React from 'react'

export const Button = (props:React.PropsWithChildren) => {
  return (
    <button className="relative rounded-lg py-2 px-3 font-medium text-sm  bg-gradient-to-b  from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
    <div className="absolute inset-0 ">
      <div className="border rounded-lg absolute inset-0 border-white/20 [mask-image]:linear-gradient(to_bottom,black,transparent)" ></div>
      <div className="border rounded-lg absolute inset-0 [mask-image]:linear-gradient(to_top,black,transparent) border-white/40" ></div>
    <div className="absolute  rounded-lg inset-0 shadow-[0px_0px_10px_rgb(140,69,255,0.7)_inset]"> </div>
    </div>
    <span>{props.children}</span>
    </button>
  )
}

