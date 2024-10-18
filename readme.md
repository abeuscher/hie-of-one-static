Print dir:
find . -not -path '_/node_modules/_' -not -path '_/dist/_' -not -path '_/.git/_' -print | sed -e "s;[^/]\*/;|\_**\_;g;s;\_\_**|;
|;g"
