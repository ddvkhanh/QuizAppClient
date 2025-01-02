const routes = {
    home: "/",
    quizzes: {
        base: "/quizzes",
        create: "/quizzes/create",
        quiz: (id: string | number) => `/quizzes/${id}`,
        edit: (id: string | number) => `/quizzes/${id}/edit`,
        attempts: (id: string | number) => `/quizzes/${id}/attempts`,
    },
}

export default routes;