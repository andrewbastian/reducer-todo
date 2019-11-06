export const todo = [
    {
        item: 'Learn about reducers',
        selectedDate: '2017-05-24T10:30',
        tags: 'school',
        completed: false,
        id: 3892987589
    },

];


export const reducer = (state, action) => {
    console.log("Reducer State", state, "Reducer Action", action);
    switch (action.type){
        case "ADD_TODO":
            console.log("Reducer Case State", state);
            return [
                ...state,
                {
                    item: action.payload.item,
                    tags: action.payload.tags,
                    selectedDate: action.payload.date,
                    id: Date.now(),
                    completed: false
                }
            ];
        case "TOGGLE_COMPLETED":
            return state.map(todo => {
                if (todo.id === action.payload){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            });
        case "CLEAR_COMPLETED":
            return state.filter(todo => !todo.completed);
        default:
            return state;
    }
};
