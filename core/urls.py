from django.urls import path

from . import views

urlpatterns = [
    # ex: /core/
    path('', views.index, name='index'),
    #сделать <str:slag>
    path('detail/<int:pk>/', views.detail, name='detail'),
    path('detail/<int:manga_id>/<int:chapter_id>/', views.reading, name='reading'),

]