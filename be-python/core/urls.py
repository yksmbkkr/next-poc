from django.urls import path

from core.views import navbar


urlpatterns = [
    path('navbar/', navbar)
]
