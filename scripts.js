// تعريف النصوص باللغات المختلفة
const translations = {
    "ar": {
        "home": "الرئيسية",
        "products": "المنتجات",
        "about": "من نحن",
        "support": "الدعم الفني",
        "welcome": "مرحبًا بكم في موقع قطع الكمبيوتر",
        "description": "نحن نقدم أفضل وأحدث قطع الكمبيوتر. استكشف مجموعتنا الواسعة من المنتجات المميزة."
    },
    "en": {
        "home": "Home",
        "products": "Products",
        "about": "About Us",
        "support": "Support",
        "welcome": "Welcome to the Computer Parts Website",
        "description": "We offer the best and latest computer parts. Explore our wide range of premium products."
    },
    "fr": {
        "home": "Accueil",
        "products": "Produits",
        "about": "À propos",
        "support": "Support technique",
        "welcome": "Bienvenue sur le site des pièces informatiques",
        "description": "Nous offrons les meilleures et dernières pièces informatiques. Découvrez notre large gamme de produits premium."
    }
};

// تحديد العناصر التي سيتم تغيير محتواها
const elements = {
    home: document.querySelector('a[href="index.html"]'),
    products: document.querySelector('a[href="products.html"]'),
    about: document.querySelector('a[href="about.html"]'),
    support: document.querySelector('a[href="support.html"]'),
    welcome: document.querySelector('h2'),
    description: document.querySelector('p')
};

// تغيير اللغة بناءً على الاختيار
document.getElementById('language-selector').addEventListener('change', function () {
    const selectedLang = this.value;

    // تحديث النصوص بناءً على اللغة المختارة
    elements.home.textContent = translations[selectedLang].home;
    elements.products.textContent = translations[selectedLang].products;
    elements.about.textContent = translations[selectedLang].about;
    elements.support.textContent = translations[selectedLang].support;
    elements.welcome.textContent = translations[selectedLang].welcome;
    elements.description.textContent = translations[selectedLang].description;
});
