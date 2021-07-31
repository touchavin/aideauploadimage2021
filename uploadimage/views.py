from django.shortcuts import render

# Create your views here.
def home(request): #หน้า index.html
       
    return render(request, 'home.html')