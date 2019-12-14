from django.urls import path

from . import views

urlpatterns = [
    # ex: /core/
    path('', views.index, name='index'),
    #сделать <str:slag>
    path('detail/<int:pk>/', views.detail, name='detail'),
    path('detail/<int:manga_id>/<int:chapter_id>/', views.reading, name='reading'),

    path('add', views.add, name='add'),
    
    path('add_manga', views.add_manga, name='add_manga'),
    path('add_chapter', views.add_chapter, name='add_chapter'),
    path('add_page', views.add_page, name='add_page'),

]