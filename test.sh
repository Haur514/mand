#!/bin/sh
password="2NQNWJFDQQKO60LPVWYFSCYNVG2LY4L6M2Z7RW6X9TEGSDO9Z5"
echo "{" >~/.hackmd/config.json
echo "  \"accessToken\": \"${password}\"" >>~/.hackmd/config.json
echo "}" >>~/.hackmd/config.json
hackmd-cli login
hackmd-cli export --noteId=g4vYVG5kQ3G9HoH5WNGvZg > report.md
git add report.md
git commit -m "レポート追加するだけ"
git push