import cgitb
cgitb.enable()
import sys
import json
from os.path import join, dirname
from watson_developer_cloud import AlchemyLanguageV1
import csv

def main(myUrl):
    newsSource = {
        "www.npr.org": "NPR",
        "time.com": "Time",
        "www.huffingtonpost.com": "Huffington Post",
        "www.nbcnews.com": "NBC News",
        "www.washingtonpost.com": "The Washington Post",
        "www.cnn.com": "CNN",
        "www.foxnews.com": "Fox News",
        "www.nytimes.com": "The New York Times",
        "www.thedailybeast.com": "The Daily Beast",
        "www.bbc.com": "BBC",
        "www.forbes.com": "Forbes",
        "www.mic.com": "Mic",
        "www.vox.com": "Vox",
        "www.vice.com": "Vice",
        "www.businessinsider.com": "Business Insider",
        "www.economist.com": "The Economist",
        "www.pbs.org": "PBS",
        "www.wsj.com": "The Wall Street Journal",
        "www.cbsnews.com": "CBS News",
        "abcnews.go.com": "ABC News",
        "www.usatoday.com": "USA Today",
        "www.bloomberg.com": "Bloomberg",
        "www.yahoo.com": "Yahoo",
        "www.motherjones.com": "Mother Jones",
        "www.wired.com": "Wired",
        "www.slate.com": "Slate",
        "www.newyorker.com": "The New Yorker",
        "www.theintercept.com": "The Intercept",
        "www.theguardian.com": "The Guardian"
    }

    alchemy_language = AlchemyLanguageV1(api_key='72d327a7a3458750d9eb2e2121d871b39167fc80')

    articles = {
        "redcross.org": "RedCross.csv",
        "autismspeaks.org": "AutismSpeaks.csv"
    }

    f = open(articles.get(myUrl), 'rt')

    reader = csv.reader(f)

    for i,row in enumerate(reader):
        jsonObj = json.loads(json.dumps(alchemy_language.sentiment(url=row),indent=2))
        mainURL = row[0].split("/")[2]

        newsName = newsSource.get(mainURL)

        articleList = [newsName, row[0], str(jsonObj.get("docSentiment").get("type"))]

        print(articleList)

        if i>=2:
            break

if __name__ == '__main__':           
    x=main(sys.argv[1])
    return x