cd /root/prolinkmoon

#create python ENV
#virtualenv -p python3 envname

#enter to python ENV
source ./bin/activate

python3 script.py

sleep 5

rm index.html

mv new_index.html index.html

cp index.html temp/

mv temp/index.html temp/date-today.html

rm /var/www/prolinkmoon/airdrop/index.html

cp index.html /var/www/prolinkmoon/airdrop/

sudo systemctl restart nginx

sleep 5

#exit python ENV
deactivate