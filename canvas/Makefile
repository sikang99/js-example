#
# Makefile for canvas handling
#
usage:
	@echo "usage: make [edit]"

edit e:
	vi index.html

web w:
	simplehttpserver &
	open http://localhost:8080

kill k:
	pkill simplehttpserver


md:
	md2html README.md > README.html
