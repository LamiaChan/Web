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

def get_zip_urls(html):
    td_hrefs = []

    soup = BeautifulSoup(html, 'lxml')
    for i in soup.find_all('tr'):
        td_href = i.a.get('href')
        td_hrefs.append(td_href)
    
    return td_hrefs

    


def main():
    url = 'https://manga-chan.me/download/'
    url_manga = '33-girl-the-wilds.html'

    zips = get_zip_urls(get_html(url + url_manga))

    for i in range(4, len(zips) ):
        print(zips[i])
        
    #print(td_href)
       
        
    


if __name__ == '__main__':
    main()