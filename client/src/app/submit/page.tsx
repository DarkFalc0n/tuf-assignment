import { CodeForm } from "@/components/codeForm";
import React from "react";

const Submit = () => {
  return (
    <div className="px-6 py-10">
      <div className="text-2xl font-bold">Run your code</div>
      <CodeForm />
    </div>
  );
};

export default Submit;
