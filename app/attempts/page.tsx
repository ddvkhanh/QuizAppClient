"use client"

import { useEffect, useState } from "react";
import { apiRequest } from "utils/api";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export default function ResultsPage() {
  const [results, setResults] = useState<Result[]>([]);
  const timeZone = "Australia/Sydney";

    useEffect(() => {
      const fetchResults = async() => {
        try {
          const endpoint = "/results";
          const method = "GET";
          const response: Result[] = await apiRequest<Result[]>(endpoint, method);
          setResults(response);
        } catch (error: any) {
          console.error(error);
          alert("Unable to fetch results. Please try again.")
        }
        
      };
      fetchResults();
    },[])

    return (
        <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Quiz Results</h1>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r) => {
              const utcDate = new Date(r.takenAt);
              const sydneyDate = toZonedTime(utcDate, timeZone);
              return (
                <tr key={r.id}>
                  <td className="border border-gray-300 px-4 py-2">{format(sydneyDate, "dd-MM-yyyy HH:mm:ss a")}</td>
                  <td className="border border-gray-300 px-4 py-2">{r.score}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
}
