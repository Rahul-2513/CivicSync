import React from "react";
import { FileText, ShieldCheck, UserCheck, CheckCircle, Camera, UserCog } from "lucide-react";

const Process = () => {
  return (
    <div className="bg-pink-50/10 py-22 px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-3xl font-bold text-cyan-900">
          The Resolution Pipeline
        </h1>

        <p className="text-gray-500 mt-2 leading-relaxed">
          Our smart workflow verifies, prioritizes, and helps resolve every civic issue quickly and efficiently.
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
        
        {/* Step 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="bg-blue-950 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
            <Camera className="text-white" />
          </div>
          <h3 className="font-semibold text-lg">Report</h3>
          <p className="text-gray-500 text-sm mt-2">
            Citizens report civic issues with images and location details.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="bg-cyan-800 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
            <ShieldCheck className="text-white" />
          </div>
          <h3 className="font-semibold text-lg">Verify</h3>
          <p className="text-gray-500 text-sm mt-2">
            Authorities verify and validate the reported issue.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="bg-teal-900 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
            <UserCog className="text-white" />
          </div>
          <h3 className="font-semibold text-lg">Assign</h3>
          <p className="text-gray-500 text-sm mt-2">
            The issue is assigned to the responsible department.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="bg-indigo-900 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
            <CheckCircle className="text-white" />
          </div>
          <h3 className="font-semibold text-lg">Resolve</h3>
          <p className="text-gray-500 text-sm mt-2">
            The issue is resolved and the citizen is notified.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Process;