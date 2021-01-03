from django.shortcuts import render


def shopping(request):
    template_name = 'shopping.html'
    return render(request, template_name)
