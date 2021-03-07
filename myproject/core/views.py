import json
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from myproject.shopping.models import Product, Shop, Cart


def index(request):
    return render(request, 'index.html')


def api_product(request):
    products = Product.objects.all()
    data = [item.to_dict() for item in products]
    response = {'data': data}
    return JsonResponse(response)


@csrf_exempt
def api_shopping_items_add(request):
    request = request.POST
    customer = json.loads(request.get('customer'))
    products = json.loads(request.get('products'))

    shop = Shop.objects.create(customer=customer)

    for product in products:
        product_obj = Product.objects.get(pk=product['pk'])
        quantity = product['quantity']
        price = product['price']

        Cart.objects.create(
            shop=shop,
            product=product_obj,
            quantity=quantity,
            price=price
        )
    response = {'data': shop.pk}
    return JsonResponse(response)
