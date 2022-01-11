export default (initialState = {countries:null,load:false,error:false}, action) => {
    switch(action.type){
        case "LOAD" : 
            return {...initialState,load:true,error:false};
        case "GETCOUNTRIES" :
            return {...initialState,countries:action.payload,load:false,error:false}
        case "ERROR" : 
            return {...initialState,load:false,error:true};
        default :
            return {...initialState};
    }
}