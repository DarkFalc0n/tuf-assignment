import SubmissionsTable from "@/components/submissionsTable";
import React from "react";

const Submissions = () => {
  return (
    <div className="px-6 py-10">
      <div className="text-2xl font-bold">All submissions</div>
      <SubmissionsTable />
    </div>
  );
};

export default Submissions;
