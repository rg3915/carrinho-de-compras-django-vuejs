from django.urls import path
from myproject.core import views as v


app_name = 'core'


urlpatterns = [
    path('', v.index, name='index'),
    path('api/product/', v.api_product, name='api_product'),
]
