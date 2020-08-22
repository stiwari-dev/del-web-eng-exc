import Furnitures from './models/Furnitures';
import furnituresView from './views/furniture';
import utils from './utils';

/** GLOBAL STATE */
const state = {
    furnitures: null,
    itemsPerPage: 9,
    totalPages: 1,
    currentPage: 1,
};

/** GET FURNITURES DATA ONLOAD */
const init = async () => {
    state.furnitures = new Furnitures();
    await state.furnitures.getFurnituresData();
    state.totalPages = Math.ceil(state.furnitures.items.length / state.itemsPerPage);
};

/** HANDLE URL ROUTE HASH CHANGE */
const routeHandler = async () => {
    const furnitureId = window.location.hash.replace('#', '');
    try {
        if (furnitureId) {
            furnituresView.showLoader();
            await init();
            furnituresView.hideLoader();
            const furnitureData = state.furnitures.items.find((el) => el.id === furnitureId);
            furnituresView.renderFurniturePage(furnitureData);
        } else {
            furnituresView.renderFurnituresListPage();
            furnituresView.showLoader();
            await init();
            furnituresView.hideLoader();
            furnituresView.renderFurnitures(state.furnitures.items, state.currentPage, state.itemsPerPage);
            furnituresView.renderPagination(state.totalPages, state.currentPage);
        }
    } catch (err) {
        furnituresView.showError();
        furnituresView.hideLoader();
    }
};
['hashchange', 'load'].forEach((event) => window.addEventListener(event, routeHandler));

/** HANDLE FURNITURE SEARCH */
const inputSearchHandler = (event) => {
    const searchQuery = event.target.value;
    state.furnitures.filterFurnitures(searchQuery);
    state.totalPages = Math.ceil(state.furnitures.searchResults.length / state.itemsPerPage);
    state.currentPage = 1;
    furnituresView.renderFurnitures(state.furnitures.searchResults, state.currentPage, state.itemsPerPage);
    furnituresView.renderPagination(state.totalPages, state.currentPage);
};
document.querySelector('.search-part input').addEventListener('input', utils.debounce(inputSearchHandler, 500));

/** HANDLE PAGINATION */
const paginationHandler = (event) => {
    if (event.target.closest('.next-button')) {
        if (state.totalPages > state.currentPage) {
            state.currentPage += 1;
            furnituresView.renderFurnitures(state.furnitures.items, state.currentPage, state.itemsPerPage);
            furnituresView.renderPagination(state.totalPages, state.currentPage);
        }
    }
    if (event.target.closest('.page-number')) {
        const gotoPage = event.target.closest('.page-number').dataset.goto;
        state.currentPage = Number(gotoPage);
        if (state.furnitures.searchString) {
            furnituresView.renderFurnitures(state.furnitures.searchResults, state.currentPage, state.itemsPerPage);
        } else {
            furnituresView.renderFurnitures(state.furnitures.items, state.currentPage, state.itemsPerPage);
        }
        furnituresView.renderPagination(state.totalPages, state.currentPage);
    }
};
document.addEventListener('click', paginationHandler);
