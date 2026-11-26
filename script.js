
"use strict";

/* =========================================================
   ANVARS — FOOD EXPERIENCE
   MAIN JAVASCRIPT
   ========================================================= */

/* 01. CONFIGURATION */

const ANVARS_CONFIG = {
    currency: "сум",
    promoCode: "ANVARS99",
    promoDiscount: 99,
    storage: {
        products: "anvars_v3_products",
        cart: "anvars_v3_cart",
        favorites: "anvars_v3_favorites",
        orders: "anvars_v3_orders"
    }
};

/* 02. DEFAULT PRODUCTS */

const DEFAULT_PRODUCTS = [
    {
        id: "burger-001",
        name: "ANVARS Classic",
        category: "burgers",
        price: 39000,
        description: "Сочная котлета, свежие овощи и фирменный соус.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700",
        badge: "Хит",
        available: true
    },
    {
        id: "burger-002",
        name: "Double Cheese",
        category: "burgers",
        price: 49000,
        description: "Две котлеты, двойной сыр и насыщенный вкус.",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=700",
        badge: "Популярное",
        available: true
    },
    {
        id: "burger-003",
        name: "Royal Burger",
        category: "burgers",
        price: 55000,
        description: "Большой бургер с сочной котлетой и овощами.",
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=700",
        badge: "Premium",
        available: true
    },
    {
        id: "burger-004",
        name: "Chicken Burger",
        category: "burgers",
        price: 35000,
        description: "Хрустящая курица, салат и нежный соус.",
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=700",
        badge: "",
        available: true
    },
    {
        id: "lavash-001",
        name: "ANVARS Лаваш",
        category: "lavash",
        price: 35000,
        description: "Тонкий лаваш с мясом, овощами и соусом.",
        image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=700",
        badge: "Хит",
        available: true
    },
    {
        id: "lavash-002",
        name: "Сырный лаваш",
        category: "lavash",
        price: 42000,
        description: "Горячий лаваш с расплавленным сыром.",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=700",
        badge: "Сырный",
        available: true
    },
    {
        id: "pizza-001",
        name: "Pizza Margherita",
        category: "pizza",
        price: 65000,
        description: "Томатный соус, сыр и ароматный базилик.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700",
        badge: "",
        available: true
    },
    {
        id: "pizza-002",
        name: "Pizza Pepperoni",
        category: "pizza",
        price: 79000,
        description: "Пепперони, сыр и томатный соус.",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=700",
        badge: "Популярное",
        available: true
    },
    {
        id: "pizza-003",
        name: "Pizza Special",
        category: "pizza",
        price: 89000,
        description: "Фирменная пицца с большим количеством начинки.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700",
        badge: "Special",
        available: true
    },
    {
        id: "snack-001",
        name: "French Fries",
        category: "snacks",
        price: 18000,
        description: "Золотистый картофель фри с солью.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700",
        badge: "",
        available: true
    },
    {
        id: "snack-002",
        name: "Chicken Nuggets",
        category: "snacks",
        price: 29000,
        description: "Хрустящие куриные наггетсы.",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=700",
        badge: "",
        available: true
    },
    {
        id: "snack-003",
        name: "Onion Rings",
        category: "snacks",
        price: 22000,
        description: "Хрустящие луковые кольца.",
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=700",
        badge: "",
        available: true
    },
    {
        id: "drink-001",
        name: "Cola",
        category: "drinks",
        price: 12000,
        description: "Освежающий холодный напиток.",
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=700",
        badge: "",
        available: true
    },
    {
        id: "drink-002",
        name: "Orange Juice",
        category: "drinks",
        price: 16000,
        description: "Апельсиновый сок.",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=700",
        badge: "",
        available: true
    }
];

/* 03. CATEGORIES */

const DEFAULT_CATEGORIES = [
    { id: "all", name: "Всё меню" },
    { id: "burgers", name: "Бургеры" },
    { id: "lavash", name: "Лаваш" },
    { id: "pizza", name: "Пицца" },
    { id: "snacks", name: "Закуски" },
    { id: "drinks", name: "Напитки" }
];

/* 04. INGREDIENTS AND EXTRAS */

