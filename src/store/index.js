import { defineStore } from 'pinia'

export const useQuestionsStore = defineStore('questions', {
    state: () => ({
        questions: [
            {
                id: 1,
                title: 'Для чего вы используете Findmykids?',
                answer:
                    [
                        'Присматриваю за своим ребенком',
                        'Присматриваю за внуками/племянниками',
                        'Присматриваю за младшим братом/сестрой'
                    ],
                typeCheck: 'radio',
                isTextArea: true
            },
            {
                id: 2,
                title: 'Почему вы используете веб-версию Findmykids?',
                answer:
                    [
                        'Удобнее смотреть с компьютера',
                        'Телефон не всегда под рукой'
                    ],
                typeCheck: 'radio',
                isTextArea: true
            },
            {
                id: 3,
                title: 'Если бы вы могли внести любое изменение в Findmykids, что бы это было?',
                answer: [],
                typeCheck: 'free',                
                isTextArea: true
            }
        ],        
        onePage:
        {
            title: "Веб-версия Findmykids",
            description: 'Мы заметили, что вы активно пользуетесь веб-версией Findmykids помимо приложения на телефоне. Расскажите, что вам в ней нравится и как мы можем ее улучшить.Это поможет сделать Findmykids удобнее для вас.'
        },
        selectOption: 'one'
    }),
    // persist: {
    //     paths: ['questions'],
    // },
    getters: {
        getQuestions: state => state.questions,
        getQuestionById: state => id => state.questions.find(el => el.id === id),
        getDelTask: state => id => state.tasks.filter(el => el.id !== id),
        getOnePage: state => state.onePage,


        sortByReadyTask: state => st => st.toSorted((x, y) => x.isReady - y.isReady),
        sortByDeadLine: state => st => st.toSorted((x, y) => new Date(x.deadLine) - new Date(y.deadLine)),
        sortById: state => st => st.toSorted((x, y) => x.id - y.id),
        sortByPriority: state => st => st.toSorted((x, y) => y.priority - x.priority),
        sortBySortHandle: state => st => st.toSorted((x, y) => x.sortHandle - y.sortHandle),      

        
    },
    actions: {}
})

