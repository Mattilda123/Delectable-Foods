# Delectable Foods - Fine Dining Restaurant Website

A sophisticated, interactive restaurant website showcasing local and western fusion cuisine with an elegant design and engaging user experience.

## Features

### 🎨 Interactive Introduction
- **Loading Screen**: Elegant animated logo with loading spinner
- **Hero Section**: Dynamic floating elements and smooth animations
- **Responsive Design**: Beautiful layout that works on all devices

### 🍽️ Menu Categories
- **Appetizers**: Starters and small plates
- **Main Dishes**: Signature entrees and main courses
- **Sides**: Complementary dishes and accompaniments
- **Chef's Special**: Exclusive and recommended dishes
- **Desserts**: Sweet treats and traditional kueh
- **Beverages**: Coffee, tea, and specialty drinks

### 🎯 Interactive Features
- **Smooth Navigation**: Animated menu category switching
- **Image Fallbacks**: Graceful handling of missing images
- **Keyboard Shortcuts**: Quick access to menu categories (1-6 keys)
- **Scroll Animations**: Parallax effects and smooth reveals
- **Mobile Responsive**: Optimized for all screen sizes

### 📱 User Experience
- **Reservation System**: Contact form with validation
- **Online Ordering**: Complete e-commerce functionality with shopping cart
- **Smooth Scrolling**: Seamless navigation between sections
- **Hover Effects**: Interactive menu items with animations
- **Loading States**: Progressive image loading with placeholders
- **Cart Management**: Add, remove, and modify items with real-time updates
- **Checkout Process**: Complete order flow with customer information collection

## Menu Highlights

### Appetizers
- Chicken Satay (Singapore Style)
- Har Cheong Gai (Prawn Paste Chicken)
- Kueh Pie Tee (Peranakan Pastry Cups)
- Samosa (Indian Pastry)
- Epok-Epok (Malay Curry Puff)

### Main Dishes
- Singapore Chilli Crab
- Singapore Hokkien Mee
- Claypot Rice with Chicken and Chinese Sausage
- Butter Chicken (Murgh Makhani)
- Minangkabau Beef Rendang
- Ayam Buah Keluak (Peranakan Chicken Stew)

### Chef's Special
- Salted Egg Yolk Crab
- Char Kway Teow
- Semur (Peranakan Beef Stew)
- Chicken Briyani

### Desserts
- Bubur Cha Cha
- Ondeh Ondeh
- Kueh Lapis
- Pulut Hitam
- Durian Pengat

### Beverages
- Singapore Kopi
- Teh Tarik
- Lychee Tea
- Lemongrass Ginger Tea
- Coconut Water
- Bandung

## Technical Features

### 🎨 Design
- **Typography**: Playfair Display, Cormorant Garamond, and Montserrat fonts
- **Color Scheme**: Elegant gold (#d4af37) and dark theme
- **Animations**: CSS keyframes and JavaScript-powered interactions
- **Layout**: CSS Grid and Flexbox for responsive design

### ⚡ Performance
- **Optimized Images**: Proper sizing and fallback handling
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Lazy Loading**: Progressive image loading
- **Mobile Optimization**: Touch-friendly interactions

### 🔧 Functionality
- **Menu Navigation**: Category-based filtering
- **Form Validation**: Real-time input validation
- **Smooth Scrolling**: Native browser smooth scrolling
- **Keyboard Support**: Accessibility features

## File Structure

```
Menu/
├── index.html          # Main HTML file
├── order.html          # Order page with shopping cart
├── styles.css          # CSS styles and animations
├── order-styles.css    # Order page specific styles
├── script.js           # JavaScript functionality
├── order-script.js     # Order page JavaScript
├── README.md           # Project documentation
├── food/               # Food images directory
│   ├── haw_007.jpeg
│   ├── chi_004.jpeg
│   ├── sea_003.jpeg
│   └── ... (other food images)
└── recipeIndex.json    # Menu data and descriptions
```

## Getting Started

1. **Clone or Download**: Get the project files
2. **Open index.html**: Launch in a web browser
3. **Explore**: Navigate through the menu categories
4. **Order Online**: Click "Order Online" to access the shopping cart
5. **Interact**: Try the reservation form and animations

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Customization

### Adding New Menu Items
Edit the `menuData` object in `script.js`:

```javascript
{
    id: 'unique_id',
    name: 'Dish Name',
    description: 'Detailed description of the dish',
    price: '$XX',
    image: 'food/image_name.jpeg',
    category: 'Category Name'
}
```

### Styling Changes
Modify `styles.css` to customize:
- Colors and themes
- Typography
- Animations
- Layout spacing

### Content Updates
Edit `index.html` to update:
- Restaurant information
- Contact details
- About section content

## Credits

- **Fonts**: Google Fonts (Playfair Display, Cormorant Garamond, Montserrat)
- **Icons**: Font Awesome 6.0
- **Images**: Food photography from recipe index
- **Design**: Custom elegant restaurant theme

## License

This project is created for demonstration purposes. All food images and descriptions are based on the provided recipe index.

---

**Delectable Foods** - Where Local Meets Luxury
*Experience the finest fusion of local and western cuisine, crafted with passion and served with elegance.*
