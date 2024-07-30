from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.
def Test (request):
    return HttpResponse("Helloworld")

def loginpage (request):
    return render(request, "userandpassinput/loginpage.html")

def homepage (request):
    return render(request, "userandpassinput/homepage.html")

def DatabaseUI (request):
    return render(request, "userandpassinput/DatabaseUI.html")

def Quarter1 (request):
    return render(request, "userandpassinput/Quarter1.html")

def Quarter2 (request):
    return render(request, "userandpassinput/Quarter2.html")

def Quarter3 (request):
    return render(request, "userandpassinput/Quarter3.html")

def Quarter4 (request):
    return render(request, "userandpassinput/Quarter4.html")

def settings (request):
    return render(request, "userandpassinput/settings.html")