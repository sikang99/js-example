usage:
	@echo "usage: make [edit|web|run|kill|md]"

edit e:
	@echo "make (edit) [1|2|03]"

e03:
	vi test03.html

web w:
	open http://localhost:8080

run r:
	simplehttpserver &

kill k:
	killall simplehttpserver

install:
	npm install -g markdown

md:
	rm -f README.html
	md2html README.md > README.html
	