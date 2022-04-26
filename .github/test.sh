#!/bin/sh
export today=`date "+%Y%m%d"`
password="2NQNWJFDQQKO60LPVWYFSCYNVG2LY4L6M2Z7RW6X9TEGSDO9Z5"
git clone -b minutes git@github.com:Haur514/mand.git
echo "{" >~/.hackmd/config.json
echo "  \"accessToken\": \"${password}\"" >>~/.hackmd/config.json
echo "}" >>~/.hackmd/config.json
hackmd-cli login
hackmd-cli export --noteId=g4vYVG5kQ3G9HoH5WNGvZg > ./mand/report.md
cd mand
git add report.md
git commit -m "$today"
git push
