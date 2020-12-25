from django.urls import include, path
from django.contrib import admin


urlpatterns = [
    path('', include('myproject.core.urls', namespace='core')),
    path('shopping/', include('myproject.shopping.urls', namespace='shopping')),
    path('admin/', admin.site.urls),
]
