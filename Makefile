SHELL:=/bin/bash

all: images hugo

images:
	bash compile_images.sh

serve: images
	hugo server --enableGitInfo

hugo:
	hugo --enableGitInfo --minify