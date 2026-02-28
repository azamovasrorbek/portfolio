# 🌟 Asrorbek Azamov - Student Leader & Innovator Portfolio

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-success)
![Django](https://img.shields.io/badge/Django-4.2-green)
![Responsive](https://img.shields.io/badge/Design-Responsive-blue)
![Uzbekistan](https://img.shields.io/badge/From-Uzbekistan-brightgreen)

*A modern, futuristic portfolio showcasing the achievements of a young student leader and social innovator from Uzbekistan*

</div>

## 🚀 About This Project

This is a sophisticated Django-based portfolio website for **Asrorbek Azamov**, a 17-year-old student leader, researcher, and social entrepreneur from Fergana, Uzbekistan. The portfolio features a stunning glass-morphism design with futuristic aesthetics that perfectly represents his innovative spirit and dedication to community development.

## ✨ Key Features

### 🎨 Design & User Experience
- **Futuristic Glass-morphism Design** - Beautiful translucent elements with gradient accents
- **Responsive Layout** - Perfectly optimized for all devices
- **Smooth Animations** - Elegant hover effects and transitions
- **Dark Theme** - Easy on the eyes with professional aesthetics
- **Interactive Elements** - Tilt effects on cards and smooth scrolling

### 📱 Portfolio Sections
- **Hero Section** - Compelling introduction with key statistics (GPA 5.0, IELTS 7.5, SAT 1380)
- **About Me** - Personal background and multilingual capabilities
- **Experience & Leadership** - Timeline of leadership roles and achievements
- **Projects & Initiatives** - Showcase of social impact projects
- **Interested Universities** - Academic aspirations and target institutions
- **Contact System** - Professional contact form with success notifications

### 🔧 Technical Features
- **Django Backend** - Robust and scalable web framework
- **AJAX Forms** - Seamless form submissions without page reload
- **Database Integration** - PostgreSQL/MySQL for storing messages and comments
- **CSRF Protection** - Secure form handling
- **Static File Management** - Efficient handling of images and CSS

## 🛠️ Technology Stack

### Backend
- **Python 3.8+**
- **Django 4.2**
- **PostgreSQL/MySQL**
- **Django Forms**

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern features (Grid, Flexbox, Custom Properties)
- **Vanilla JavaScript** - Lightweight and fast
- **CSS Animations** - Smooth transitions and effects

### Design System
```css
:root {
  --bg: #05060a;
  --accent-1: #7ef9ff;
  --accent-2: #6b60ff;
  --glass-1: rgba(255,255,255,0.04);
  --card-radius: 14px;
}
```

## 📋 Portfolio Content Highlights

### 🏆 Achievements
- **5.0 GPA** - Academic excellence
- **37 Research Papers** - Prolific researcher
- **National Award Winner** - Yosh Kitobxon competition
- **Environmental Leadership** - Team leader for 129 students
- **Published Author** - 5-volume ASROR book series

### 🌍 Social Impact Projects
- **Fergana Ecological Group** - Environmental awareness campaigns
- **AltruVision Project** - Youth rehabilitation program ($10,000 funded)
- **New Uzbekistan Initiative** - Volunteer teaching program
- **Fergana Youth Parliament** - Civic engagement workshops

### 🎯 Target Universities
- Harvard University
- Stanford University  
- University of Oxford
- University of Toronto

## 🚀 Quick Start

### Prerequisites
- Python 3.8 or higher
- Django 4.2
- Database (PostgreSQL recommended)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/username/portfolio-website.git
   cd portfolio-website
   ```

2. **Set up virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure database**
   ```python
   # settings.py
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.postgresql',
           'NAME': 'portfolio_db',
           'USER': 'your_username',
           'PASSWORD': 'your_password',
           'HOST': 'localhost',
           'PORT': '5432',
       }
   }
   ```

5. **Run migrations**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Create superuser**
   ```bash
   python manage.py createsuperuser
   ```

7. **Run development server**
   ```bash
   python manage.py runserver
   ```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── models.py          # UserMessage and Comment models
│   ├── views.py           # View functions for all pages
│   ├── urls.py            # URL routing
│   ├── forms.py           # Django forms
│   └── admin.py           # Admin panel configuration
├── templates/
│   ├── app/
│   │   ├── index.html     # Main portfolio page
│   │   ├── about.html     # About page
│   │   ├── contact.html   # Contact page
│   │   └── research.html  # Projects page
├── static/
│   ├── images/            # Portfolio images and assets
│   └── css/               # Additional stylesheets
└── manage.py
```

## 🌐 Live Demo

Visit the live portfolio: [https://asrorbekazamov.com](https://asrorbekazamov.com)

## 📞 Contact & Connect

- **Phone**: +998 91 129 14 40
- **Location**: Fergana, Uzbekistan
- **Languages**: Uzbek, Russian, English, Turkish, German
- **Email**: [contact@asrorbekazamov.com](mailto:contact@asrorbekazamov.com)

## 🤝 Contributing

This portfolio is a personal project, but suggestions and feedback are always welcome! Feel free to fork the project and submit pull requests for any improvements.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- [ ] Blog integration
- [ ] Multi-language support
- [ ] Project gallery with filtering
- [ ] Email newsletter integration
- [ ] Performance optimization
- [ ] PWA capabilities

---

<div align="center">

**Built with ❤️ using Django and modern web technologies**

*Inspiring the next generation of student leaders and social innovators*

</div>
