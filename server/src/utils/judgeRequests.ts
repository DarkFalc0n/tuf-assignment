import { Submission } from "../validation/submission.schema";
import { encode } from "./encoder";

export const languageCodeMap = {
  CPP: 54,
  JAVA: 62,
  JAVASCRIPT: 93,
  PYTHON: 71,
};

const headers = {
  "content-type": "application/json",
  "Content-Type": "application/json",
  "X-RapidAPI-Key": "0e9c219167msh1ec7243864454d5p1ffdf0jsnab1f3971a071",
  "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
};

export const getSubmissionRequest = (sub: Submission) => {
  return {
    method: "POST",
    url: "https://judge0-ce.p.rapidapi.com/submissions",
    params: {
      base64_encoded: "true",
      fields: "*",
    },
    headers: headers,
    data: {
      language_id: languageCodeMap[sub.language],
      source_code: encode(sub.code),
      stdin: encode(sub.stdin),
    },
  };
};

export const fetchSubmissionStatus = (token: string) => {
  return {
    method: "GET",
    url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
    params: {
      base64_encoded: "false",
      fields: "stdout,stderr,status,token",
    },
    headers: headers,
  };
};
