cd /root/prolinkmoon

#create python ENV
# python3 -m venv venv

#enter to python ENV
#source ./bin/activate

#enter to python ENV
source venv/bin/activate

python3 script.py

sleep 5

rm index.html

mv new_index.html index.html

cp index.html temp/"$(date +'%Y-%m-%d_%H-%M-%S')_index.html"

rm /var/www/prolinkmoon.com/airdrop/index.html

cp index.html /var/www/prolinkmoon.com/airdrop/

sudo systemctl restart nginx

sleep 5

#exit python ENV
deactivate