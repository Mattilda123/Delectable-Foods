// Order Page JavaScript - Bulletproof Version
console.log('Order script loaded!');

// Global variables
let cart = [];
let cartTotal = 0;

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    initializeOrderPage();
});

// Initialize everything
function initializeOrderPage() {
    console.log('Initializing order page...');
    
    // Wait for menuData to be available
    if (typeof window.menuData === 'undefined') {
        console.log('menuData not ready, waiting...');
        setTimeout(initializeOrderPage, 100);
        return;
    }
    
    console.log('menuData is ready:', Object.keys(window.menuData));
    
    // Populate menu
    populateMenu();
    
    // Setup cart functionality
    setupCart();
    
    console.log('Order page initialized successfully!');
}

// Populate menu items
function populateMenu() {
    console.log('Populating menu...');
    
    // Get all menu categories
    const categories = ['appetizers', 'main-dishes', 'sides', 'chef-special', 'desserts', 'beverages'];
    
    categories.forEach(category => {
        const categoryElement = document.getElementById(category);
        if (categoryElement) {
            const menuGrid = categoryElement.querySelector('.menu-grid');
            if (menuGrid && window.menuData[category]) {
                const items = window.menuData[category];
                console.log(`Adding ${items.length} items to ${category}`);
                
                const menuHTML = items.map(item => `
                    <div class="menu-item fade-in" data-item-id="${item.id}" onclick="addToCart('${item.id}')" style="cursor: pointer;">
                        <div class="menu-item-image">
                            <img src="${item.image}" alt="${item.name}" onerror="this.style.display='none';">
                        </div>
                        <div class="menu-item-content">
                            <div class="menu-item-category">${item.category}</div>
                            <h3 class="menu-item-title">${item.name}</h3>
                            <p class="menu-item-description">${item.description}</p>
                            <div class="menu-item-price">${item.price}</div>
                        </div>
                        <div class="menu-item-overlay">
                            <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart('${item.id}');" style="background: #d4af37; color: white; border: none; padding: 10px 15px; border-radius: 25px; cursor: pointer; font-weight: 600;">
                                <i class="fas fa-plus"></i>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                `).join('');
                
                menuGrid.innerHTML = menuHTML;
            }
        }
    });
}

// Setup cart functionality
function setupCart() {
    console.log('Setting up cart...');
    
    // Get cart elements
    const cartSidebar = document.getElementById('cartSidebar');
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.querySelector('.cart-count');
    const cartCountDisplay = document.querySelector('.cart-count-display');
    const totalAmount = document.querySelector('.total-amount');
    const cartIcon = document.querySelector('.cart-icon');
    const closeCartBtn = document.getElementById('closeCart');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    // Setup cart icon click
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            console.log('Cart icon clicked');
            if (cartSidebar) {
                cartSidebar.classList.toggle('open');
                console.log('Cart sidebar toggled');
            }
        });
    }
    
    // Setup close cart button
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', function() {
            console.log('Close cart clicked');
            if (cartSidebar) {
                cartSidebar.classList.remove('open');
            }
        });
    }
    
    // Setup checkout button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            console.log('Checkout clicked');
            if (cart.length > 0) {
                alert('Order submitted! Total: $' + cartTotal.toFixed(2));
                cart = [];
                updateCartDisplay();
                if (cartSidebar) cartSidebar.classList.remove('open');
            }
        });
    }
    
    // Initial cart display
    updateCartDisplay();
    
    // Make functions globally available
    window.addToCart = addToCart;
    window.toggleCart = toggleCart;
    window.removeFromCart = removeFromCart;
    window.updateQuantity = updateQuantity;
    window.scrollToMenu = scrollToMenu;
}

