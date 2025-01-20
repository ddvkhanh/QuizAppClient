/* eslint-disable @next/next/no-img-element */
'use client'

import { useRouter } from "next/navigation";
import { useUserContext } from '../context/UserContext';
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import routes from "lib/routes";

export default function Home() {
  const router = useRouter();

  const { user, loading } = useUserContext();

  const goToQuiz = () => {
    router.push("/quiz");
  }

  const goToLoginPage = () => {
    router.push(routes.login);
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">

      {user ? (
        <div className="w-full max-w-3xl p-10 text-center">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-4">Welcome to QuizApp, {user.name}</h1>
            <p className="text-lg text-gray-600">Start exploring quizzes now!</p>
            <img
              src="https://c.files.bbci.co.uk/15E07/production/_112970698_qt.jpg"
              alt="Quiz Illustration"
              className="mt-4 w-full max-w-sm mx-auto rounded"
            />
          </div>
          <div className="flex justify-center">
            <button className="animate-pulse p-3 bg-teal-600 shadow-lg text-white rounded-full hover:bg-teal-700"
              onClick={goToQuiz}>
              <span className="px-2">Take Quiz Now</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-3xl p-10 text-center">
          <h1 className="text-3xl font-bold mb-4">Please log in to use Quiz App</h1>
          <button className="-mx-3 flex block text-white text-base font-semibold no-underline rounded-lg p-3 bg-teal-600 hover:bg-teal-700"
            onClick={goToLoginPage}>
            <ArrowLeftEndOnRectangleIcon aria-hidden="true" className="h-6 w-6" />
            Log In
          </button>
        </div>

      )}

    </div>
  );
}
