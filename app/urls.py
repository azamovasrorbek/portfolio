from django.urls import path
from .views import index, about, research, prototypes, contact, gmail_view

urlpatterns = [
    path('', index, name='index'),
    path('about/', about, name='about'),
    path('research/', research, name='research'),
    path('prototypes/', prototypes, name='prototypes'),
    path('contact/', contact, name='contact'),
    path('gmail/', gmail_view, name='gmail'),
]