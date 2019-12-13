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

def add(request):
    return render(request, 'add.html')

def add_manga(request):
    errors = []
    form = {}
    if request.POST:
         
        form['manga_name'] = request.POST.get('manga_name')
        form['discription'] = request.POST.get('discription')
        form['source'] = request.POST.get('source')
         
        if not form['manga_name']:
            errors.append('Заполните название')
        if not form['discription']:
            errors.append('Заполните описание')
        if not form['source']:
            errors.append('Заполните источник')
             
        if not errors:
            manga = Manga(title=form['manga_name'], description=form['discription'])
            manga.save()
            return HttpResponse('Манга созданна')
         
    return render(request, 'add_manga.html', {'errors': errors, 'form': form})

def add_chapter(request):
    errors = []
    form = {}
    mangas = Manga.objects.all()

    if request.POST:
         
        form['manga_name'] = request.POST.get('manga_name')
        form['title'] = request.POST.get('title')
         
        if not form['manga_name']:
            errors.append('Выберете мангу')
        if not form['title']:
            errors.append('Заполните название главы')
             
        if not errors:
            chapter = Chapter(manga=Manga.objects.get(id=form['manga_name']), title=form['title'])
            chapter.save()
            #print(form['manga_name'])
            return HttpResponse('глава созданна')

    
    return render(request, 'add_chapter.html', { 'mangas': mangas, 'errors': errors, 'form': form })

def add_page(request):
    errors = []
    form = {}
    mangas = Manga.objects.all()

    if request.POST:
         
        form['images'] = request.POST.get('manga_name')
        #form['title'] = request.POST.get('title')
         
        if not form['images']:
            errors.append('Выберете мангу')
        '''
        if not form['title']:
            errors.append('Заполните название главы')
        '''

        if not errors:
            #chapter = Chapter(manga=Manga.objects.get(id=form['manga_name']), title=form['title'])
            #chapter.save()
            print(form['images'])
            #return HttpResponse('глава созданна')

    
    return render(request, 'add_page.html', { 'mangas': mangas, 'errors': errors, 'form': form })
