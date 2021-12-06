#!/bin/sh  
npm run build

sleep 2

eval `ssh-agent -s`
ssh-add ~/.ssh/id_rsa

rsync -e "ssh -p 10022" -rcvPz dist/* root@47.74.255.117:~/web_baf

ssh -p 10022 root@47.74.255.117 "rsync -r ~/web_baf/ ixx-www-1:~/baf"


 