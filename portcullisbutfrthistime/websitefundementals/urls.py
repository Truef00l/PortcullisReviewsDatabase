from django.urls import path

from . import views

urlpatterns = [
    path ("", views.Test, name = "Test"),
    path ("loginpage", views.loginpage, name = "loginpage"),
    path ("DatabaseUI", views.DatabaseUI, name = "DatabaseUI"),
    path ("homepage", views.homepage, name = "homepage"),
    path ("Quarter1", views.Quarter1, name = "Quarter1"),
    path ("Quarter2", views.Quarter2, name = "Quarter2"),
    path ("Quarter3", views.Quarter3, name = "Quarter3"),
    path ("Quarter4", views.Quarter4, name = "Quarter4"),
    path ("settings", views.settings, name = "settings")
]
    
