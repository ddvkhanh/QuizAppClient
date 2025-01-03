"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { apiRequest } from "utils/api";

interface Question {
    id: string;
    description: string;
    options: string[];
    correctAnswer: string;
    questionType: string;
}

export default function QuizCard({ questions }: { questions: Question[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<{ questionId: string, answer: string }[]>(
        questions.map((q) => ({ questionId: q.id, answer: "" }))
    );
    const router = useRouter();

    const handleAnswerChange = (answer: string) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentIndex] = { questionId: question.id, answer };
        setUserAnswers(updatedAnswers);
    }

    const handleMultipleAnswerChange = (option: string, checked: boolean) => {
        const currentAnswers = userAnswers[currentIndex]
            ? userAnswers[currentIndex].answer.split(",")
            : [];
        const updatedAnswers = checked
            ? [...currentAnswers, option]
            : currentAnswers.filter((ans) => ans !== option);
        const updatedUserAnswers = [...userAnswers];
        updatedUserAnswers[currentIndex] = { questionId: question.id, answer: updatedAnswers.join(",").replace(/^,/, "") };
        setUserAnswers(updatedUserAnswers);
    }

    const question = questions[currentIndex];

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex((index) => index + 1);
        }
    }

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((index) => index - 1);
        }
    }

    const handleSubmit = async () => {
        const endpoint = "/quiz";
        const method = "POST";
        const payload = {
            answers: userAnswers,
        }

        try {
            const response = await apiRequest<{ score: number }>(endpoint, method, payload);
            if (response) {
                alert("Submitted Successfully");
            }
            router.push("/quiz/score?score=${response.score}");
        } catch (error) {
            console.error(error);
            alert("Failed to submit the quiz. Please try again.");

        }
    }

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Question</h1>
            <p className="mb-6">{question.description}</p>
            {question.questionType === "single" ? (
                <div className="mb-6">
                    {question.options.map((option, index) => (
                        <label key={index} className="block">
                            <input
                                type="radio"
                                name={`question-${currentIndex}`}
                                value={option}
                                checked={userAnswers[currentIndex] === option}
                                onChange={() => handleAnswerChange(option)}
                                className="mr-2"
                            />
                            {option}
                        </label>
                    ))}
                </div>
            ) : (
                <div className="">
                    {question.options.map((option, index) => (
                        <label key={index} className="block">
                            <input
                                type="checkbox"
                                value={option}
                                checked={userAnswers[currentIndex]?.includes(option)}
                                onChange={(e) => handleMultipleAnswerChange(option, e.target.checked)}
                                className="mr-2" />
                        </label>
                    ))}
                </div>
            )}

            {currentIndex < questions.length - 1 ? (
                <div className="flex justify-between gap-5">
                    <button
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        className="px-4 py-2 rounded text-white bg-teal-600 hover:bg-teal-700"
                    >Previous</button>
                    <button
                        onClick={handleNext}
                        className="px-4 py-2 rounded text-white bg-teal-600 hover:bg-teal-700"
                    >Next
                    </button>
                </div>
            ) : (
                <button onClick={handleSubmit} className="px-4 py-2 rounded bg-teal-600 hover:bg-teal-700 text-white">
                    Submit
                </button>
            )}
        </div>
    )
}