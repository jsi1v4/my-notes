# Installation

Manual de instalacao do Docker.

## Fedora

```sh
sudo dnf -y install dnf-plugins-core
sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

### Pacotes necessarios

```sh
sudo dnf install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

## How to use

```sh
sudo systemctl start docker
```

```sh
# testing
sudo docker run hello-world
```

## Permissions

```sh
sudo groupadd docker

sudo usermod -aG docker $USER

newgrp docker
```

```sh
# testing
docker run hello-world
```