// Add item to cart
function addToCart(itemId) {
    console.log('Adding to cart:', itemId);
    
    // Find the item
    let item = null;
    for (const category of Object.values(window.menuData)) {
        item = category.find(item => item.id === itemId);
        if (item) break;
    }
    
    if (!item) {
        console.error('Item not found:', itemId);
        return;
    }
    
    // Check if item already in cart
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
        console.log('Updated quantity for:', item.name, 'New quantity:', existingItem.quantity);
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
        console.log('Added new item to cart:', item.name);
    }
    
    updateCartDisplay();
    
    // Show visual feedback
    const menuItem = document.querySelector(`[data-item-id="${itemId}"]`);
    if (menuItem) {
        menuItem.style.transform = 'scale(1.05)';
        setTimeout(() => {
            menuItem.style.transform = 'scale(1)';
        }, 200);
    }
}

// Remove item from cart
function removeFromCart(itemId) {
    console.log('Removing from cart:', itemId);
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
}

// Update quantity
function updateQuantity(itemId, newQuantity) {
    console.log('Updating quantity:', itemId, newQuantity);
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(itemId);
        } else {
            item.quantity = newQuantity;
            updateCartDisplay();
        }
    }
}

// Toggle cart sidebar
function toggleCart() {
    console.log('Toggle cart called');
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.toggle('open');
        console.log('Cart sidebar toggled');
    }
}

// Update cart display
function updateCartDisplay() {
    console.log('Updating cart display...');
    
    // Calculate totals
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotal = cart.reduce((sum, item) => sum + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);
    
    console.log('Cart items:', cart);
    console.log('Total items:', totalItems);
    console.log('Cart total:', cartTotal);
    
    // Update cart count displays
    const cartCount = document.querySelector('.cart-count');
    const cartCountDisplay = document.querySelector('.cart-count-display');
    
    if (cartCount) cartCount.textContent = totalItems;
    if (cartCountDisplay) cartCountDisplay.textContent = totalItems;
    
    // Update total amount
    const totalAmount = document.querySelector('.total-amount');
    if (totalAmount) totalAmount.textContent = `$${cartTotal.toFixed(2)}`;
    
    // Update cart items display
    const cartItems = document.getElementById('cartItems');
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div style="text-align: center; padding: 40px; color: white;">
                    <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                    <p>Your cart is empty</p>
                </div>
            `;
        } else {
            cartItems.innerHTML = cart.map(item => {
                const itemTotal = (parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2);
                return `
                    <div style="border: 1px solid rgba(255,255,255,0.2); margin: 10px 0; padding: 15px; border-radius: 8px; background: rgba(255,255,255,0.05);">
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <div style="width: 60px; height: 60px; overflow: hidden; border-radius: 6px;">
                                <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none';">
                            </div>
                            <div style="flex: 1; color: white;">
                                <div style="font-weight: 600; font-size: 14px; margin-bottom: 5px;">${item.name}</div>
                                <div style="color: #d4af37; font-weight: 600; font-size: 16px;">${item.price} x ${item.quantity} = $${itemTotal}</div>
                                <div style="margin-top: 8px; display: flex; gap: 8px; align-items: center;">
                                    <button onclick="updateQuantity('${item.id}', ${item.quantity - 1})" style="background: #d4af37; color: white; border: none; border-radius: 4px; width: 25px; height: 25px; cursor: pointer;">-</button>
                                    <span style="font-weight: 600; min-width: 20px; text-align: center; color: white;">${item.quantity}</span>
                                    <button onclick="updateQuantity('${item.id}', ${item.quantity + 1})" style="background: #d4af37; color: white; border: none; border-radius: 4px; width: 25px; height: 25px; cursor: pointer;">+</button>
                                    <button onclick="removeFromCart('${item.id}')" style="background: #ff6b6b; color: white; border: none; border-radius: 4px; padding: 4px 8px; font-size: 12px; cursor: pointer;">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }
    
    // Update checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
    }
}

// Scroll to menu
function scrollToMenu() {
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
        menuSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Setup category navigation
document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and categories
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            menuCategories.forEach(category => category.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding category
            const targetCategory = button.getAttribute('data-category');
            const categoryElement = document.getElementById(targetCategory);
            if (categoryElement) {
                categoryElement.classList.add('active');
            }
        });
    });
});

// Setup mobile navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
});

// Setup scroll to top
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Setup loading screen
window.addEventListener('load', function() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 2000);
});

console.log('Order script loaded and ready!');


