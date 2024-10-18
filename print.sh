#!/bin/bash

find . \
-not -path '*/.git/*' \
-not -path '*/node_modules/*' \
-not -path '*/dist/*' \
-not -path '*/.sass-cache/*' \
-not -name 'npm-debug.log*' \
-not -name 'yarn-debug.log*' \
-not -name 'yarn-error.log*' \
-not -name '.env' \
-not -name '.env.local' \
-not -name '.env.*.local' \
-not -name '.DS_Store' \
-not -name 'Thumbs.db' \
-not -path '*/.idea/*' \
-not -path '*/.vscode/*' \
-not -name '*.swp' \
-not -name '*.swo' \
-not -name 'package-lock.json' \
-print | sed -e "s;[^/]*/;|____;g;s;____|; |;g"
