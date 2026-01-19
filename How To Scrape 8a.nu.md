---
title: 🧑‍💻How to Scrape 8a👩‍💻
date: 01.19.2026
draft: false
---
Recently, I found an improved workflow two step process to scrape `8a.nu`
1. In Chrome, the trick is to go to the Developer Tools / Network tab, then find the api/fetch calls you want. Now, right click and copy the cURL.

2. Next, you will need to install this [tool](https://github.com/curlconverter/curlconverter). Basically, replace `curl` with `curlconvert` in bash terminal. Then, you have python code that will scrape the api with the necessary cookies.
## Example
This is how to scrape the current rankings. The `curl` (substituting `curlconvert`) command is shown first
```bash 
curlconvert 'https://www.8a.nu/api/dotnet/rankings' \

-H 'accept: application/json' \

-H 'accept-language: en-US,en;q=0.9' \

-H 'content-type: application/json' \

-b 'color-value=system; CookieConsent={stamp:%27-1%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27implied%27%2Cver:1%2Cutc:1768807468088%2Cregion:%27CH%27}; _ga=GA1.1.1440420442.1768807468; cf_chl_rc_ni=1; nu8a_session=e950282c-a167-4e43-b520-dfb68609c196; ranking-sub-navigation__recent-category=bouldering; _ga_J0GPW6391N=GS2.1.s1768807467$o1$g1$t1768808613$j21$l0$h0' \

-H 'origin: https://www.8a.nu' \

-H 'priority: u=1, i' \

-H 'referer: https://www.8a.nu/ranking/bouldering?page=2' \

-H 'sec-ch-ua: "Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"' \

-H 'sec-ch-ua-arch: ""' \

-H 'sec-ch-ua-bitness: ""' \

-H 'sec-ch-ua-full-version: ""' \

-H 'sec-ch-ua-full-version-list;' \

-H 'sec-ch-ua-mobile: ?0' \

-H 'sec-ch-ua-model: ""' \

-H 'sec-ch-ua-platform: "macOS"' \

-H 'sec-ch-ua-platform-version: ""' \

-H 'sec-fetch-dest: empty' \

-H 'sec-fetch-mode: cors' \

-H 'sec-fetch-site: same-origin' \

-H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \

--data-raw '{"category":"bouldering","pageIndex":1,"gender":"combined","style":"combined","country":"","age":"combined","time":"lastyear","topAscents":"top10"}'

```
Next, the python code which gets you the json file: 
```python
import requests, json

cookies = {

'__gads': 'ID=4841b6b016939eb5:T=1748470674:RT=1753806449:S=ALNI_MaVloucGP5YtFgYsjgLitFrlt_qiQ',

'__gpi': 'UID=000010cf1b0886f5:T=1748470674:RT=1753806449:S=ALNI_MbnJSASD6Sr9nyilMJvh6EfIyrgpQ',

'CookieConsent': '{stamp:%27doOh9ANTMkq4pf+MS17fMYa4XG4ruTzEhhTn8PVPyryqpzKuHxIhIw==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1763633301488%2Cregion:%27at%27}',

'color-value': 'system',

'user-ascents__recent-filters-bouldering': '%7B%22orderFilter%22%3A%22grade_desc%22%2C%22currentYearFilter%22%3A%222026%22%7D',

'ranking-sub-navigation__recent-category': 'bouldering',

'ranking-category___en_ranking-filter__recent-bouldering-rankings-filters': '%7B%22topAscents%22%3A%22top10%22%2C%22gender%22%3A%22male%22%2C%22style%22%3A%22combined%22%2C%22time%22%3A%22alltime%22%2C%22age%22%3A%22combined%22%2C%22country%22%3A%22%22%7D',

'global-search__recent-searches': '%5B%22Adam%20Ondra%22%2C%22N%C3%96%22%5D',

'nu8a_session': 'f4d80cd3-ed8d-4f05-a69f-3dcac1cef1e1',

}

  

headers = {

'accept': 'application/json',

'accept-language': 'en-US,en;q=0.9',

'content-type': 'application/json',

'origin': 'https://www.8a.nu',

'priority': 'u=1, i',

'referer': 'https://www.8a.nu/ranking/bouldering?topAscents=top10&gender=male&style=combined&time=alltime&age=combined&country=',

'sec-ch-ua': '"Chromium";v="143", "Not A(Brand";v="24"',

'sec-ch-ua-mobile': '?0',

'sec-ch-ua-platform': '"macOS"',

'sec-fetch-dest': 'empty',

'sec-fetch-mode': 'cors',

'sec-fetch-site': 'same-origin',

'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36',

# 'cookie': '__gads=ID=4841b6b016939eb5:T=1748470674:RT=1753806449:S=ALNI_MaVloucGP5YtFgYsjgLitFrlt_qiQ; __gpi=UID=000010cf1b0886f5:T=1748470674:RT=1753806449:S=ALNI_MbnJSASD6Sr9nyilMJvh6EfIyrgpQ; CookieConsent={stamp:%27doOh9ANTMkq4pf+MS17fMYa4XG4ruTzEhhTn8PVPyryqpzKuHxIhIw==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1763633301488%2Cregion:%27at%27}; color-value=system; user-ascents__recent-filters-bouldering=%7B%22orderFilter%22%3A%22grade_desc%22%2C%22currentYearFilter%22%3A%222026%22%7D; ranking-sub-navigation__recent-category=bouldering; ranking-category___en_ranking-filter__recent-bouldering-rankings-filters=%7B%22topAscents%22%3A%22top10%22%2C%22gender%22%3A%22male%22%2C%22style%22%3A%22combined%22%2C%22time%22%3A%22alltime%22%2C%22age%22%3A%22combined%22%2C%22country%22%3A%22%22%7D; global-search__recent-searches=%5B%22Adam%20Ondra%22%2C%22N%C3%96%22%5D; nu8a_session=f4d80cd3-ed8d-4f05-a69f-3dcac1cef1e1',

}

  

json_data = {

'category': 'bouldering',

'pageIndex': 0,

'gender': 'combined',

'style': 'combined',

'country': '',

'age': 'combined',

'time': 'alltime',

'topAscents': 'top10',

}

response = requests.post('https://www.8a.nu/api/dotnet/rankings', cookies=cookies, headers=headers, json=json_data)

response.json()
```
You can then save the json to a file if you prefer to do anaylsis in another language: R, Julia, MATLAB...
## Burner Account
I would suggest making a burner account in case you get caught. I made a dummy email as well.
- first name: action
- last name bronsen
- email: g0fuqy0urself777@gmail.com
- password: WOULDNTYOULIKETOKNOW