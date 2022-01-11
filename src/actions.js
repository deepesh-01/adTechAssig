import axios from 'axios';

export const getCountries = () => async(dispatch) => {
    try {
        dispatch({type:"LOAD"});
        const count = await axios.get(`https://restcountries.com/v3.1/region/asia`);
        const asianCountries = count.data;
        if(asianCountries){
            console.log("asian countries : ",asianCountries);
            dispatch({type:"GETCOUNTRIES", payload:asianCountries});
            return true;
        }
        else{
            dispatch({type:"ERROR"});
            return false;
        }
    }
    catch(err){
        console.log(err);
        dispatch({type:"ERROR"});
    }
    
}