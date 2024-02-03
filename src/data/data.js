
var indexTree = 1;
const setIndexTree = () => {
    indexTree = (indexTree + 1) % 7;
}

export {indexTree, setIndexTree};