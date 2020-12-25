# carrinho-de-compras-django-vuejs

Este projeto tem por objetivo experimentar o uso de [VueJS](https://vuejs.org/) junto com [Django](https://www.djangoproject.com/) para simular um carrinho de compras com a intenção de eliminar o uso de [inlineformset](https://docs.djangoproject.com/en/3.1/ref/forms/models/#inlineformset-factory).

Este projeto é similar ao de [vendas](https://github.com/rg3915/vendas) onde temos essa modelagem como base.

![tables](https://raw.githubusercontent.com/rg3915/vendas/master/modelling/tables.jpg)


## Técnica

Usaremos o [VueJS](https://vuejs.org/) via CDN(https://cdn.jsdelivr.net/npm/vue/dist/vue.js) utilizando a técnica descrita no video [Django e VueJS #01 - arquivos estáticos via cdn](https://www.youtube.com/watch?v=KOMER5MhBlY), onde o VueJS será usado como arquivo estático dentro da pasta `/static/js/`.

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