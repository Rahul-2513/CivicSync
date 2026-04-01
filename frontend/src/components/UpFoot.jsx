import React from 'react';

const UpFoot = () => {
  return (

<div className="relative w-full bg-slate-950 flex items-center justify-center py-24 px-6 overflow-hidden">

{/* Background grid */}

<div 
className="absolute inset-0 opacity-20"
style={{
backgroundImage:`linear-gradient(#334155 1px, transparent 1px),
linear-gradient(90deg,#334155 1px,transparent 1px)`,
backgroundSize:'70px 70px'
}}
></div>

<div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">

{/* Left */}

<div>

<h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">

Build a <span className="text-cyan-400">Smarter City</span><br/>

with CivicSync

</h1>

<p className="text-slate-400 text-lg mt-6 max-w-lg">

Report civic issues, track resolution progress, and help 
local authorities respond faster using AI-powered 
complaint management.

</p>

<div className="flex gap-5 mt-8">

<button className="px-8 py-3 bg-cyan-500 text-slate-900 font-semibold rounded-lg hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20">

Report Issue

</button>

<button className="px-8 py-3 border border-slate-700 text-white rounded-lg hover:bg-white/5 transition">

Contact Admin

</button>

</div>

</div>

{/* Right Card */}

<div className="bg-slate-900/70 backdrop-blur border border-slate-800 p-8 rounded-2xl shadow-xl max-w-md lg:ml-auto">

<div className="flex items-center gap-4 mb-6">

<div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">

CS

</div>

<div>

<h4 className="text-white font-semibold">
Municipal Operations Head
</h4>

<p className="text-slate-500 text-sm mt-1">
Urban Governance Department
</p>

</div>

</div>

<p className="text-slate-300 text-lg leading-relaxed">

"CivicSync helped us streamline complaint resolution,
reduce pending cases, and improve transparency between
citizens and departments."

</p>

<div className="mt-6 text-cyan-400 text-sm font-medium">

AI Driven Civic Intelligence Platform

</div>

</div>

</div>

</div>

  );
};

export default UpFoot;