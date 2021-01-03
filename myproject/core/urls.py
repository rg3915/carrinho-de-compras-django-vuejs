from django.urls import path
from myproject.core import views as v


app_name = 'core'


urlpatterns = [
    path('', v.index, name='index'),
    path('api/products/', v.api_product, name='api_product'),
    path('api/shopping-items/add/', v.api_shopping_items_add, name='api_shopping_items_add'),
]
