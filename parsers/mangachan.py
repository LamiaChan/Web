import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.firefox.options import Options

import urllib.request
from urllib.parse import urlparse
import os
import os.path as pathj
import sys


def init_driver():
    options = Options()
    options.headless = True
    driver = webdriver.Firefox(options=options)
    driver.wait = WebDriverWait(driver, 5)
    return driver

def nextpage(driver):
    b = driver.find_element_by_link_text("Вперед")
    b.click()

def imgfromurl(url, path=''):
    o = urlparse(url)
    fformat = o.path[-3:]
    if fformat not in ['png', 'jpg', 'gif']:
        return
    parse_url = o.path.split('/')
    
    if not path.endswith("/") and path != '':
        path+="/"

    file_path = pathj.abspath(pathj.join(__file__ ,"../../manga_dirs/mangachan/" + path + parse_url[-1]))
    
    directory = os.path.dirname(file_path)
    if not os.path.exists(directory):
        os.makedirs(directory)

    urllib.request.urlretrieve(url,file_path)

def getimg(driver, path=''):
    try:
        img_e = driver.find_element_by_xpath('//div[@id="image"]/a/img')
        # Find the value of org?
        img_url = img_e.get_attribute("src")
        imgfromurl(img_url, path)
    except TimeoutException:
        print("Can not find picture in this page ")


def getpath(url):
    o = urlparse(url)
    parser_new_url = []
    parser_nurl = []
    parse_url = o.path.split('/')
    parse_url = list(filter(lambda x: x!='', parse_url)) # remove ''

    #parse_url new:
    parse_url_root = parse_url[1].split("-")
    for i in range(1, len(parse_url_root)):
        parser_new_url.append(parse_url_root[i])
    
    parser_new_url = '_'.join(parser_new_url)

    #parser_url volume and chapter and root value:
    parse_new_url_vol_and_ch_r = parser_new_url.split("_")

    parse_url_vol = parse_new_url_vol_and_ch_r[-2]

    parse_url_ch = parse_new_url_vol_and_ch_r[-1][:-5]

    parse_url_root_f = []

    for k in range(0, len(parse_new_url_vol_and_ch_r) - 2):
        parse_url_root_f.append(parse_new_url_vol_and_ch_r[k]) 
    
    parse_url_root_f = '_'.join(parse_url_root_f)

    parser_nurl.append(parse_url_root_f)
    parser_nurl.append(parse_url_vol)
    parser_nurl.append(parse_url_ch)

    return "/".join(parser_nurl)

def get_href_from_txt():
    f = open('manga_title.txt', 'r')
    return f.read()
    
def lookup(driver, query):
    
    driver.get(query)
    path = getpath(query)

    while(True):
        path = getpath(query)
        getimg(driver, path)
        nextpage(driver)
        query = driver.current_url

if __name__ == "__main__":
    driver = init_driver()
    lookup(driver, get_href_from_txt())#"https://manga-chan.me/online/373720-girl-the-wilds_v0_ch1.html#page=1")
    time.sleep(1)
    driver.quit()