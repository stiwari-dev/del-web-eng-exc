const elements = {
    mainContainer: document.querySelector('main .container'),
    layout: document.querySelector('.layout'),
    filters: document.querySelector('.filters'),
    searchInput: document.querySelector('.search-part input'),
    furnituresGrid: document.querySelector('.furnitures-grid'),
    paginationContainer: document.querySelector('.pagination'),
};

const debounce = (func, delay = 1000) => {
    let timeout;
    return (...args) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

export default { elements, debounce };
