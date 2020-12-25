from django.db import models


class Compra(models.Model):
    cliente = models.CharField(max_length=100)
    data = models.DateField()

    class Meta:
        ordering = ('-pk',)
        verbose_name = 'compra'
        verbose_name_plural = 'compras'

    def __str__(self):
        return self.cliente


class Produto(models.Model):
    nome = models.CharField(max_length=100, unique=True)
    preco = models.DecimalField('preço', max_digits=6, decimal_places=2)

    class Meta:
        ordering = ('nome',)
        verbose_name = 'produto'
        verbose_name_plural = 'produtos'

    def __str__(self):
        return self.nome


class Carrinho(models.Model):
    compra = models.ForeignKey(
        Compra,
        related_name='compras',
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )
    produto = models.ForeignKey(
        Produto,
        related_name='produtos',
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )
    quantidade = models.PositiveIntegerField()
    preco = models.DecimalField('preço', max_digits=6, decimal_places=2)

    class Meta:
        ordering = ('-pk',)
        verbose_name = 'carrinho'
        verbose_name_plural = 'carrinhos'

    def __str__(self):
        return f'{self.pk}-{self.compra.pk}-{self.produto}'
