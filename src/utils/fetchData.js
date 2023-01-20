export const exerciseOptions = {
   
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'X-RapidAPI-Key': 'c490307aedmsh84232ad3caf527ap148445jsn0c81191c522a',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      
}

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}