from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views

app_name = 'company'
router = routers.DefaultRouter()
router.register(r'', views.CompanyViewSet, basename='company')


urlpatterns = [
    path('', include(router.urls)),
]

urlpatterns += router.urls