const DEFAULT_CUSTOMIZATIONS = {
    burgers: {
        extras: [
            { id: "cheese", name: "Дополнительный сыр", price: 5000 },
            { id: "meat", name: "Дополнительное мясо", price: 10000 },
            { id: "sauce", name: "Фирменный соус", price: 3000 },
            { id: "jalapeno", name: "Халапеньо", price: 4000 },
            { id: "mushrooms", name: "Грибы", price: 5000 }
        ],
        removable: [
            "Лук",
            "Помидоры",
            "Огурцы",
            "Салат"
        ]
    },
    lavash: {
        extras: [
            { id: "cheese", name: "Дополнительный сыр", price: 5000 },
            { id: "meat", name: "Дополнительное мясо", price: 10000 },
            { id: "sauce", name: "Фирменный соус", price: 3000 },
            { id: "jalapeno", name: "Халапеньо", price: 4000 },
            { id: "mushrooms", name: "Грибы", price: 5000 }
        ],
        removable: [
            "Лук",
            "Помидоры",
            "Огурцы"
        ]
    },
    pizza: {
        extras: [
            { id: "cheese", name: "Дополнительный сыр", price: 8000 },
            { id: "mushrooms", name: "Грибы", price: 6000 },
            { id: "pepperoni", name: "Пепперони", price: 9000 },
            { id: "olives", name: "Оливки", price: 4000 }
        ],
        removable: [
            "Лук",
            "Оливки",
            "Перец"
        ]
    },
    snacks: {
        extras: [
            { id: "cheese-sauce", name: "Сырный соус", price: 5000 },
            { id: "spicy", name: "Острая приправа", price: 2000 }
        ],
        removable: []
    },
    drinks: {
        extras: [],
        removable: []
    }
};

/* 05. STORAGE */

const Storage = {
    get(key, fallback) {
        try {
            const value = localStorage.getItem(key);

            if (value === null) {
                return fallback;
            }

            return JSON.parse(value);
        } catch (error) {
            console.error("ANVARS storage read error:", error);
            return fallback;
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error("ANVARS storage write error:", error);
            showToast("Не удалось сохранить данные. Проверь свободное место браузера.", "error");
            return false;
        }
    }
};

/* 06. APPLICATION STATE */

const App = {
    products: [],
    categories: DEFAULT_CATEGORIES,
    cart: [],
    favorites: [],
    orders: [],
    activeCategory: "all",
    search: "",
    sort: "default",
    currentProduct: null,
    currentPromo: null,
    customizations: DEFAULT_CUSTOMIZATIONS
};

/* 07. HELPERS */

function formatPrice(value) {
    const number = Number(value) || 0;

    return new Intl.NumberFormat("ru-RU").format(number)
        + " " + ANVARS_CONFIG.currency;
}

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[character]);
}

function makeId(prefix = "anvars") {
    return prefix + "-" +
        Date.now().toString(36) + "-" +
        Math.random().toString(36).slice(2, 9);
}

function getElement(id) {
    return document.getElementById(id);
}

function getProduct(productId) {
    return App.products.find(product => product.id === productId);
}

function showToast(message, type = "success") {
    const container = getElement("toastContainer");

    if (!container) {
        console.log(message);
        return;
    }

    const toast = document.createElement("div");
    toast.className = "toast " + type;
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3500);
}

/* 08. INITIALIZE STORAGE */

function initializeStorage() {
    const savedProducts = Storage.get(
        ANVARS_CONFIG.storage.products,
        null
    );

    App.products = Array.isArray(savedProducts)
        ? savedProducts
        : DEFAULT_PRODUCTS.map(product => ({ ...product }));

    if (!savedProducts) {
        Storage.set(ANVARS_CONFIG.storage.products, App.products);
    }

    App.cart = Storage.get(ANVARS_CONFIG.storage.cart, []);
    App.favorites = Storage.get(ANVARS_CONFIG.storage.favorites, []);
    App.orders = Storage.get(ANVARS_CONFIG.storage.orders, []);

    if (!Array.isArray(App.cart)) App.cart = [];
    if (!Array.isArray(App.favorites)) App.favorites = [];
    if (!Array.isArray(App.orders)) App.orders = [];

    App.cart = App.cart.filter(item =>
        item &&
        typeof item.productId === "string" &&
        Number.isSafeInteger(Number(item.quantity)) &&
        Number(item.quantity) > 0
    );

    App.products = App.products.filter(product =>
        product &&
        typeof product.id === "string" &&
        typeof product.name === "string" &&
        Number.isFinite(Number(product.price))
    );

    App.favorites = App.favorites.filter(id =>
        typeof id === "string"
    );

    updateCartCount();
    updateFavoritesCount();
}

/* 09. CATEGORY RENDERING */

function renderCategories() {
    const container = getElement("categoryFilters");
    if (!container) return;

    container.innerHTML = App.categories.map(category => `
        <button
            type="button"
            class="category-button ${App.activeCategory === category.id ? "active" : ""}"
            data-category="${escapeHTML(category.id)}"
        >
            ${escapeHTML(category.name)}
        </button>
    `).join("");
}

/* 10. PRODUCT FILTERING */

