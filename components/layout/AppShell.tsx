"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
type Props={children:ReactNode};
export default function AppShell({children}:Props){
return(
<main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030712]">
<div className="absolute inset-0 overflow-hidden">
<motion.div animate={{x:[0,80,-40,0],y:[0,-40,50,0],scale:[1,1.08,1]}} transition={{duration:22,repeat:Infinity,ease:"easeInOut"}} className="absolute -left-56 -top-56 h-[650px] w-[650px] rounded-full bg-cyan-500/20 blur-[180px]"/>
<motion.div animate={{x:[0,-70,40,0],y:[0,60,-30,0],scale:[1.04,1,1.06]}} transition={{duration:24,repeat:Infinity,ease:"easeInOut"}} className="absolute -right-56 -bottom-56 h-[650px] w-[650px] rounded-full bg-blue-600/20 blur-[190px]"/>
</div>
<motion.div initial={{opacity:0,scale:0.97}} animate={{opacity:1,scale:1}} transition={{duration:0.45}} className="relative h-[844px] w-[430px] overflow-hidden rounded-[48px] border border-white/10 bg-[#09111F]/90 shadow-[0_40px_120px_rgba(0,0,0,0.70)] backdrop-blur-3xl">
<div className="absolute inset-0 rounded-[48px] ring-1 ring-cyan-400/10 pointer-events-none"/>
<div className="absolute left-0 right-0 top-0 z-40 flex items-center justify-between px-8 pt-5 text-xs text-white/70"><span>9:41</span><div className="flex gap-1"><div className="h-2 w-2 rounded-full bg-cyan-400"/><div className="h-2 w-2 rounded-full bg-white/70"/><div className="h-2 w-2 rounded-full bg-white/40"/></div></div>
<motion.div animate={{width:[128,138,128]}} transition={{duration:4,repeat:Infinity}} className="absolute left-1/2 top-3 z-50 flex h-9 -translate-x-1/2 items-center justify-center rounded-full bg-black px-5"><div className="mr-2 h-2 w-2 rounded-full bg-emerald-400"/><span className="text-[11px] font-medium text-white/90">Protected</span></motion.div>
<div className="absolute inset-x-0 top-16 bottom-0 overflow-hidden px-8 pb-8">{children}</div>
</motion.div>
</main>
);}