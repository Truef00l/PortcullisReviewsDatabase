from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .Newsletter import add_to_subscriber_email_addresses

# Create your views here.

def print_some(request):
    variable = request.GET.get('variable', 'default')
    print('Variable:', variable)  # Log the variable for debugging purposes
    # Call function to handle the variable and add it to a list
    add_to_subscriber_email_addresses(variable)
    return JsonResponse({'message': 'Received', 'variable': variable})

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