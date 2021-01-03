from django.urls import path
from myproject.shopping import views as v


app_name = 'shopping'


urlpatterns = [
    path('shopping/', v.shopping, name='shopping'),
    path('cart-items/<int:pk>/', v.cart_items, name='cart_items'),
]
