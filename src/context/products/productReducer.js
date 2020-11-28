import  { LOAD_ITEMS } from '../types'


export default (state, action) => {
    switch(action.type) {
        case LOAD_ITEMS:
            return {
                ...state,
                products: action.payload
            }
       
            default: 
            return state
    }
}