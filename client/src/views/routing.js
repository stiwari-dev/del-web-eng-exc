const renderHomePage = () => {
    document.querySelector('.layout').innerHTML = `
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
    `;
};

const renderFurniturePage = () => {
    document.querySelector('.layout').innerHTML = `
        <div>Hello</div>
    `;
};

export default { renderHomePage, renderFurniturePage };
