"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";

interface ISubmission {
  id: number;
  createdAt: string;
  username: string;
  language: string;
  stdin: string | null;
  code: string;
  stdout_token: string;
  token: string;
  stdout: string | null;
  stderr: string | null;
  status: string;
}

const SubmissionsTable = () => {
  const [submissions, setSubmissions] = useState<ISubmission[] | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://tuf-assignment-f5kh.onrender.com/fetch")
      .then((response) => response.json())
      .then((data) => {
        setSubmissions(data.submissions);
        setLoading(false);
      });
  }, []);
  return loading ? (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center text-2xl bg-slate-400">
      Loading...
    </div>
  ) : (
    <Table>
      <TableCaption>List of submissions</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Username</TableHead>
          <TableHead className="w-[100px]">Language</TableHead>
          <TableHead>STDIN</TableHead>
          <TableHead>Code</TableHead>
          <TableHead>STDOUT</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {submissions &&
          submissions.map((submission, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{submission.username}</TableCell>
                <TableCell>{submission.language}</TableCell>
                <TableCell>{submission.stdin}</TableCell>
                <TableCell>{submission.code}</TableCell>
                <TableCell>{submission.stdout}</TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};

export default SubmissionsTable;
