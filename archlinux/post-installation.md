# Post Installation

Minha configuracao do Arch linux.

## Connect Internet

Apos logar como _root_. Seguir os passos:

- `cd /etc/netctl`
- `cp examples/ethernet-static my-network`
- `nano my-network`: edite a _Interface_ para _enp8s0_.
- `netctl enable my-network`
- `netctl start my-network`

## Firewall

- `pacman -S ufw`
- `enable ufw`
- `ufw default deny`

## Add User

- `pacman -S sudo zsh`
- `EDITOR=nano visudo`: descomentar linha do grupo _%wheel_ (usamos o grupo _wheel_ como sudoers).
- `useradd -m -G wheel,video,audio,storage -s /bin/zsh joseph`
- `passwd joseph`
- `exit`: sair e logar como _joseph_.

## Setup

- `sudo pacman -S git`: necessario utilizar git nos passos seguintes.
- `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`: instala oh-my-zsh.
- `git clone https://github.com/jsi1v4/dotfiles.git ~/projects/my/dotfiles`: clone my dotfiles.
- `sh ~/projects/my/dotfiles/install.sh`: install my dotfiles.
- `sudo pacman -S - < ~/.my-packages`: install my packages.

## Nvidia config

> Verificar busID com `lspci`.

- `sudo nvidia-xconfig --busid=PCI:9:0:0`
- `sudo mkinitcpio -P`: update the initramfs image.
- `sudo reboot now`: reboot para aplicar configuracao.
