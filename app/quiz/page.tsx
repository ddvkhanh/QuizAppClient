"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { apiRequest } from "utils/api";

export default function QuizPage() {
    const router = useRouter();

    const [questions, setQuestions] = useState<Question[]>([]);
    const [isQuizStart, setQuizStart]  = useState(false);

    useEffect(() => {
      fetchQuestions();
    },[])

    const toggleQuizMode = () => {
        setQuizStart(true);
    }

    const fetchQuestions = async () => {
        try {
            const endpoint = "/questions";
            const method = "GET";
            const response: Question[] = await apiRequest<Question[]>(endpoint, method);
            setQuestions(response);
          } catch (error) {
            console.error("Error:", error);
            alert("Failed to fetch the questions. Please try again.");
          } 
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl p-6 bg-white text-center">
          <div className="mb-6">
          <h1 className="text-2xl font-bold text-center mb-4">Quiz</h1>
            <p className="text-center text-gray-600">
            Complete the questions below and submit.
            </p>
          </div>
          <div className="flex justify-center"> 
            {!isQuizStart ? (
                <button className="p-3 bg-teal-600 shadow-lg text-white rounded-full hover:bg-teal-700"
                    onClick = {toggleQuizMode}>
                Start Quiz
                </button>
                ) : 
                (<></>)}
            
          </div>
          <div className="pt-7">
            <ul className="space-y-4">
              {questions.map((question) => (
              <li key={question.id} className="p-4 border rounded">
                <p className="font-bold">{question.description}</p>
                <p className="text-sm text-gray-600">Type: {question.questionType}</p>

              </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    );
}
