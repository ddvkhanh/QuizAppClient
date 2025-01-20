const routes = {
    home: "/",
    quiz: {
        base: "/quiz",
        submit:"/quiz/submit",
        score: "quiz/score"
    },
    questions: {
        base: "/questions",
        create: "/questions/create",
        edit: (id: string | number) => `/questions/${id}`,    
    },
    attempts: {
        base: "/attempts",
    },
    login: "/auth/login",
    logout: "/auth/logout",
    userProfile: "/auth/profile"


}

export default routes;
