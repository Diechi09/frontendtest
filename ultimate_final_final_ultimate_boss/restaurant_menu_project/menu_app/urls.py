from django.urls import path
from . import views

urlpatterns = [
    path('upload-menu/', views.menu_upload_view, name='menu_upload'),
    path('process-menu-pdf/', views.process_menu_pdf, name='process_menu_pdf'),
]
