from django.shortcuts import render


def shopping(request):
    template_name = 'shopping.html'
    context = {}
    return render(request, template_name, context)
