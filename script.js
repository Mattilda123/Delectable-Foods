// Loading Screen
window.addEventListener('load', function() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});

// Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to menu function
function scrollToMenu() {
    const menuSection = document.querySelector('#menu');
    menuSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Menu Category Navigation
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

// Menu Data - Organized by categories
window.menuData = {
    appetizers: [
        {
            id: 'haw_007',
            name: 'Chicken Satay (Singapore Style)',
            description: 'Juicy, smoky grilled chicken skewers marinated in lemongrass, turmeric, and spices. Served with classic peanut sauce, cucumber, and onions.',
            price: '$18',
            image: 'food/haw_007.jpeg',
            category: 'Appetizer'
        },
        {
            id: 'chi_004',
            name: 'Har Cheong Gai (Prawn Paste Chicken)',
            description: 'Crispy, juicy fried chicken wings marinated in fermented prawn paste, garlic, and spices. Served with lime and chili dip.',
            price: '$22',
            image: 'food/chi_004.jpeg',
            category: 'Appetizer'
        },
        {
            id: 'per_003',
            name: 'Kueh Pie Tee',
            description: 'Crispy pastry cups filled with braised turnip, carrots, and prawns, topped with chili and coriander, a Peranakan party favorite.',
            price: '$16',
            image: 'food/per_003.jpeg',
            category: 'Appetizer'
        },
        {
            id: 'ind_016',
            name: 'Samosa',
            description: 'Crisp pastry filled with spiced potatoes and peas, deep-fried until golden. Served with mint chutney.',
            price: '$14',
            image: 'food/ind_016.jpeg',
            category: 'Appetizer'
        },
        {
            id: 'mal_043',
            name: 'Epok-Epok (Malay Curry Puff)',
            description: 'Deep-fried pastry pockets filled with curried potatoes, sardines, or egg, a popular Malay snack.',
            price: '$12',
            image: 'food/mal_043.jpeg',
            category: 'Appetizer'
        }
    ],
    'main-dishes': [
        {
            id: 'sea_003',
            name: 'Singapore Chilli Crab',
            description: 'Iconic Singaporean dish of mud crab stir-fried in a sweet, spicy, and tangy tomato-chili sauce.',
            price: '$45',
            image: 'food/sea_003.jpeg',
            category: 'Main Dish'
        },
        {
            id: 'haw_003',
            name: 'Singapore Hokkien Mee',
            description: 'Stir-fried yellow noodles and rice vermicelli, prawns, squid, and pork belly, braised in rich homemade prawn stock.',
            price: '$28',
            image: 'food/haw_003.jpeg',
            category: 'Main Dish'
        },
        {
            id: 'chi_005',
            name: 'Claypot Rice (with Chicken and Chinese Sausage)',
            description: 'Fragrant rice cooked in a claypot with marinated chicken, Chinese sausage, mushrooms, and salted fish.',
            price: '$32',
            image: 'food/chi_005.jpeg',
            category: 'Main Dish'
        },
        {
            id: 'ind_010',
            name: 'Butter Chicken (Murgh Makhani)',
            description: 'Tender chicken in a creamy, spiced tomato sauce. Served with naan or rice.',
            price: '$26',
            image: 'food/ind_010.jpeg',
            category: 'Main Dish'
        },
        {
            id: 'mal_015',
            name: 'Minangkabau Beef Rendang',
            description: 'Dry, aromatic beef curry slow-cooked with coconut, spices, and chilies, a festive Minangkabau specialty.',
            price: '$38',
            image: 'food/mal_015.jpeg',
            category: 'Main Dish'
        },
        {
            id: 'per_001',
            name: 'Ayam Buah Keluak',
            description: 'Classic Peranakan chicken stew with earthy buah keluak nuts, pork, and aromatic spices.',
            price: '$35',
            image: 'food/per_001.jpeg',
            category: 'Main Dish'
        }
    ],
    sides: [
        {
            id: 'chi_043',
            name: 'Stir-Fried Bittergourd with Egg',
            description: 'Tender, slightly bitter gourd slices tossed with fluffy scrambled eggs. Nutritious and comforting.',
            price: '$16',
            image: 'food/chi_043.jpeg',
            category: 'Side Dish'
        },
        {
            id: 'chi_044',
            name: 'Stir-Fried Long Beans with Dried Shrimp',
            description: 'Crisp-tender long beans stir-fried with aromatic dried shrimp, garlic, and a touch of chili.',
            price: '$18',
            image: 'food/chi_044.jpeg',
            category: 'Side Dish'
        },
        {
            id: 'mal_012',
            name: 'Sayur Lodeh',
            description: 'Vegetable curry in coconut milk with cabbage, long beans, tofu, and tempeh, a Malay classic.',
            price: '$14',
            image: 'food/mal_012.jpeg',
            category: 'Side Dish'
        },
        {
            id: 'chi_045',
            name: 'Steamed Egg Custard',
            description: 'Silky, savory steamed egg custard, gently cooked to a delicate, just-set texture.',
            price: '$12',
            image: 'food/chi_045.jpeg',
            category: 'Side Dish'
        }
    ],
    'chef-special': [
        {
            id: 'sea_014',
            name: 'Salted Egg Yolk Crab',
            description: 'A modern zi char and seafood favorite: crab stir-fried in a rich, creamy salted egg yolk sauce with curry leaves and chili.',
            price: '$52',
            image: 'food/sea_014.jpeg',
            category: "Chef's Special"
        },
        {
            id: 'haw_004',
            name: 'Char Kway Teow',
            description: 'Legendary Singaporean stir-fried flat rice noodles with prawns, Chinese sausage, fish cake, egg, and bean sprouts.',
            price: '$30',
            image: 'food/haw_004.jpeg',
            category: "Chef's Special"
        },
        {
            id: 'per_006',
            name: 'Semur (Peranakan Beef Stew)',
            description: 'A rich, aromatic Peranakan stew of beef braised with sweet soy sauce, potatoes, tomatoes, and spices.',
            price: '$42',
            image: 'food/per_006.jpeg',
            category: "Chef's Special"
        },
        {
            id: 'ind_007',
            name: 'Chicken Briyani',
            description: 'Fragrant basmati rice cooked with spiced chicken, saffron, and ghee, a festive Indian-Muslim dish.',
            price: '$36',
            image: 'food/ind_007.jpeg',
            category: "Chef's Special"
        }
    ],
    desserts: [
        {
            id: 'mal_022',
            name: 'Bubur Cha Cha',
            description: 'Colorful dessert of sweet potatoes, yam, sago, and tapioca jellies in coconut milk, a Peranakan and Malay classic.',
            price: '$12',
            image: 'food/mal_022.jpeg',
            category: 'Dessert'
        },
        {
            id: 'mal_023',
            name: 'Ondeh Ondeh',
            description: 'Glutinous rice balls filled with molten gula melaka, coated in grated coconut, a beloved kueh.',
            price: '$10',
            image: 'food/mal_023.jpeg',
            category: 'Dessert'
        },
        {
            id: 'mal_024',
            name: 'Kueh Lapis',
            description: 'Steamed layered cake of coconut milk, rice flour, and tapioca flour, colored in rainbow layers, a festive treat.',
            price: '$14',
            image: 'food/mal_024.jpeg',
            category: 'Dessert'
        },
        {
            id: 'mal_020',
            name: 'Pulut Hitam',
            description: 'Black glutinous rice porridge cooked with coconut milk and gula melaka, a comforting dessert.',
            price: '$11',
            image: 'food/mal_020.jpeg',
            category: 'Dessert'
        },
        {
            id: 'mal_027',
            name: 'Durian Pengat',
            description: 'Rich, creamy durian dessert with coconut milk and gula melaka, a Peranakan and Malay favourite.',
            price: '$16',
            image: 'food/mal_027.jpeg',
            category: 'Dessert'
        }
    ],
    beverages: [
        {
            id: 'beverage_001',
            name: 'Singapore Kopi',
            description: 'Traditional Singaporean coffee brewed with condensed milk, served hot or iced. Rich, aromatic, and perfectly balanced with the sweetness of condensed milk.',
            price: '$6',
            image: 'food/coffee.jpeg',
            category: 'Beverage'
        },
        {
            id: 'beverage_002',
            name: 'Teh Tarik',
            description: 'Malaysian pulled tea with condensed milk, creating a frothy, creamy texture. The "pulling" process aerates the tea for a unique, smooth mouthfeel.',
            price: '$5',
            image: 'food/tehtarik.jpeg',
            category: 'Beverage'
        },
        {
            id: 'beverage_003',
            name: 'Lychee Tea',
            description: 'Refreshing iced tea infused with fresh lychee and a hint of mint. Sweet, floral, and perfectly chilled for a tropical escape.',
            price: '$7',
            image: 'food/lycheetea.jpeg',
            category: 'Beverage'
        },
        {
            id: 'beverage_004',
            name: 'Lemongrass Ginger Tea',
            description: 'Soothing hot tea with fresh lemongrass and ginger, perfect for digestion. Aromatic, warming, and naturally healing.',
            price: '$6',
            image: 'food/lemongrassgingertea.jpeg',
            category: 'Beverage'
        },
        {
            id: 'beverage_005',
            name: 'Fresh Coconut Water',
            description: 'Fresh young coconut water served in its natural shell. Pure, hydrating, and naturally sweet with essential electrolytes.',
            price: '$8',
            image: 'food/coconutwater.jpeg',
            category: 'Beverage'
        },
        {
            id: 'beverage_006',
            name: 'Bandung',
            description: 'Rose syrup with evaporated milk, a sweet and creamy Malaysian drink. Fragrant, pink-hued, and delightfully indulgent.',
            price: '$5',
            image: 'food/bandung.jpeg',
            category: 'Beverage'
        }
    ]
};

// Function to create menu item HTML
function createMenuItem(item) {
    return `
        <div class="menu-item fade-in">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="image-placeholder" style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);">
                    <i class="fas fa-utensils" style="font-size: 3rem; color: #ccc;"></i>
                </div>
            </div>
            <div class="menu-item-content">
                <div class="menu-item-category">${item.category}</div>
                <h3 class="menu-item-title">${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-price">${item.price}</div>
            </div>
        </div>
    `;
}

// Function to populate menu categories
function populateMenu() {
    Object.keys(menuData).forEach(category => {
        const categoryElement = document.getElementById(category);
        if (categoryElement) {
            const menuGrid = categoryElement.querySelector('.menu-grid');
            if (menuGrid) {
                menuGrid.innerHTML = menuData[category].map(item => createMenuItem(item)).join('');
            }
        }
    });
}

// Initialize menu when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateMenu();
    
    // Add fade-in animation to menu items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        observer.observe(item);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
    }
});