function getVisibleProducts() {
    let products = [...App.products];

    if (App.activeCategory !== "all") {
        products = products.filter(product =>
            product.category === App.activeCategory
        );
    }

    if (App.search.trim()) {
        const query = App.search.toLowerCase().trim();

        products = products.filter(product => {
            const name = String(product.name || "").toLowerCase();
            const description = String(product.description || "").toLowerCase();

            return name.includes(query) || description.includes(query);
        });
    }

    if (App.sort === "price-asc") {
        products.sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (App.sort === "price-desc") {
        products.sort((a, b) => Number(b.price) - Number(a.price));
    }

    if (App.sort === "name") {
        products.sort((a, b) =>
            String(a.name).localeCompare(String(b.name), "ru")
        );
    }

    return products;
}

/* 11. PRODUCT CARD */

function createProductCard(product) {
    const favorite = App.favorites.includes(product.id);

    return `
        <article class="product-card" data-product-id="${escapeHTML(product.id)}">

            <div class="product-image">
                <img
                    src="${escapeHTML(product.image || "")}"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy"
                    onerror="this.src='https://placehold.co/700x500/252520/D6AD62?text=ANVARS'"
                >

                ${product.badge ? `
                    <span class="product-badge">
                        ${escapeHTML(product.badge)}
                    </span>
                ` : ""}

                <button
                    type="button"
                    class="product-favorite ${favorite ? "active" : ""}"
                    data-action="favorite"
                    data-id="${escapeHTML(product.id)}"
                    aria-label="Добавить в избранное"
                >
                    ${favorite ? "♥" : "♡"}
                </button>
            </div>

            <div class="product-info">
                <h3>${escapeHTML(product.name)}</h3>

                <p class="product-description">
                    ${escapeHTML(product.description || "")}
                </p>

                <div class="product-bottom">
                    <span class="product-price">
                        ${formatPrice(product.price)}
                    </span>

                    <button
                        type="button"
                        class="product-add"
                        data-action="customize"
                        data-id="${escapeHTML(product.id)}"
                        ${product.available === false ? "disabled" : ""}
                    >
                        ${product.available === false ? "Нет в наличии" : "Выбрать"}
                    </button>
                </div>
            </div>

        </article>
    `;
}

/* 12. RENDER PRODUCTS */

function renderProducts() {
    const container = getElement("productsGrid");
    const empty = getElement("emptyProducts");

    if (!container) return;

    const products = getVisibleProducts();

    container.innerHTML = products
        .map(createProductCard)
        .join("");

    if (empty) {
        empty.hidden = products.length > 0;
    }
}

function renderCatalog() {
    renderCategories();
    renderProducts();
}

/* 13. CUSTOMIZATION SETTINGS */

function getProductCustomization(product) {
    if (!product) {
        return { extras: [], removable: [] };
    }

    return App.customizations[product.category] || {
        extras: [],
        removable: []
    };
}

/* 14. OPEN CUSTOMIZATION */

function openCustomization(productId) {
    const product = getProduct(productId);

    if (!product) {
        showToast("Товар не найден.", "error");
        return;
    }

    if (product.available === false) {
        showToast("Этот товар сейчас недоступен.", "error");
        return;
    }

    App.currentProduct = product;

    const settings = getProductCustomization(product);

    const extrasHTML = settings.extras.length
        ? settings.extras.map(extra => `
            <label class="custom-option">
                <label>
                    <input
                        type="checkbox"
                        class="extra-checkbox"
                        data-extra-id="${escapeHTML(extra.id)}"
                        data-extra-price="${Number(extra.price)}"
                    >
                    ${escapeHTML(extra.name)}
                </label>
                <span>+${formatPrice(extra.price)}</span>
            </label>
        `).join("")
        : "<p>Для этого товара нет дополнительных ингредиентов.</p>";

    const removableHTML = settings.removable.length
        ? settings.removable.map((ingredient, index) => `
            <label class="custom-option">
                <label>
                    <input
                        type="checkbox"
                        class="remove-checkbox"
                        value="${escapeHTML(ingredient)}"
                    >
                    Без ${escapeHTML(ingredient.toLowerCase())}
                </label>
            </label>
        `).join("")
        : "";

    const html = `
        <div class="modal-overlay" data-overlay-close="true">
            <div class="modal" role="dialog" aria-modal="true" aria-label="Настройка блюда">

                <div class="modal-header">
                    <h2>Настрой своё блюдо</h2>
                    <button type="button" class="modal-close" data-action="close-modal">×</button>
                </div>

                <div class="modal-body">

                    <img
                        class="modal-product-image"
                        src="${escapeHTML(product.image || "")}"
                        alt="${escapeHTML(product.name)}"
                        onerror="this.src='https://placehold.co/700x500/252520/D6AD62?text=ANVARS'"
                    >

                    <h3>${escapeHTML(product.name)}</h3>
                    <p>${escapeHTML(product.description || "")}</p>

                    <div class="custom-options">
                        <h3>Добавить ингредиенты</h3>
                        ${extrasHTML}
                    </div>

                    ${removableHTML ? `
                        <div class="custom-options">
                            <h3>Убрать ингредиенты</h3>
                            ${removableHTML}
                        </div>
                    ` : ""}

                    <div class="form-group">
                        <label for="customProductNote">Комментарий к блюду</label>
                        <textarea
                            id="customProductNote"
                            class="custom-note"
                            placeholder="Например: не добавлять острый соус..."
                        ></textarea>
                    </div>

                    <div class="modal-total">
                        <span>Стоимость</span>
                        <strong id="customProductPrice">
                            ${formatPrice(product.price)}
                        </strong>
                    </div>

                    <button
                        type="button"
                        class="modal-action"
                        id="addCustomizedProduct"
                    >
                        Добавить в корзину
                    </button>

                </div>
            </div>
        </div>
    `;

    const root = getElement("modalRoot");
    if (!root) return;

    root.innerHTML = html;
    document.body.classList.add("modal-open");

    root.querySelectorAll(
        ".extra-checkbox, .remove-checkbox"
    ).forEach(input => {
        input.addEventListener("change", updateCustomizationPrice);
    });
}

/* 15. CALCULATE CUSTOMIZATION PRICE */

function getCustomizationSelection() {
    const root = getElement("modalRoot");
    const product = App.currentProduct;

    if (!root || !product) {
        return {
            extras: [],
            removed: [],
            note: "",
            unitPrice: 0
        };
    }

    const settings = getProductCustomization(product);

    const selectedIds = [
        ...root.querySelectorAll(".extra-checkbox:checked")
    ].map(input => input.dataset.extraId);

    const extras = settings.extras.filter(extra =>
        selectedIds.includes(extra.id)
    );

    const removed = [
        ...root.querySelectorAll(".remove-checkbox:checked")
    ].map(input => input.value);

    const extraPrice = extras.reduce(
        (sum, extra) => sum + Number(extra.price),
        0
    );

    const note = getElement("customProductNote")?.value.trim() || "";

    return {
        extras,
        removed,
        note,
        unitPrice: Number(product.price) + extraPrice
    };
}

function updateCustomizationPrice() {
    const product = App.currentProduct;
    const output = getElement("customProductPrice");

    if (!product || !output) return;

    const selection = getCustomizationSelection();
    output.textContent = formatPrice(selection.unitPrice);
}

/* 16. ADD CUSTOMIZED PRODUCT */

function addCustomizedToCart() {
    const product = App.currentProduct;

    if (!product) return;

    const selection = getCustomizationSelection();

    const item = {
        lineId: makeId("line"),
        productId: product.id,
        name: product.name,
        image: product.image,
        basePrice: Number(product.price),
        unitPrice: selection.unitPrice,
        quantity: 1,
        extras: selection.extras.map(extra => ({
            id: extra.id,
            name: extra.name,
            price: Number(extra.price)
        })),
        removed: selection.removed,
        note: selection.note
    };

    App.cart.push(item);

    if (!saveCart()) {
        App.cart.pop();
        return;
    }

    closeModal();
    updateCartCount();

    showToast("Добавлено в корзину!");
}

/* 17. CART STORAGE */

function saveCart() {
    return Storage.set(
        ANVARS_CONFIG.storage.cart,
        App.cart
    );
}

function getCartCount() {
    return App.cart.reduce(
        (sum, item) => sum + Number(item.quantity || 0),
        0
    );
}

function getCartSubtotal() {
    return App.cart.reduce(
        (sum, item) =>
            sum + Number(item.unitPrice) * Number(item.quantity),
        0
    );
}

function getPromoDiscount(subtotal = getCartSubtotal()) {
    if (!App.currentPromo) return 0;

    return Math.floor(
        subtotal * ANVARS_CONFIG.promoDiscount / 100
    );
}

function getCartTotal() {
    return Math.max(
        0,
        getCartSubtotal() - getPromoDiscount()
    );
}

function updateCartCount() {
    const counter = getElement("cartCount");

    if (counter) {
        counter.textContent = getCartCount().toLocaleString("ru-RU");
    }
}

function updateFavoritesCount() {
    const counter = getElement("favoritesCount");

    if (counter) {
        counter.textContent = App.favorites.length.toLocaleString("ru-RU");
    }
}

/* 18. CHANGE QUANTITY — NO 99 LIMIT */

function changeQuantity(lineId, change) {
    const item = App.cart.find(
        cartItem => cartItem.lineId === lineId
    );

    if (!item) return;

    const nextQuantity =
        Number(item.quantity) + Number(change);

    if (!Number.isSafeInteger(nextQuantity)) {
        showToast("Количество слишком велико для обработки.", "error");
        return;
    }

    if (nextQuantity <= 0) {
        removeFromCart(lineId);
        return;
    }

    item.quantity = nextQuantity;

    if (!saveCart()) return;

    renderCart();
    updateCartCount();
}

function removeFromCart(lineId) {
    App.cart = App.cart.filter(
        item => item.lineId !== lineId
    );

    if (App.cart.length === 0) {
        App.currentPromo = null;
    }

    if (!saveCart()) return;

    renderCart();
    updateCartCount();

    showToast("Товар удалён из корзины.");
}

/* 19. CART ITEM HTML */

function createCartItem(item) {
    const extrasText = (item.extras || [])
        .map(extra => extra.name)
        .join(", ");

    const removedText = (item.removed || [])
        .join(", ");

    const details = [
        extrasText ? "Добавлено: " + extrasText : "",
        removedText ? "Без: " + removedText : "",
        item.note ? "Комментарий: " + item.note : ""
    ].filter(Boolean).join(" · ");

    return `
        <article class="cart-item">

            <img
                src="${escapeHTML(item.image || "")}"
                alt="${escapeHTML(item.name)}"
                onerror="this.src='https://placehold.co/200x200/252520/D6AD62?text=ANVARS'"
            >

            <div class="cart-item-info">

                <h3>${escapeHTML(item.name)}</h3>

                ${details ? `
                    <p>${escapeHTML(details)}</p>
                ` : ""}

                <div class="cart-item-actions">

                    <div class="cart-quantity">
                        <button
                            type="button"
                            data-action="quantity"
                            data-id="${escapeHTML(item.lineId)}"
                            data-change="-1"
                            aria-label="Уменьшить количество"
                        >−</button>

                        <span>${Number(item.quantity).toLocaleString("ru-RU")}</span>

                        <button
                            type="button"
                            data-action="quantity"
                            data-id="${escapeHTML(item.lineId)}"
                            data-change="1"
                            aria-label="Увеличить количество"
                        >+</button>
                    </div>

                    <span class="cart-item-price">
                        ${formatPrice(Number(item.unitPrice) * Number(item.quantity))}
                    </span>

                    <button
                        type="button"
                        class="remove-item"
                        data-action="remove-item"
                        data-id="${escapeHTML(item.lineId)}"
                    >
                        Удалить
                    </button>

                </div>
            </div>
        </article>
    `;
}

/* 20. CART MODAL */

function renderCart() {
    const root = getElement("modalRoot");
    if (!root) return;

    const subtotal = getCartSubtotal();
    const discount = getPromoDiscount(subtotal);
    const total = getCartTotal();

    const itemsHTML = App.cart.length
        ? App.cart.map(createCartItem).join("")
        : `
            <div class="empty-state">
                <span>🛒</span>
                <h3>Корзина пока пуста</h3>
                <p>Выбери что-нибудь вкусное в нашем меню.</p>
            </div>
        `;

    root.innerHTML = `
        <div class="modal-overlay" data-overlay-close="true">
            <div class="modal" role="dialog" aria-modal="true" aria-label="Корзина">

                <div class="modal-header">
                    <h2>Твоя корзина</h2>
                    <button type="button" class="modal-close" data-action="close-modal">×</button>
                </div>

                <div class="modal-body">

                    <div class="cart-items">
                        ${itemsHTML}
                    </div>

                    ${App.cart.length ? `
                        <div class="promo-input-row">
                            <input
                                id="promoInput"
                                type="text"
                                placeholder="Введи промокод"
                                autocomplete="off"
                                value="${App.currentPromo ? ANVARS_CONFIG.promoCode : ""}"
                            >
                            <button type="button" data-action="apply-promo">
                                Применить
                            </button>
                        </div>

                        <div class="promo-message ${App.currentPromo ? "" : "error"}" id="promoMessage">
                            ${App.currentPromo
                                ? "Промокод применён: скидка 99%."
                                : "Доступен промокод ANVARS99."}
                        </div>

                        <div class="cart-summary">

                            <div class="cart-summary-row">
                                <span>Товары</span>
                                <strong>${formatPrice(subtotal)}</strong>
                            </div>

                            <div class="cart-summary-row">
                                <span>Скидка</span>
                                <strong>−${formatPrice(discount)}</strong>
                            </div>

                            <div class="cart-summary-row total">
                                <span>Итого</span>
                                <strong>${formatPrice(total)}</strong>
                            </div>

                            <button
                                type="button"
                                class="form-submit"
                                data-action="checkout"
                            >
                                Оформить заказ
                            </button>

                        </div>
                    ` : ""}
                </div>
            </div>
        </div>
    `;

    document.body.classList.add("modal-open");
}

/* 21. APPLY PROMO CODE */

function applyPromoCode() {
    const input = getElement("promoInput");
    const message = getElement("promoMessage");

    if (!input || !message) return;

    const code = input.value.trim().toUpperCase();

    if (!code) {
        message.textContent = "Введи промокод.";
        message.classList.add("error");
        return;
    }

    if (code !== ANVARS_CONFIG.promoCode) {
        App.currentPromo = null;
        message.textContent = "Такого промокода нет.";
        message.classList.add("error");
        return;
    }

    if (App.cart.length === 0) {
        message.textContent = "Сначала добавь товары в корзину.";
        message.classList.add("error");
        return;
    }

    App.currentPromo = code;

    showToast("Скидка 99% применена!");
    renderCart();
}

/* 22. CHECKOUT FORM */

function renderCheckout() {
    if (App.cart.length === 0) {
        showToast("Сначала добавь товары в корзину.", "error");
        return;
    }

    const root = getElement("modalRoot");
    if (!root) return;

    const subtotal = getCartSubtotal();
    const discount = getPromoDiscount(subtotal);
    const total = getCartTotal();

    root.innerHTML = `
        <div class="modal-overlay" data-overlay-close="true">
            <div class="modal" role="dialog" aria-modal="true" aria-label="Оформление заказа">

                <div class="modal-header">
                    <h2>Оформление заказа</h2>
                    <button type="button" class="modal-close" data-action="close-modal">×</button>
                </div>

                <div class="modal-body">

                    <div class="cart-summary">
                        <div class="cart-summary-row">
                            <span>Сумма товаров</span>
                            <strong>${formatPrice(subtotal)}</strong>
                        </div>

                        <div class="cart-summary-row">
                            <span>Скидка</span>
                            <strong>−${formatPrice(discount)}</strong>
                        </div>

                        <div class="cart-summary-row total">
                            <span>К оплате</span>
                            <strong>${formatPrice(total)}</strong>
                        </div>
                    </div>

                    <form class="checkout-form" id="checkoutForm">

                        <div class="form-group">
                            <label for="customerName">Твоё имя *</label>
                            <input
                                id="customerName"
                                name="customerName"
                                type="text"
                                minlength="2"
                                maxlength="80"
                                placeholder="Например, Анвар"
                                autocomplete="name"
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label for="customerPhone">Номер телефона *</label>
                            <input
                                id="customerPhone"
                                name="customerPhone"
                                type="tel"
                                maxlength="25"
                                placeholder="+998 90 123 45 67"
                                autocomplete="tel"
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label for="customerAddress">Адрес доставки *</label>
                            <input
                                id="customerAddress"
                                name="customerAddress"
                                type="text"
                                minlength="5"
                                maxlength="250"
                                placeholder="Улица, дом, квартира"
                                autocomplete="street-address"
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label for="customerPayment">Способ оплаты</label>
                            <select id="customerPayment" name="payment">
                                <option value="Наличными">Наличными</option>
                                <option value="Картой при получении">Картой при получении</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="customerComment">Комментарий к заказу</label>
                            <textarea
                                id="customerComment"
                                name="comment"
                                maxlength="500"
                                placeholder="Дополнительные пожелания..."
                            ></textarea>
                        </div>

                        <button type="submit" class="form-submit" id="submitOrderButton">
                            Подтвердить заказ · ${formatPrice(total)}
                        </button>

                    </form>

                </div>
            </div>
        </div>
    `;

    document.body.classList.add("modal-open");

    const form = getElement("checkoutForm");

    if (form) {
        form.addEventListener("submit", handleCheckoutSubmit);
    }
}

/* 23. CREATE ORDER */

function createOrder(customer) {
    if (!App.cart.length) {
        showToast("Корзина пуста.", "error");
        return false;
    }

    const subtotal = getCartSubtotal();
    const discount = getPromoDiscount(subtotal);
    const total = getCartTotal();

    const order = {
        id: makeId("order"),
        number: "ANV-" + Date.now().toString().slice(-8),
        customer: {
            name: customer.name,
            phone: customer.phone,
            address: customer.address
        },
        payment: customer.payment,
        comment: customer.comment,
        items: App.cart.map(item => ({
            lineId: item.lineId,
            productId: item.productId,
            name: item.name,
            image: item.image,
            basePrice: Number(item.basePrice),
            unitPrice: Number(item.unitPrice),
            quantity: Number(item.quantity),
            extras: item.extras || [],
            removed: item.removed || [],
            note: item.note || ""
        })),
        subtotal,
        promoCode: App.currentPromo || null,
        discount,
        total,
        status: "pending",
        createdAt: new Date().toISOString()
    };

    const updatedOrders = [...App.orders, order];

    if (!Storage.set(ANVARS_CONFIG.storage.orders, updatedOrders)) {
        showToast("Не удалось сохранить заказ. Попробуй ещё раз.", "error");
        return false;
    }

    App.orders = updatedOrders;
    App.cart = [];
    App.currentPromo = null;

    if (!saveCart()) {
        showToast("Заказ сохранён, но корзину не удалось очистить.", "error");
    }

    updateCartCount();

    return order;
}

/* 24. SUBMIT CHECKOUT */

function handleCheckoutSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const customer = {
        name: getElement("customerName").value.trim(),
        phone: getElement("customerPhone").value.trim(),
        address: getElement("customerAddress").value.trim(),
        payment: getElement("customerPayment").value,
        comment: getElement("customerComment").value.trim()
    };

    const phoneDigits = customer.phone.replace(/\D/g, "");

    if (customer.name.length < 2) {
        showToast("Введи корректное имя.", "error");
        return;
    }

    if (phoneDigits.length < 9) {
        showToast("Проверь номер телефона.", "error");
        return;
    }

    if (customer.address.length < 5) {
        showToast("Введи полный адрес доставки.", "error");
        return;
    }

    const submitButton = getElement("submitOrderButton");

    if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Сохраняем заказ...";
    }

    const order = createOrder(customer);

    if (!order) {
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = "Попробовать снова";
        }
        return;
    }

    const root = getElement("modalRoot");

    root.innerHTML = `
        <div class="modal-overlay">
            <div class="modal" role="dialog" aria-modal="true">

                <div class="modal-body" style="text-align:center;padding:25px 5px">

                    <div style="font-size:65px">✓</div>

                    <h2 style="color:var(--gold);margin-top:15px">
                        Заказ сохранён!
                    </h2>

                    <p style="margin-top:12px">
                        Номер заказа:
                    </p>

                    <h3 style="color:var(--white);font-size:23px;margin-top:8px">
                        ${escapeHTML(order.number)}
                    </h3>

                    <p style="margin-top:15px">
                        Сумма: <strong style="color:var(--gold)">
                            ${formatPrice(order.total)}
                        </strong>
                    </p>

                    <p style="margin-top:15px">
                        Заказ записан в историю этого браузера.
                        Для реальной отправки ресторану потребуется подключить сервер.
                    </p>

                    <button
                        type="button"
                        class="modal-action"
                        data-action="close-modal"
                    >
                        Отлично!
                    </button>

                </div>
            </div>
        </div>
    `;

    showToast("Заказ успешно сохранён!");
}

