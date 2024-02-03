
var indexTree = 0;
const treeName = [
    "Baby Sprout",
    "Youthful Sprout",
    "Apprentice Sprout",
    "Tree in-training",
    "Junior Trunk",
    "Daddy Trunk",
    "Remarkable Tree"
]
const setIndexTree = () => {
    indexTree = (indexTree + 1) % 7;
}

export {indexTree, setIndexTree, treeName};