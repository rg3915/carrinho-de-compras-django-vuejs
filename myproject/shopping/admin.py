from django.contrib import admin
from .models import Shop, Product, Cart


class CartInline(admin.TabularInline):
    model = Cart
    extra = 0


@admin.register(Shop)
class ShopAdmin(admin.ModelAdmin):
    inlines = (CartInline,)
    list_display = ('__str__', 'created')
    search_fields = ('customer',)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'price')
    search_fields = ('name',)


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'shop', 'quantity', 'price')
    search_fields = ('shop__customer', 'product__name')
