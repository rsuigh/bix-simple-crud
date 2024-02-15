from django.urls import path
from .views import get_role

urlpatterns = [
    path('is_staff/', get_role),
]