export const loadState = () => {
    try {
        const data = localStorage.getItem('state');
        if (data === null) return undefined;
        return JSON.parse(data);

    } catch (e) {
        return undefined;
    }
};

// save data to local storage
export const saveState = data => {
    try {
        const newData = { user: data.user };
        const serializedData = JSON.stringify(newData);
        localStorage.setItem('state', serializedData);
    } catch (e) {
        console.log('saveState = ', e);
    }
};
