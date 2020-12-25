import csv
from django.core.management.base import BaseCommand
from myproject.shopping.models import Product


def csv_to_list(filename: str) -> list:
    '''
    Lê um csv e retorna um OrderedDict.
    Créditos para Rafael Henrique
    https://bit.ly/2FLDHsH
    '''
    with open(filename) as csv_file:
        reader = csv.DictReader(csv_file, delimiter=',')
        csv_data = [line for line in reader]
    return csv_data


def save_data(data):
    '''
    Salva os dados no banco.
    '''
    aux = []
    for item in data:
        name = item.get('produto')
        price = item.get('preco')
        obj = Product(
            name=name,
            price=price,
        )
        aux.append(obj)
    Product.objects.bulk_create(aux)


class Command(BaseCommand):
    help = 'Importa os produtos.'

    def handle(self, *args, **options):
        data = csv_to_list('fix/produtos.csv')
        save_data(data)