/* 25. FAVORITES */

function toggleFavorite(productId) {
    const exists = App.favorites.includes(productId);

    if (exists) {
        App.favorites = App.favorites.filter(
            id => id !== productId
        );
        showToast("Удалено из избранного.");
    } else {
        App.favorites.push(productId);
        showToast("Добавлено в избранное!");
    }

    if (!Storage.set(
        ANVARS_CONFIG.storage.favorites,
        App.favorites
    )) return;

    updateFavoritesCount();
    renderProducts();
}

function openFavorites() {
    const products = App.products.filter(product =>
        App.favorites.includes(product.id)
    );

    const root = getElement("modalRoot");
    if (!root) return;

    root.innerHTML = `
        <div class="modal-overlay" data-overlay-close="true">
            <div class="modal" role="dialog" aria-modal="true" aria-label="Избранное">

                <div class="modal-header">
                    <h2>Избранное ♡</h2>
                    <button type="button" class="modal-close" data-action="close-modal">×</button>
                </div>

                <div class="modal-body">

                    ${products.length ? `
                        <div class="products-grid" style="grid-template-columns:repeat(2,minmax(0,1fr))">
                            ${products.map(createProductCard).join("")}
                        </div>
                    ` : `
                        <div class="empty-state">
                            <span>♡</span>
                            <h3>Пока ничего нет</h3>
                            <p>Добавляй любимые блюда в избранное.</p>
                        </div>
                    `}

                </div>
            </div>
        </div>
    `;

    document.body.classList.add("modal-open");
}

