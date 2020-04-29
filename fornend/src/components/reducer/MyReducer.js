export default (state = [], action) => {
    switch (action.type) {
        case "login":
            return {
                ...state,
                login_email: action.login_email
            }

        case "logout":
            return {
                ...state,
                login_email: ""
            }
        case "updateValue":
            return {
                ...state,
                [action.name]: action.value
            }
        default:
            return state
    
    
    }
}