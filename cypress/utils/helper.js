/*На данном шаге необходимо определить кастомные реализации для проверок:
    isSuperset(set, subset)
    union(setA, setB)
    intersection(setA, setB)
    difference(setA, setB)*/

export const isSuperSet = (set, subSet) => {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

export const union = (setA, setB) => {
    let _union = new Set(setA);
    for (let elem of setB) {
        _union.add(elem);
    }
    return _union;
}

export const intersection = (setA, setB) => {
    let _intersection = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

export const difference = (setA, setB) => {
    let _difference = new Set(setA);
    for (let elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
}


