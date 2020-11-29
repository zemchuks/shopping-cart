import  { LOAD_ITEMS } from '../types'


export const ProductReducer = (state, action) => {
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