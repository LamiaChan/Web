from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from .models import Manga
from .models import Page
from .models import Chapter
from .models import Source


def index(request):
    manga_list = []
    #page = Page.objects.all()
    manga = Manga.objects.all()

    '''
    page = Page.objects.values_list('chapter_id', flat=True)
    for pages in page:
        chapter = Chapter.objects.filter(id=pages).values_list('manga_id', flat=True)
        for chapters in chapter:
            manga = Manga.objects.filter(id=chapters)
            manga_list.append(manga)
    '''

    return render(request, "index.html", {"manga": manga})

def detail(request, pk):
    pages = []
    manga = get_object_or_404(Manga, pk=pk)
    chapter = Chapter.objects.filter(manga_id=pk)

    return render(request, 'detail.html', {'manga': manga, 'chapter': chapter})

def reading(request, manga_id, chapter_id):
    page = Page.objects.filter(chapter_id=chapter_id)

    return render(request, 'reading.html', {'page': page, 'manga_id': manga_id})

def add_manga(request):
    errors = []
    form = {}
    if request.POST:
         
        form['manga_name'] = request.POST.get('manga_name')
        form['discription'] = request.POST.get('discription')
         
        if not form['manga_name']:
            errors.append('Заполните название')
        if not form['discription']:
            errors.append('Заполните описание')
             
        if not errors:
            # ... сохранение данных в базу
            return HttpResponse('Манга созданна')
         
    return render(request, 'add_manga.html', {'errors': errors, 'form':form})

