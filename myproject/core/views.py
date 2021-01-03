from django.shortcuts import render
from django.http import JsonResponse
from myproject.shopping.models import Product


def index(request):
    return render(request, 'index.html')


def api_product(request):
    products = Product.objects.all()
    data = [item.to_dict() for item in products]
    response = {'data': data}
    return JsonResponse(response)
