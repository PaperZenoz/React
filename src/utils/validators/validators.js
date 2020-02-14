export const required = (value) => {
    if (value) return undefined;
    return 'Поле обязательно'
}

export const maxLenghtCreator = (maxLenght) => (value) =>{
    if (value.length > maxLenght) return `Максимальная длина - ${maxLenght} символов`;
    return undefined;
}

