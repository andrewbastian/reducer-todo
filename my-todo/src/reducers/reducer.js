export const todo = [
    {
        item: 'Learn about reducers',
        selectedDate: '2017-05-24T10:30',
        completed: false,
        id: 3892987589
    }
];


export const reducer = (state, action) => {
    console.log("Reducer State", state, "Reducer Action", action);
    switch (action.type){
        case "ADD_TODO":
            console.log("Reducer Case State", state);
            return [
                ...state,
                {
                    // payload for item and date can't be same.  Need to send object with 2 properties as payload
                    item: action.payload.item,
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
