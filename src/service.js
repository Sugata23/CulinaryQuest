const queryString = {
    app_id: process.env.REACT_APP_APP_ID,
    app_key: process.env.REACT_APP_APP_KEY
} 

// const cors = require("cors");
// RecipeLists.use(
//     cors({
//     origin:"http://localhost:3000",
//     })
// );

//https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=c3277a83&app_key=25f71e46d56c5794d917f986f75d5b75

export const fetchData = async (defaultQuery) => {
    const {app_id,app_key} = queryString;
    try{
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`);
        const response = await data.json();
        return response;
    }
    catch(e) {
        console.log(e,'something went wrong')
        return e
    }
}