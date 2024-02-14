from django.http import JsonResponse
from django.template.loader import render_to_string


def navbar(request):
    ctx = {
        'css': 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
        'js': 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'
    }

    resp = ctx.copy()
    resp['html'] = render_to_string('navbar.html', ctx)
    return JsonResponse(resp)