/* 26. CLOSE MODAL */

function closeModal() {
    const root = getElement("modalRoot");

    if (root) {
        root.innerHTML = "";
    }

    App.currentProduct = null;

    document.body.classList.remove("modal-open");
}

/* 27. NAVIGATION */

function initializeNavigation() {
    const toggle = getElement("menuToggle");
    const nav = getElement("mainNav");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });
    });

    window.addEventListener("scroll", () => {
        const header = getElement("header");

        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 30);
        }
    });
}

/* 28. SEARCH */

function initializeSearch() {
    const input = getElement("searchInput");

    if (!input) return;

    input.addEventListener("input", event => {
        App.search = event.target.value;
        renderProducts();
    });
}

/* 29. SORTING */

function initializeSort() {
    const select = getElement("sortSelect");

    if (!select) return;

    select.addEventListener("change", event => {
        App.sort = event.target.value;
        renderProducts();
    });
}

/* 30. HEADER BUTTONS */

function initializeHeaderButtons() {
    const cartButton = getElement("cartButton");
    const favoritesButton = getElement("favoritesButton");

    if (cartButton) {
        cartButton.addEventListener("click", openCart);
    }

    if (favoritesButton) {
        favoritesButton.addEventListener("click", openFavorites);
    }
}

function openCart() {
    renderCart();
}

