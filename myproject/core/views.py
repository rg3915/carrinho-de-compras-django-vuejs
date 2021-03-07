import json
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from myproject.shopping.models import Product, Shop, Cart


def index(request):
    return render(request, 'index.html')
