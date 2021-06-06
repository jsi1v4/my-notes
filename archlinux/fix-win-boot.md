# Fix Windows Boot

Inserir media de instalacao, em _troubleshoot/cmd_:

- `diskpart`
- `list volume`
- `sel volume {n}`: numero do volume _/efi_.
- `assign letter=B`: a particao _B_ corresponde ao _/efi_.
- `exit`: sair do diskpart.
- `bcdboot c:\windows /L en-US /s b: /F UEFI`: restaura o boot.
- `exit`: sair do cmd e reiniciar.

> No linux execute `grub-mkconfig -o /boot/grub/grub.cfg` para atualizar o menu de boot do grub.