// Form submission
document.querySelector('.reservation-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const date = this.querySelector('input[type="date"]').value;
    const guests = this.querySelector('select').value;
    
    // Simple validation
    if (!name || !email || !phone || !date || !guests) {
        alert('Please fill in all fields');
        return;
    }
    
    // Show success message
    alert('Thank you for your reservation! We will contact you soon to confirm.');
    
    // Reset form
    this.reset();
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Add smooth reveal animation for sections
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    sectionObserver.observe(section);
});

// Add hover effects for menu items
document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.menu-item')) {
        const menuItem = e.target.closest('.menu-item');
        menuItem.style.transform = 'translateY(-10px) scale(1.02)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.menu-item')) {
        const menuItem = e.target.closest('.menu-item');
        menuItem.style.transform = 'translateY(0) scale(1)';
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Add keyboard navigation for menu categories
document.addEventListener('keydown', function(e) {
    if (e.key >= '1' && e.key <= '6') {
        const categoryIndex = parseInt(e.key) - 1;
        const categoryButtons = document.querySelectorAll('.category-btn');
        if (categoryButtons[categoryIndex]) {
            categoryButtons[categoryIndex].click();
        }
    }
});

// Add tooltip for keyboard shortcuts
document.querySelectorAll('.category-btn').forEach((btn, index) => {
    btn.setAttribute('title', `Press ${index + 1} for quick access`);
});

// Add scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #d4af37;
    color: #1a1a1a;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    font-size: 1.2rem;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add mobile menu close functionality
document.addEventListener('click', function(e) {
    if (!e.target.closest('.hamburger') && !e.target.closest('.nav-menu')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add form validation
document.querySelectorAll('.form-group input, .form-group select').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value) {
            this.style.borderColor = '#ff6b6b';
        } else {
            this.style.borderColor = 'rgba(212, 175, 55, 0.3)';
        }
    });
    
    input.addEventListener('input', function() {
        if (this.value) {
            this.style.borderColor = '#d4af37';
        }
    });
});
