from django.contrib import admin
from .models import Compra, Produto, Carrinho


@admin.register(Compra)
class CompraAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'data')
    search_fields = ('cliente',)


@admin.register(Produto)
class ProdutoAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'preco')
    search_fields = ('nome',)


@admin.register(Carrinho)
class CarrinhoAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'compra', 'quantidade', 'preco')
    search_fields = ('compra__cliente', 'produto__nome')
