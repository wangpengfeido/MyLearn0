# 手动修改
vim /etc/hosts

# 自动追加
sudo sh -c "echo '127.0.0.1 test.wpf.com' >> /etc/hosts"
sudo sh -c "echo '127.0.0.1 test2.wpf.com' >> /etc/hosts"
sudo sh -c "echo '127.0.0.1 test3.wpf.com' >> /etc/hosts"
sudo sh -c "echo '127.0.0.1 test.wpf2.com' >> /etc/hosts"

# 自动修改
# sudo sed -i "s/127.0.0.1/127.0.0.2/" /etc/hosts

# PowerShell
# notepad C:\Windows\System32\drivers\etc\hosts


