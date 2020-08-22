const renderFurnitures = (furnituresList, currentPage, itemsPerPage) => {
    const containerEl = document.querySelector('.furnitures-grid');
    let template;
    if (furnituresList.length) {
        template = furnituresList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((furniture) => `
        <a class="furniture-tile" href="#${furniture.id}">
            <div class="image-container">
                <img src="/assets/images/${furniture.image}" alt="image">
                <div class="stripe"></div>
            </div>
            <div class="name"><strong>${furniture.name}</strong></div>
            <div class="type-price">
                <span class="type"><strong>${furniture.type}</strong></span>
                <span class="price">$${furniture.price}</span>
            </div>
            <div class="ratings-cart">
                <div class="ratings">${[...Array(5).keys()].map((el) => ((el + 1 <= furniture.rating) ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>')).join(' ')}
                </div>
                <span class="cart"><i class="fa fa-cart-plus" aria-hidden="true"></i></span>
            </div>
        </a>`).join('');
    } else {
        template = '<h2 class="text-center">No furnitures found!</h2>';
    }
    containerEl.innerHTML = template;
};

const renderPagination = (totalPages, currentPage) => {
    const paginationContainer = document.querySelector('.pagination');
    if (totalPages) {
        let template = [...Array(totalPages).keys()].map((el) => `
            <span class="page-number" data-goto="${el + 1}">
                <input type="radio" id="${el + 1}" name="page" value="${el + 1}" class="page-radio-button" ${el + 1 === currentPage ? 'checked' : ''}>
                <label for="${el + 1}" class="page-label"><strong>${el + 1}</strong></label>
            </span>
        `).join('');
        template += `
            <span class="next-button">&gt;</span> 
        `;
        paginationContainer.innerHTML = template;
    } else {
        paginationContainer.innerHTML = '';
    }
};

const renderFurnituresListPage = () => {
    document.querySelector('main .container').innerHTML = `
        <div class="layout">
            <!-- FILTERS SECTION -->
            <div class="filters">
                <h4 class="title">FILTER BY</h4>
                <div class="filter-options">
                    <div class="filter-option">
                        <span>Collection</span>
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                    <div class="filter-option">
                        <span>Color</span>
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                    <div class="filter-option">
                        <span>Category</span>
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                    <div class="filter-option-price">
                        <span class="label">Price Range</span>
                        <input type="range" class="slider" id="price-slider" name="price-slider">
                        <div class="range-value">
                            <span>$1300</span>
                            <span>$10,000+</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- FURNITURES GRID SECTION -->
            <div class="furnitures-grid"></div>
        </div>
        <!-- PAGINATION -->
        <div class="pagination"></div>
    `;
};

const renderFurniturePage = (furnitureData) => {
    document.querySelector('main .container').innerHTML = `
        <div class="furniture-page">
            <div class="furniture-image">
                <img src="/assets/images/${furnitureData.image}" alt="image">
            </div>
            <div class="arrow">
                <i class="fas fa-arrow-right"></i>
            </div>
            <div class="furniture-details">
                <h4 class="type">${furnitureData.type}</h4>
                <h2 class="name">${furnitureData.name}</h2>
                <p class="description">${furnitureData.description}</p>
                <h4 class="ppu-text">Price per unit</h4>
                <div class="options">
                    <h1 class="price">$${furnitureData.price}</h1>
                    <span class="buy-now">Buy Now</span>
                    <span class="cart grey-text"><i class="fa fa-cart-plus" aria-hidden="true"></i></span>
                </div>
            </div>
        </div>
    `;
};

const showError = () => {
    document.querySelector('main .container').innerHTML = '<h2 class="text-center">Oops! Something went wrong.</h2>';
};

const showLoader = () => {
    document.querySelector('.loader-container').style.visibility = 'visible';
};

const hideLoader = () => {
    document.querySelector('.loader-container').style.visibility = 'hidden';
};

export default {
    renderFurnitures, renderPagination, renderFurnituresListPage, renderFurniturePage, showError, showLoader, hideLoader,
};
