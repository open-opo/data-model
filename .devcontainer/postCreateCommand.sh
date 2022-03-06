#!/bin/sh
npm install -g npm@latest
npm install

cat >>.git/hooks/pre-push <<EOF
# This is required somewhere in your script to accept user input from the keyboard.
exec < /dev/tty
trunk check --trigger=git-push
trunk fmt --trigger=git-push
EOF
