import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

import urllib.request
from urllib.parse import urlparse
import os

def init_driver():
    driver = webdriver.Firefox()
    driver.wait = WebDriverWait(driver, 5)
    return driver

def auth_in_site(driver, username, password):
    #auth on readmanga
    driver.get("https://grouple.co/internal/auth/login?quiet=false&targetUri=http%3A%2F%2Freadmanga.me%2Finternal%2Fauth%3FtargetUri%3D%252F")
    div_form = driver.find_element_by_css_selector(".col-md-6.col-lg-offset-1.col-lg-4")
    auth_form = div_form.find_element_by_tag_name("form")

    auth_form.find_element_by_id('username').send_keys(username)
    auth_form.find_element_by_id('password').send_keys(password)
    auth_form.submit()
    time.sleep(2)
    
def imgfromurl(url, path=''):
    o = urlparse(url)
    fformat = o.path[-3:]
    if fformat not in ['png', 'jpg', 'gif']:
        return
    parse_url = o.path.split('/')
    
    if not path.endswith("/") and path != '':
        path+="/"

    file_path = path + parse_url[-1]
    
    directory = os.path.dirname(file_path)
    if not os.path.exists(directory):
        os.makedirs(directory)

    urllib.request.urlretrieve(url,file_path)
    


def getimg(driver, path=''):
    try:
        img_e = driver.find_element_by_id('mangaPicture')
        # Find the value of org?
        img_url = img_e.get_attribute("src")
        print(img_url)
        imgfromurl(img_url, path)
    except TimeoutException:
        print("Can not find picture in this page ")


def getpath(url):
    o = urlparse(url)
    parse_url = o.path.split('/')
    parse_url = list(filter(lambda x: x!='', parse_url)) # remove ''
    print(parse_url)
    return "/".join(parse_url)


def nextpage(driver):
    b = driver.find_element_by_css_selector(".nextButton.btn.btn-primary.long")
    b.click()

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
    #auth_in_site(driver, "name", "pass")
    lookup(driver,"http://readmanga.me/wolf_and_spice/vol1/1?mtr=1")
    time.sleep(1)
    driver.quit()
