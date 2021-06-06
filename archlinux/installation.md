# Installation

Manual de instalacao do Arch linux.

## Connect Internet

Para se conectar a internet podemos usar o pacote `iwctl`. Os seguintes comandos podem ajudar:

- `device list`: list network devices (copy name).
- `station {name} scan`: localiza todas as conexoes wifi disponiveis.
- `station {name} get-networks`: mostra as conexoes wifi disponiveis (SSID).
- `station {name} connect {SSID/wifi name}`

> Se a conexao for a cabo, podemos pular esta configuracao!

Teste a conexao com o comando `ping archlinux.org`.

## Set Timezone

Para ajustar o fuso horario, caso necessario:

- `timedatectl set-timezone America/Sao_Paulo`
- `timedatectl status`: mostra a configuracao atual.

## Disk

### Partition

Para listar todos os discos disponiveis, usamos o pacote `fdisk -l`. E os seguintes comandos para set ter uma configuracao minima necessaria:

> Neste caso utilizarei o disco _/dev/sda_, como particao de boot o _/dev/sda1_ e o sistema/root no _/dev/sda2_. Sem recurso _swap_ ou separar a _home_ do root.

- `cfdisk /dev/sda`: o pacote _cfdisk_ possibilita particionar o disco conforme descrito na observacao acima!
- `mkfs.fat -F32 /dev/sda1`
- `mkfs.ext4 /dev/sda2`

### Mount

- `mount /dev/sda2 /mnt`
- `mkdir /mnt/efi`
- `mount /dev/sda1 /mnt/efi`

## Install base

- `rmirror` : TODO/DEV finalizar _rmirror_ para ajudar atualizar o mirrorlist com os servidores mais proximos/rapidos.
- `pacstrap /mnt base linux linux-firmware`: Instala os pacotes base do sistema.
- `genfstab -U /mnt >> /mnt/etc/fstab`: salva a configuracao de particionamento de disco.

## System Config

> No meu caso utilizo o timezone de Sao Paulo/Brazil e como linguagem o en-US.

- `arch-chroot /mnt`: logamos no sistema, para realizar as configuracoes de boot.
- `ln -sf /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime`: seleciona o timezone que iremos utilizar.
- `hwclock --systohc`: atualiza o horario do computador.
- `pacman -S nano`: utilizamos o pacote _nano_ na etapa abaixo.
- `nano /etc/locale.gen` e descomente a linha da linguagem _en-US_.
- `locale-gen`: atualiza a linguagem do sistema.
- `echo 'LANG=en_US.UTF-8' > /etc/locale.conf`: salva a configuracao.
- `echo 'KEYMAP=br-latin1-us' > /etc/vconsole.conf`: salva o layout do teclado.

### Network

- `echo '{name}' > /etc/hostname`: nome do computador.
- `nano /etc/hosts`: configure os hosts.

```
127.0.0.1	localhost
::1		        localhost
127.0.1.1	{name}.localdomain	{name}
```

### Boot

- `mkinitcpio -P`: create the initramfs image.
- `pacman -S \`: instalar os pacotes abaixo:

```
(amd-ucode | intel-ucode) \
grub \
efibootmgr \
os-prober \
ntfs-3g \
netctl \
dhcpcd
```

- `grub-install --target=x86_64-efi --efi-directory=/efi --bootloader-id=ArchLinux`
- `grub-mkconfig -o /boot/grub/grub.cfg`: salva configuracao de boot.
- `passwd`: configure a senha do usuario root.
- `exit`: desconectamos do sistema base.
- `umount /mnt/efi && umount /mnt && reboot now`: reiniciamos para testar o boot.
