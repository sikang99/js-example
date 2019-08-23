#
# Makefile for js-example
#
.PHONY: usage edit build run clean git
#----------------------------------------------------------------------------------
usage:
	@echo "usage: make [build|run]"
#----------------------------------------------------------------------------------
edit e:

build b:

run r:
	
clean:
#----------------------------------------------------------------------------------
git g:
	@echo "> make (git:g) [update|store]"
git-update gu:
	git add .
	git commit -a -m "update information"
	git push
git-store gs:
	git config credential.helper store
#----------------------------------------------------------------------------------


