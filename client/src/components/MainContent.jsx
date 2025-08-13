import React from "react";
import { Plus } from "lucide-react";

const MainContent = () => {
  return (
    <div className="flex-1 transition-all duration-300 bg-[#F3F5F7] px-3 h-full overflow-hidden">
      <div className="bg-white border-2 rounded-md border-[rgba(0,0,0,0.08)] h-full p-6 shadow-sm flex flex-col items-center justify-center">
        {/* Custom folder SVG */}

        {/* Text */}
        <p className="mt-4 text-sm text-gray-500">.</p>

        {/* Button */}
        {/* <button className="mt-4 px-4 py-2 bg-[#3B40E8] text-white rounded-md text-sm hover:bg-[#3B40E8]/90 transition-colors duration-200 flex items-center gap-2">
          <Plus size={16} />
          <span>Add File</span>
        </button> */}
      </div>
    </div>
  );
};

export default MainContent;
