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
                isTextArea: true,
                isActiv: false
            },
            {
                id: 2,
                title: 'Почему вы используете веб-версию Findmykids?',
                answer:
                    [
                        'Удобнее смотреть с компьютера',
                        'Телефон не всегда под рукой'
                    ],
                typeCheck: 'checkbox',
                isTextArea: true,
                isActiv: true
            },
            {
                id: 3,
                title: 'Если бы вы могли внести любое изменение в Findmykids, что бы это было?',
                answer: [],
                typeCheck: 'free',                
                isTextArea: true,
                isActiv: false
            }
        ],        
        onePage:
        {
            title: "Веб-версия Findmykids",
            description: 'Мы заметили, что вы активно пользуетесь веб-версией Findmykids помимо приложения на телефоне. Расскажите, что вам в ней нравится и как мы можем ее улучшить.Это поможет сделать Findmykids удобнее для вас.'
        },
    }),
    // persist: {
    //     paths: ['questions'],
    // },
    getters: {
        getQuestions: state => state.questions,
        getQuestionById: state => id => state.questions.find(el => el.id === id),
        getOnePage: state => state.onePage,

        getByActiv(state) {
            let st = state.questions
            return st = st.filter(el => el.isActiv === true)
        },
        getByNoActiv(state) {
            let st = state.questions
            return st = st.filter(el => el.isActiv === false)
        }
        
    },
    actions: {
        triggerActiv(id) {
            this.questions.forEach(el => el.isActiv = false)
            const q = this.getQuestionById(id)
            return q.isActiv = true
        },
    }
})

