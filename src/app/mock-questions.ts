import { Question,Option } from './welcome';

export const QUESTIONS: Question[] = [
    {
        id: 1, text: "Which is the largest country in the world by population?", options: [
            { id: 1, text: "India", isAnswer: false },
            { id: 2, text: "USA", isAnswer: false },
            { id: 3, text: "China", isAnswer: true },
            { id: 4, text: "Russia", isAnswer: false }
        ]
    },
    {
        id: 2, text: "When did second world war end?", options: [
            { id: 1, text: "1945", isAnswer: true },
            { id: 2, text: "1939", isAnswer: false},
            { id: 3, text: "1944", isAnswer: false },
            { id: 4, text: "1942", isAnswer: false }
        ]
    }
    ,
    {
        id: 3, text: "Which was first country to issue paper currency?", options: [
            { id: 1, text: "USA", isAnswer: false },
            { id: 2, text: "France", isAnswer: false},
            { id: 3, text: "Italy", isAnswer: false },
            { id: 4, text: "China", isAnswer: true }
        ]
    }
    ,
    {
        id: 4, text: "Which city hosted 1996 summer olympics?", options: [
            { id: 1, text: "Atlanta", isAnswer: true },
            { id: 2, text: "Sydney", isAnswer: false},
            { id: 3, text: "Athens", isAnswer: false },
            { id: 4, text: "Beijing", isAnswer: false }
        ]
    }
    ,
    {
        id: 2, text: "Who invented telephone?", options: [
            { id: 1, text: "Albert Einstein", isAnswer: false },
            { id: 2, text: " Alexander Graham Bell", isAnswer: true},
            { id: 3, text: "Isaac Newton", isAnswer: false },
            { id: 4, text: "Marie Curie", isAnswer: false }
        ]
    }
];