/* 31. BACK TO TOP */

function initializeBackToTop() {
    const button = getElement("backToTop");

    if (!button) return;

    window.addEventListener("scroll", () => {
        button.classList.toggle("visible", window.scrollY > 500);
    });

    button.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* 32. CATEGORY CLICK */

function initializeCategoryEvents() {
    const container = getElement("categoryFilters");

    if (!container) return;

    container.addEventListener("click", event => {
        const button = event.target.closest("[data-category]");

        if (!button) return;

        App.activeCategory = button.dataset.category;

        renderCatalog();
    });
}

/* 33. GLOBAL CLICK EVENTS */

function initializeGlobalEvents() {
    document.addEventListener("click", event => {
        const actionElement = event.target.closest("[data-action]");

        if (!actionElement) return;

        const action = actionElement.dataset.action;
        const id = actionElement.dataset.id;

        switch (action) {
            case "customize":
                openCustomization(id);
                break;

            case "favorite":
                toggleFavorite(id);
                break;

            case "close-modal":
                closeModal();
                break;

            case "quantity":
                changeQuantity(
                    id,
                    Number(actionElement.dataset.change)
                );
                break;

            case "remove-item":
                removeFromCart(id);
                break;

            case "apply-promo":
                applyPromoCode();
                break;

            case "checkout":
                renderCheckout();
                break;
        }

        if (action === "customize" || action === "favorite") {
            event.preventDefault();
        }
    });

    document.addEventListener("click", event => {
        if (event.target.id === "addCustomizedProduct") {
            addCustomizedToCart();
        }
    });

    document.addEventListener("click", event => {
        const overlay = event.target;

        if (
            overlay instanceof HTMLElement &&
            overlay.dataset.overlayClose === "true" &&
            overlay === event.target
        ) {
            closeModal();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeModal();
        }
    });
}

/* 34. PROMO COPY BUTTON */

function initializePromoCopy() {
    const button = getElement("copyPromoButton");

    if (!button) return;

    button.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(
                ANVARS_CONFIG.promoCode
            );

            showToast("Промокод скопирован!");
        } catch (error) {
            showToast("Не удалось скопировать. Код: ANVARS99", "error");
        }
    });
}

