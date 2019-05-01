export const removeEmptyElements = (array) =>{
    return array.reduce( (previous, el) => {
        if(el !== ""){
            previous.push(el);
        }
        return previous
    }, [])
}

export const removeDuplicateElementes = (array) => {
    return array.reduce((previous, el)=>{
        let found = previous.find( (element) => {
            return element === el
        })
        if(!found){
            previous.push(el);
        }
        return previous;
    }, [])
}

export const getSlug = (url) => {
    const parts = url.split('/');
    const removeBlanks = removeEmptyElements(parts);
    const removeDuplicates = removeDuplicateElementes(removeBlanks);
    let part1, part2, route;
    [part1, part2, ...route] = removeDuplicates;
    let stringRoute = '/' + route.join("/");
    
    if(stringRoute === '/'){
        stringRoute = '/home';
    }
    return stringRoute;
}