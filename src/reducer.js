export function reducer(state, {type, payload}){
    switch(type){
        case 'HANDLE_BASKET_SHOW':
            return{
                ...state,
                isBasketShow: !state.isBasketShow
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }
        case 'ADD_TO_BASKET':
            const itemIndex = state.order.findIndex(orderItem => orderItem.mainId === payload.mainId);
            let newOrder = null;

            if(itemIndex<0){
                const newItem ={
                    ...payload,
                    quantity: 1
                }
                newOrder = [...state.order, newItem]
            } else{
                newOrder = state.order.map((orderItem, index) => {
                    if(index === itemIndex){
                        return{
                            ...orderItem,
                            quantity: orderItem.quantity+1
                        }
                    } else{
                        return orderItem;
                    }
                });
            }   
            return {
                ...state,
                order: newOrder,
                alertName: payload.displayName
            }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((product)=>product.mainId !== payload.id)
            }
        case 'INC_QUANTITY':
            return{
                ...state,
                order: state.order.map(orderItem => {
                    if(orderItem.mainId === payload.id){
                        const newQuantity = orderItem.quantity+1;
                        return{
                            ...orderItem,
                            quantity: newQuantity
                        }
                    } else {
                        return orderItem;
                    }
                })
            }
        case 'DEC_QUANTITY':
            let newQuantity = 0;
            const orderItems = state.order.map(orderItem => {
                if(orderItem.mainId === payload.id){
                    newQuantity = orderItem.quantity-1;
                    return{
                        ...orderItem,
                        quantity: newQuantity >= 0? newQuantity : 0
                    }
                } else {
                    return orderItem;
                }
            }) 
            return{
                ...state,
                order: newQuantity > 0? orderItems: state.order.filter((product)=>product.mainId !== payload.id)
            }
        case 'SET_PRODUCTS':
            return{
                ...state,
                products: payload || [],
                loading: false
            }
        default:
            return state;
    }
}