export function diff(values, initialValues) {
    const changed = Object.keys(values).filter((k) => (values[k] !== initialValues[k]));

    let changeValue = {};
    changed.forEach((k) => {
        changeValue[k] = values[k];
    });
    return changeValue;
}

export function reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
}

export function isArrayOrObject(val){
    return typeof val === "object" || Array.isArray(val)
}
