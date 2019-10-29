from bs4 import BeautifulSoup
import requests

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

def get_manga(html):
    soup = BeautifulSoup(html, 'lxml')

    for option in soup.find_all('option'):
        print (('value: {}, text: {}').format(option['value'], option.text))
    
    
    '''for i in soup.find('select', id='chapterSelectorSelect'):
        print(i['value'])'''

def main():
    url = 'http://readmanga.me/'

    url_manga = 'http://readmanga.me/tomo_chan_is_a_girl_/vol1/1'


    #get_list_presentation(get_html(url + 'list/presentation/'))
    get_manga(get_html(url_manga))


if __name__ == '__main__':
    main()