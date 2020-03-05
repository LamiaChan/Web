#!/bin/bash
cd /var/www/html/Lamia_chan_web
eval $(ssh-agent -s)
ssh-add /root/.ssh/gitlab_ssh
git checkout master
git pull origin master

echo "docker-compose!"
docker-compose pull
docker-compose down
docker-compose up -d
