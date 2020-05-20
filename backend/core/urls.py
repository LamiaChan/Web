from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('detail/<int:pk>/', views.detail, name='detail'),
    path('detail/<int:manga_id>/<int:chapter_id>/', views.reading, name='reading'),

    path('add', views.add, name='add'),
    
    path('add_manga', views.add_manga, name='add_manga'),
    path('add_chapter', views.add_chapter, name='add_chapter'),
    path('add_page_select_manga', views.add_page_select_manga, name='add_page_select_manga'),
    path('add_page_select_chapter/<int:manga_id>', views.add_page_select_chapter, name='add_page_select_chapter'),
    path('add_page/<int:manga_id>/<int:chapter_id>', views.add_page, name='add_page'),
    path('updater', views.updater, name='updater')

]