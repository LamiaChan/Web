from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from .models import Manga, Page, Source, Chapter
import os
import os.path as pathj
import sys

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

def add_page_select_manga(request):
    errors = []
    form = {}
    mangas = Manga.objects.all()

    if request.POST:
        form['manga_name'] = request.POST.get('manga_name')
         
        if form['manga_name'] is None:
            errors.append('Выберете мангу')

        if not errors:
            url ='/{0}/{1}/{2}'.format('core', 'add_page_select_chapter', form['manga_name'])
            return HttpResponseRedirect(url)

    
    return render(request, 'add_page_select_manga.html', { 'mangas': mangas, 'errors': errors, 'form': form })


def add_page_select_chapter(request, manga_id):
    errors = []
    form = {}
    chapters = Chapter.objects.filter(manga_id=manga_id)

    if request.POST:
        form['ch_name'] = request.POST.get('ch_name')
         
        if form['ch_name'] is None:
            errors.append('Выберете главу')

        if not errors:
            url ='/{0}/{1}/{2}/{3}'.format('core', 'add_page', manga_id, form['ch_name'])
            return HttpResponseRedirect(url)

    
    return render(request, 'add_page_select_chapter.html', { 'chapters': chapters, 'errors': errors, 'form': form })


def add_page(request, manga_id, chapter_id):
    errors = []
    form = {}

    if request.POST:
        form['images'] = request.POST.getlist('images[]')
         
        if form['images'] is None:
            errors.append('Загрузите файлы')

        if not errors:
            for i in range(0, len(form['images'])):
                dirm = '/manga/' + form['images'][i]
                #page = Page(number=i+1, image=dirm, chapter_id=Chapter.objects.get(id=chapter_id).id)
                #page.save()
                '''
                with open('backend', 'wb+') as destination:
                    for chunk in form['images'][i].chunks():
                        destination.write(chunk)
                '''
                # доделать
                # file_path = pathj.abspath(pathj.join(__file__ ,"../../media/manga/" + form['images'][i]))
                

            return HttpResponse('Манга созданна')

    
    return render(request, 'add_page.html', {'errors': errors, 'form': form })

