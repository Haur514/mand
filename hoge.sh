curl "https://api.hackmd.io/v1/me" -H "Authorization: Bearer 2NQNWJFDQQKO60LPVWYFSCYNVG2LY4L6M2Z7RW6X9TEGSDO9Z5"


curl "https://api.hackmd.io/v1/notes" -H "Authorization: Bearer 2NQNWJFDQQKO60LPVWYFSCYNVG2LY4L6M2Z7RW6X9TEGSDO9Z5"


curl "https://api.hackmd.io/v1/notes/KuNSdSkcS-u0W2LM5ExSzA" -H "Authorization: Bearer 2NQNWJFDQQKO60LPVWYFSCYNVG2LY4L6M2Z7RW6X9TEGSDO9Z5"


curl "https://api.hackmd.io/v1/notes/KuNSdSkcS-u0W2LM5ExSzA" -H "Authorization: Bearer 2NQNWJFDQQKO60LPVWYFSCYNVG2LY4L6M2Z7RW6X9TEGSDO9Z5" > hackmd_test.json



cat hackmd_test.json | jq -r '.content'


curl "https://api.hackmd.io/v1/notes/KuNSdSkcS-u0W2LM5ExSzA" -H "Authorization: Bearer 2NQNWJFDQQKO60LPVWYFSCYNVG2LY4L6M2Z7RW6X9TEGSDO9Z5" | jq -r '.content'