from django.contrib import admin
from django.urls import path, re_path
from easycali import views

urlpatterns = [
    path('', views.index),
    path('admin/', admin.site.urls),
]
