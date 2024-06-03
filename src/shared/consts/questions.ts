import {QuestionType} from "shared/types";

export const QUESTIONS: Array<QuestionType> = [
    {
        id: 1,
        text: "Как быстро вы получили ответ от клиентского сервиса RUTUBE?",
        isRequired: true,
        type: "choose",
        content: {
            options: ["Быстрее, чем ожидал", "Как и ожидал", "Медленнее, чем ожидал"]
        }
    },
    {
        id: 2,
        text: "Клиентский сервис RUTUBE помог в решении проблемы?",
        isRequired: true,
        type: "rate",
        content: {
            options: [0, 1, 2, 3, 4, 5]
        }
    },
    {
        id: 3,
        text: "Специалист RUTUBE хорошо изъяснялся и владел языком?",
        isRequired: true,
        type: "rate",
        content: {
            options: [0, 1, 2, 3, 4, 5]
        }
    },
    {
        id: 4,
        text: "Специалист RUTUBE был отзывчив?",
        isRequired: true,
        type: "rate",
        content: {
            options: [0, 1, 2, 3, 4, 5]
        }
    },
    {
        id: 5,
        text: "Специалист RUTUBE был компетентен?",
        isRequired: true,
        type: "rate",
        content: {
            options: [0, 1, 2, 3, 4, 5]
        }
    },
    {
        id: 6,
        text: "Какова вероятность того, что вы порекомендуете RUTUBE коллеге или другу?",
        isRequired: true,
        type: "rate",
        content: {
            options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }
]

// export const QUESTIONS_RATE: Array<IQuestions<"rate">> = [
//     {
//         id: 2,
//         text: "Клиентский сервис RUTUBE помог в решении проблемы?",
//         isRequired: true,
//         type: "rate",
//         content: {
//             options: [0, 1, 2, 3, 4, 5]
//         }
//     },
//     {
//         id: 3,
//         text: "Специалист RUTUBE хорошо изъяснялся и владел языком?",
//         isRequired: true,
//         type: "rate",
//         content: {
//             options: [0, 1, 2, 3, 4, 5]
//         }
//     },
//     {
//         id: 4,
//         text: "Специалист RUTUBE был отзывчив?",
//         isRequired: true,
//         type: "rate",
//         content: {
//             options: [0, 1, 2, 3, 4, 5]
//         }
//     },
//     {
//         id: 5,
//         text: "Специалист RUTUBE был компетентен?",
//         isRequired: true,
//         type: "rate",
//         content: {
//             options: [0, 1, 2, 3, 4, 5]
//         }
//     },
//     {
//         id: 6,
//         text: "Какова вероятность того, что вы порекомендуете RUTUBE коллеге или другу?",
//         isRequired: true,
//         type: "rate",
//         content: {
//             options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//         }
//     }
// ]
//
// export const QUESTIONS: Array<IQuestions<"choose"> | IQuestions<"rate">> = [
//     ...QUESTIONS_CHOOSE,
//     ...QUESTIONS_RATE
// ];