# Convert Videos

Comandos para converter videos gratuitamente.

## Installation

```sh
# fedora (rmpfusion)
dnf install ffmpeg-free libavcodec-freeworld

# ubuntu
apt install ffmpeg
```

## How to use

```sh
# convert .webm to .mp4
ffmpeg -fflags +genpts -i {filename}.webm -r 24 {filename}.mp4

# convert .mp4 to .gif
ffmpeg -i {filename}.mp4 {filename}.gif
```

## Optimize Gifs

### Requeriments

```sh
# fedora
dnf install gifsicle

# ubuntu
apt install gifsicle
```

### How to use

```sh
# reduce to 256 colors
gifsicle -i {filename}.gif -O3 --colors 256 -o {filename}-opt.gif

# auto optimize
gifsicle -i {filename}.gif --optimize=3 -o {filename}-opt.gif
```
