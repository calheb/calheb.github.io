+++
author = "Caleb Hebert"
title = "Configuring OpenSSH"
date = "2023-09-03"
description = "How to Install and use Ventoy"
tags = [
    "misc",
    "ssh",
]
+++


<!-- ![A building](/images/building.png " ") -->
![:right](/images/howto_ssh/OpenBSD_logo.png " ") 

This is a simple tutorial to set up SSH on a Debian server.

[OpenSSH](https://github.com/openssh/openssh-portable) is a complete implementation of the SSH protocol (version 2) for secure remote login, command execution and file transfer. It includes a client ssh and server sshd, file transfer utilities scp and sftp as well as tools for key generation (ssh-keygen), run-time key storage (ssh-agent) and a number of supporting programs.

I'll be using OpenSSH to remotely manage and transfer files to my media server.

### First, ensure your system is up to date.
```
sudo apt update && sudo apt upgrade 
```
### Next, install OpenSSH Server.
```
sudo apt-get install openssh-server
```

### Check the status of the SSH service.
After installing, the SSH service should start automatically but you can verify this by running:
```
sudo systemctl status ssh 
```

If the service is not running, you can start it by running:
```
sudo systemctl start ssh
```
### Configuring SSH and ufw Firewall.
Now that SSH is installed and the service is running, let's go over some config changes.

- Disable root login through SSH.
- Change default SSH port.
- Allowing that port through the firewall.
- Using SSH keys for authentication.

### Disabling root login.
Open the sshd_config file with your text editor of choice. Nano or gedit should be default installed options, though vim is preferred.

```
sudo vim etc/ssh/sshd_config
```

Locate the "PermitRootLogin" line and set it to "no"

```
PermitRootLogin no 
```

Also set ChallengeResponseAuthentication and UsePAM to no

```
ChallengeResponseAuthentication no
UsePAM no 
```
### Now, let's change the default port for SSH to run on.
Note that security through obscurity is not a valid form of security, but this will reduce the amount of spam in log files from automated attempts.

```
sudo vim /etc/ssh/sshd_config 
```

Locate the line containing "#Port 22", and change this to a port of your choosing, ideally between 1024-65535. Make sure to choose a port that isn't already in use by another service on your machine.

```
#Port 22
```
Becomes
```
Port 1337
```
Replace 1337 with your actual port number.

### Now let's allow this port through the firewall.
First, if you haven't installed Uncomplicated Firewall, do so.

```
sudo apt install ufw 
```
Enable it with:
```
sudo ufw enable 
```
Next, allow SSH on the new port.
```
sudo ufw allow 1337/tcp 
```

Again, remember to substitute your actual port number here.
### SSH remote login.
Verify that you can SSH in to your server from your client PC.
```
ssh -p 1337 username@your_server_ip 
```

Replace the port, username, and IP address with your actual infomation.

You can obtain your server's local network IP address with the following command:
```
ip addr show 
```
You may also need to restart the SSH service to apply the new config.
```
sudo systemctl restart ssh 
```
After entering the password for the user account, you should now be able to remotely access the server through SSH.
### Using SSH keys for Authentication

Generate an SSH key pair on your local machine with

```
ssh-keygen -t rsa -b 4096 
```

Copy the public key from your local machine to the server (the default location for the key should be ~/.ssh/id_rsa.pub).

```
ssh-copy-id username@your_server_ip 
```
Verify that your key is working by logging in remotely again.
```
ssh -p 1337 username@your_server_ip 
```
If you set a password for you key on creation, you will be prompted to enter it now.

Once you are able to authenticate via SSH key, you may disable password authentication in the config file for additional security.

```
sudo vim /etc/ssh/sshd_config
```
And set the PasswordAuthentication line to no.
```
PasswordAuthentication no 
```

### Optionally, we can set up fail2ban for SSH.
```
sudo apt-get install fail2ban 
```

First, copy the default fail2ban config file to a new file that we can modify.
```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local 
```
Open the jail.local file and add the following configurations under the [sshd] section.
```
sudo vim /etc/fail2ban/jail.local 
```
```
[sshd]
enabled = true
port = 4096
filter = sshd
maxretry = 3
bantime = 86400 
```
Lastly, restart SSH and fail2ban to apply the latest config changes.

```
sudo systemctl restart ssh && sudo systemctl restart fail2ban 
```

{{< css.inline >}}
<style>
.canon { background: white; width: 100%; height: auto; }
</style>
{{< /css.inline >}}
