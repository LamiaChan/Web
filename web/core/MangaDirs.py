import os
import os.path as pathj
import sys
import re

dirs_array = []
#files_in_dirs = []


for filename in os.listdir('../../manga_dirs'):
    if re.search(r'.txt', filename):
        continue
    else: 
        dirs_array.append(filename)

print(dirs_array)

for mangasite in dirs_array:
    for files in os.listdir('../../manga_dirs' + '/' + mangasite):
        if re.search(r'.txt', files):
            continue
        else:
            print(mangasite, ': ', files)

