#
# Makefile for module test of javascript
#
usage:
	@echo "usage: make [web|kill]"

web w:
	open http://localhost:8080
	simplehttpserver -port=8080 &

kill k:
	pkill simplehttpserver