/* 35. FOOTER YEAR */

function initializeYear() {
    const year = getElement("currentYear");

    if (year) {
        year.textContent = new Date().getFullYear();
    }
}

/* 36. STORAGE SYNCHRONIZATION */

window.addEventListener("storage", event => {
    if (event.key === ANVARS_CONFIG.storage.products) {
        App.products = Storage.get(
            ANVARS_CONFIG.storage.products,
            DEFAULT_PRODUCTS
        );

        renderProducts();
    }

    if (event.key === ANVARS_CONFIG.storage.cart) {
        App.cart = Storage.get(
            ANVARS_CONFIG.storage.cart,
            []
        );

        updateCartCount();
    }

    if (event.key === ANVARS_CONFIG.storage.favorites) {
        App.favorites = Storage.get(
            ANVARS_CONFIG.storage.favorites,
            []
        );

        updateFavoritesCount();
        renderProducts();
    }

    if (event.key === ANVARS_CONFIG.storage.orders) {
        App.orders = Storage.get(
            ANVARS_CONFIG.storage.orders,
            []
        );
    }
});

/* 37. VALIDATION */

function validateInitialData() {
    App.products = App.products.map(product => ({
        ...product,
        price: Math.max(0, Number(product.price) || 0),
        available: product.available !== false
    }));

    App.cart = App.cart.filter(item => {
        const product = getProduct(item.productId);

        return product &&
            Number.isSafeInteger(Number(item.quantity)) &&
            Number(item.quantity) > 0 &&
            Number.isFinite(Number(item.unitPrice));
    });
}

/* 38. START APPLICATION */

function initializeANVARS() {
    try {
        initializeStorage();
        validateInitialData();

        renderCatalog();

        initializeNavigation();
        initializeSearch();
        initializeSort();
        initializeHeaderButtons();
        initializeBackToTop();
        initializeCategoryEvents();
        initializeGlobalEvents();
        initializePromoCopy();
        initializeYear();

        saveCart();

        console.log(
            "%c ANVARS ONLINE ",
            "background:#d6ad62;color:#17130c;font-weight:bold;padding:8px 15px"
        );

        console.log("ANVARS успешно запущен.");
    } catch (error) {
        console.error("ANVARS initialization error:", error);

        showToast(
            "Ошибка запуска сайта. Открой консоль браузера.",
            "error"
        );
    }
}

/* 39. START */

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializeANVARS
    );
} else {
    initializeANVARS();
}
