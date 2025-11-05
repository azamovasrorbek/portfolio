from django.shortcuts import render
from django.http import JsonResponse
from .forms import UserMessageForm, CommentForm
from django.utils import timezone
from .models import Comment


def index(request):
    if request.method == "POST" and request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save()
            return JsonResponse({'status': 'success', 'name': comment.name})
        return JsonResponse({'status': 'error', 'errors': form.errors})

    # GET request uchun
    form = CommentForm()
    return render(request, 'app/index.html', {'form': form})


def about(request):
    return render(request, 'app/about.html')


def research(request):
    return render(request, 'app/research.html')


def prototypes(request):
    return render(request, 'app/gallery.html')


def contact(request):
    if request.method == "POST" and request.headers.get('x-requested-with') == 'XMLHttpRequest':
        form = UserMessageForm(request.POST)
        if form.is_valid():
            msg = form.save()
            return JsonResponse({'status': 'success', 'name': msg.name})
        return JsonResponse({'status': 'error', 'errors': form.errors})

    form = UserMessageForm()
    return render(request, 'app/contact.html', {'form': form})


def gmail_view(request):
    return render(request, 'app/gmail.html', {'current_year': timezone.now().year})