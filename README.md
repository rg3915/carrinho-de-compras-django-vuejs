# carrinho-de-compras-django-vuejs

Este projeto tem por objetivo experimentar o uso de [VueJS](https://vuejs.org/) junto com [Django](https://www.djangoproject.com/) para simular um carrinho de compras com a intenção de eliminar o uso de [inlineformset](https://docs.djangoproject.com/en/3.1/ref/forms/models/#inlineformset-factory).

Este projeto é similar ao de [vendas](https://github.com/rg3915/vendas) onde temos essa modelagem como base.

![tables](https://raw.githubusercontent.com/rg3915/vendas/master/modelling/tables.jpg)

Mas vamos usar nosso próprio modelo simplificado.

![tabelas](tabelas.png)

## Objetivo

Nosso objetivo é desenhar essa tela:

![mockup](mockup.png)

## Técnica

Usaremos o [VueJS](https://vuejs.org/) via [CDN](https://cdn.jsdelivr.net/npm/vue/dist/vue.js) utilizando a técnica descrita no video [Django e VueJS #01 - arquivos estáticos via cdn](https://www.youtube.com/watch?v=KOMER5MhBlY), onde o VueJS será usado como arquivo estático dentro da pasta `/static/js/`.

Neste caso teremos conflito de delimitadores. Para resolver isso usamos o seguinte delimitador no VueJS:

```
${  }
```

Os estáticos do VueJS via CDN estão declarados em `base.html`.


## Este projeto foi feito com:

* [Python 3.8.2](https://www.python.org/)
* [Django 2.2.16](https://www.djangoproject.com/)
* [Bootstrap 4.0](https://getbootstrap.com/)
* [VueJS 2.6.11](https://vuejs.org/)

## Como rodar o projeto?

* Clone esse repositório.
* Crie um virtualenv com Python 3.
* Ative o virtualenv.
* Instale as dependências.
* Rode as migrações.

```
git clone https://github.com/rg3915/carrinho-de-compras-django-vuejs.git
cd carrinho-de-compras-django-vuejs
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python contrib/env_gen.py
python manage.py migrate
python manage.py create_data
python manage.py createsuperuser --username="admin" --email=""
python manage.py runserver
```


## Passo a passo

* Criar `nav.html`

```
mkdir myproject/core/templates/includes
touch myproject/core/templates/includes/nav.html
```

* Criar `base.html`

```
touch myproject/core/templates/base.html
```

* Criar `index.html`

```
touch myproject/core/templates/index.html
```

* Criar visualização para `shopping.html`

```python
# views.py
from django.shortcuts import render


def shopping(request):
    template_name = 'shopping.html'
    return render(request, template_name)
```

```python
# urls.py
...
urlpatterns = [
    path('shopping/', v.shopping, name='shopping'),
]
```

```
mkdir -p myproject/shopping/templates
touch myproject/shopping/templates/shopping.html
```

```html
{% extends "base.html" %}

{% block content %}

<div class="text-center">
  <div class="row">
    <div class="col-8">
      <form action="." method="POST">
        <input id="id_customer" class="form-control" type="text" placeholder="Cliente" />
      </form>

      <div class="mt-4">
        <table class="table table-hover table-borderless">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="mytable">
            <tr>
              <td>
                <input class="form-control" type="text" placeholder="Caneta azul" />
              </td>
              <td>
                <input class="form-control text-center" type="number" min="0" placeholder="16" />
              </td>
              <td>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">R$</span>
                  </div>
                  <input class="form-control" type="number" min="0" placeholder="2,05">
                </div>
              </td>
              <td>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">R$</span>
                  </div>
                  <input class="form-control" type="number" min="0" placeholder="32,80">
                </div>
              </td>
              <td>
                <button class="btn btn-success">
                  <i class="fa fa-plus"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <hr>

        <table class="table table-hover table-borderless mt-3">
          <tbody>
            <tr>
              <td>
                <input class="form-control" type="text" placeholder="Caneta azul" />
              </td>
              <td>
                <input class="form-control text-center" type="number" min="0" placeholder="16" />
              </td>
              <td>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">R$</span>
                  </div>
                  <input class="form-control" type="number" min="0" placeholder="2,05">
                </div>
              </td>
              <td>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">R$</span>
                  </div>
                  <input class="form-control" type="number" min="0" placeholder="32,80">
                </div>
              </td>
              <td>
                <button class="btn btn-link">
                  <i class="fa fa-close close"></i>
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <input class="form-control" type="text" placeholder="Caneta azul" />
              </td>
              <td>
                <input class="form-control text-center" type="number" min="0" placeholder="16" />
              </td>
              <td>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">R$</span>
                  </div>
                  <input class="form-control" type="number" min="0" placeholder="2,05">
                </div>
              </td>
              <td>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">R$</span>
                  </div>
                  <input class="form-control" type="number" min="0" placeholder="32,80">
                </div>
              </td>
              <td>
                <button class="btn btn-link">
                  <i class="fa fa-close close"></i>
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <input class="form-control" type="text" placeholder="Caneta azul" />
              </td>
              <td>
                <input class="form-control text-center" type="number" min="0" placeholder="16" />
              </td>
              <td>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">R$</span>
                  </div>
                  <input class="form-control" type="number" min="0" placeholder="2,05">
                </div>
              </td>
              <td>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">R$</span>
                  </div>
                  <input class="form-control" type="number" min="0" placeholder="32,80">
                </div>
              </td>
              <td>
                <button class="btn btn-link">
                  <i class="fa fa-close close"></i>
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <input class="form-control" type="text" placeholder="Caneta azul" />
              </td>
              <td>
                <input class="form-control text-center" type="number" min="0" placeholder="16" />
              </td>
              <td>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">R$</span>
                  </div>
                  <input class="form-control" type="number" min="0" placeholder="2,05">
                </div>
              </td>
              <td>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">R$</span>
                  </div>
                  <input class="form-control" type="number" min="0" placeholder="32,80">
                </div>
              </td>
              <td>
                <button class="btn btn-success">
                  <i class="fa fa-plus"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="lead">
              <th colspan="3" class="text-right">Total</th>
              <th class="text-left">R$ <span class="pull-right">125,38</span></th>
            </tr>
          </tfoot>
        </table>
      </div>

    </div>
  </div>
</div>

{% endblock content %}
```

```
mkdir -p myproject/core/static/{css,js}
touch myproject/core/static/css/style.css
touch myproject/core/static/js/app.js
```

Versão com ajustes de CSS:

```html
{% extends "base.html" %}
{% load static %}

{% block content %}

<div id="app" class="text-center">
  <div class="row">
    <div class="col-10">
      <form action="." method="POST">
        <input id="id_customer" class="form-control" type="text" placeholder="Cliente" />
      </form>

      <div class="mt-4">
        <table class="table table-hover table-borderless">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="mytable">
            <tr>
              <td class="w40">
                <input class="form-control" type="text" placeholder="Caneta azul" />
              </td>
              <td>
                <input class="form-control text-center" type="number" min="0" placeholder="16" />
              </td>
              <td>
                <div class="input-group mm-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">R$</span>
                  </div>
                  <input class="form-control" type="number" min="0" placeholder="2,05">
                </div>
              </td>
              <td class="w15">
                <div class="d-flex input-group mm-2">
                  <div>R$</div>
                  <div class="ml-auto">32,80</div>
                </div>
              </td>
              <td>
                <button class="btn btn-success">
                  <i class="fa fa-plus"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <hr>

        <table class="table table-hover table-borderless">
          <tbody>
            <tr v-for="cart in cartItems" :key="cart.id">
              <td class="w40">
                <input class="form-control" type="text" :value="[[ cart.product ]]" />
              </td>
              <td>
                <input class="form-control text-center" type="number" min="0" :value="[[ cart.quantity ]]" />
              </td>
              <td>
                <div class="input-group mm-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">R$</span>
                  </div>
                  <input class="form-control" type="number" min="0" step="0.01" :value="[[ cart.price ]]">
                </div>
              </td>
              <td class="w15">
                <div class="d-flex input-group mm-2">
                  <div>R$</div>
                  <div class="ml-auto">${ (cart.price * cart.quantity) | formatPrice }</div>
                </div>
              </td>
              <td>
                <button class="btn btn-link">
                  <i class="fa fa-close close"></i>
                </button>
              </td>
            </tr>

            <tr>
              <td class="w40">
                <input class="form-control" type="text" placeholder="Caneta azul" />
              </td>
              <td>
                <input class="form-control text-center" type="number" min="0" placeholder="16" />
              </td>
              <td>
                <div class="input-group mm-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">R$</span>
                  </div>
                  <input class="form-control" type="number" min="0" placeholder="2,05">
                </div>
              </td>
              <td class="w15">
                <div class="d-flex input-group mm-2">
                  <div>R$</div>
                  <div class="ml-auto">32,80</div>
                </div>
              </td>
              <td>
                <button class="btn btn-success">
                  <i class="fa fa-plus"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="lead">
              <th colspan="3" class="text-right">Total</th>
              <th class="text-left">R$ <span class="pull-right">${ cartValue | formatPrice }</span></th>
            </tr>
          </tfoot>
        </table>
      </div>

    </div>
  </div>
</div>

{% endblock content %}

{% block js %}
  <script src="{% static 'js/app.js' %}"></script>
{% endblock js %}
```


Adicione uma nova rota em `core/urls.py`

```python
    path('api/products/', v.api_product, name='api_product'),
```

Em `core/views.py`

```python
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
```

Em `shopping/models.py`

```python
class Product(models.Model):
    ...

    def to_dict(self):
        return {
            'value': self.pk,
            'text': self.name,
            'price': self.price
        }
```

Em `core/urls.py`

```python
    path('api/shopping-items/add/', v.api_shopping_items_add, name='api_shopping_items_add'),
```

