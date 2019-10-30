from bs4 import BeautifulSoup
import requests
import re
from urllib.parse import urljoin
import ast
import urllib.request
import time
from random import choice, uniform
from time import sleep
from urllib.request import urlretrieve
import os


def get_html(url):
    r = requests.get(url)
    return r.text

def get_list_presentation(html):
    j = 0

    soup = BeautifulSoup(html, 'lxml')
    for i in soup.find_all('div', class_='simple-tile'):
        href = 'http://readmanga.me' + i.a.get("href")
        print("{0}: {1} : {2}".format(i.a.div.text, href, j))
        j = j + 1 

def get_manga_chapters(html):
    soup = BeautifulSoup(html, 'lxml')

    url_array = []

    for option in soup.find_all('option'):
        #print (('value: {}, text: {}').format(option['value'], option.text))
        url_array.append(option['value'][:-5])

    return url_array[::-1]

def get_url_images_from_chapter(url: str) -> list:
    rs = requests.get(url)

    re_expr = r'init\(.*(\[\[.+\]\]).*\)'

    match = re.search(re_expr, rs.text)
    if not match:
        raise Exception('Не получилось из страницы вытащить список картинок главы. '
                        'Используемое регулярное выражение: ', re_expr)

    json_text = match.group(1)
    json_data = ast.literal_eval(json_text)

    return [urljoin(data_url[1], data_url[0] + data_url[2]) for data_url in json_data]

def download_images(urls, array):
    
    for i in range(0, len(array)):
        normal_url = ''.join(urls[i])
        print("parsing: " + str(array[i]), "url : " + normal_url)
        name_of_new_path = "tomo_chan_is_a_girl_" + str(i)
        urllib.request.urlretrieve(normal_url, name_of_new_path + ".jpg")
        time.sleep(30) 
    


def main():
    url = 'http://readmanga.me/'
    url_manga = 'tomo_chan_is_a_girl_/vol1/1'
    img_urls = []


    # Выгрузка картинок:

   
    chapters_array = get_manga_chapters(get_html(url + url_manga))
    #champ_url = get_url_images_from_chapter(url + chapters_array)

    for i in range(0, len(chapters_array)):
        urls_to_img = url[:-1] + chapters_array[i]
        img_urls.append(get_url_images_from_chapter(urls_to_img[i]))
        #print(img_urls)
    
    download_images(img_urls, img_urls)

    #print(chapters_array[k])
       
        
    


if __name__ == '__main__':
    main()