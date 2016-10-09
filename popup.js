function getCurrentTabUrl(callback) {
 var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var myUrl = tab.url;
	  console.assert(typeof myUrl == 'string', 'tab.url should be a string');

    callback(myUrl);
	  //if(typeof callback !== 'null'){
    //callback(myUrl);
    //}
  });
}

var charities = {
  'redcross.org' : ['The American Red Cross', '3/4', 'Doctors Without Borders',  'All Hands Volunteers', 'Haiti Communitiere'],
  'autismspeaks.org' : ['Autism Speaks', '2/4', 'Organization for Autism Research', 'Autism Research Institute', 'Southwest Autism Research & Resource Center'],
  'komen.org' : ['Susan G Komen for the Cure', '3/4', 'Living Beyond Breast Cancer', 'National Breast Cancer Foundation Inc.', 'The Rose'],
  'kidswishnetwork.org' : ['Kids Wish Network', '0/4', 'Make a Wish Foundation'],
  'nvsf.org' : ['National Veterans Services Fund', '0/4', 'National Military Family Association', 'Fisher House Foundation', 'Homes For Our Troops'],
  'childrenscharityfund.org' : ['Children\'s Charity Fund Inc.', '0/4', 'The Center for Enriched Living', 'UNICEF', '4 Paws for Ability'],
  'ffcf.org' : ['Firefighter\'s Charitable Foundation', '0/4', 'National Fallen Firefighters Foundation', 'FDNY Foundation', 'Correctional Peace Officers Foundation'],
  'findthekids.org' : ['The Committee for Missing Children', '0/4', 'National Center for Missing & Exploited Children'],
  'cancersurvivorsfund.org' : ['Cancer Survivors\' Fund', '0/4', 'Neuroendocrine Tumor Research Foundation', 'National Pediatric Cancer Foundation', 'Bivona Child Advocacy Group'],
  'spcai.org' : ['SPCA International', '0', 'Animal Welfare Association', 'Animal Welfare League', 'Animal Welfare Society'],
  'peta.org' : ['People for the Ethical Treatment of Animals (PETA)', '3/4', 'Last Chance for Animals',  'Animal Legal Defense Fund', 'Friends of Animals'],
  'clintonfoundation.org' : ['Clinton Foundation', '4/4', 'Bill and Melinda Gates Foundation', 'Timmy Global Health', 'World Help'],
  'salvationarmyusa.org' : ['The Salvation Army', 'N/A', 'Goodwill', 'Northwest Harvest', 'The Trevor Project'],
  'pva.org' : ['Paralyzed Veterans of America', '0/4', 'Congressional Medal of Honor Foundation',  'DAV (Disabled American Veterans) Charitable Service Trust', 'Iraq and Afghanistan Veterans of America'],
  'diabetes.org' : ['American Diabetes Association', '2/4', 'The Notah Begay III Foundation', 'Taking Control of Your Diabetes', 'Diabetic Youth Foundation'],
  'worldwildlife.org' : ['World Wildlife Fund', '3/4', 'African Wildlife Foundation', 'International Wolf Center', 'The Marine Mammal Center']
}

var urls = {
	'redcross.org' : ['http://www.doctorswithoutborders.org/', 'https://www.hands.org/', 'http://haiti.communitere.org/',],
	'autismspeaks.org' : ['http://www.researchautism.org/', 'https://www.autism.com/', 'http://www.autismcenter.org/'],
	'komen.org' : ['http://www.lbbc.org/', 'http://www.nationalbreastcancer.org/', 'http://www.therose.org/'],
	'kidswishnetwork.org' : ['http://wish.org/#sm.000180jnl3pvndi0zmo12lxldp7zd'],
	'nvsf.org' : ['http://www.militaryfamily.org/', 'https://www.fisherhouse.org/', 'https://www.hfotusa.org/'],
	'childrenscharityfund.org' : ['https://www.centerforenrichedliving.org/', 'http://www.unicef.org/', 'http://4pawsforability.org/'],
	'ffcf.org' : ['http://www.firehero.org/', 'http://www.fdnyfoundation.org/', 'http://cpof.org/'],
	'findthekids.org' : ['http://www.missingkids.com/home'],
	'cancersurvivorsfund.org' : ['https://netrf.org/', 'http://nationalpcf.org/', 'http://www.bivonacac.org/'],
	'spcai.org' : ['http://www.awanj.org/', 'http://www.awlrescueme.com/', 'http://lfaw.org/' ],
	'peta.org' : ['http://www.lcanimal.org/', 'http://aldf.org/', 'https://www.friendsofanimals.org/'],
	'clintonfoundation.org' : ['http://www.gatesfoundation.org/', 'https://timmyglobalhealth.org/', 'https://worldhelp.net/'],
	'salvationarmyusa.org' : ['http://www.goodwill.org/', 'http://www.northwestharvest.org/', 'http://www.thetrevorproject.org/'],
	'pva.org' : ['http://themedalofhonor.com/', 'https://www.dav.org/', 'http://iava.org/'],
	'diabetes.org' : ['http://www.nb3foundation.org/', 'https://www.tcoyd.org/', 'http://www.dyf.org/'],
	'worldwildlife.org' : ['http://www.awildfound.org/', 'http://www.wolf.org/', 'http://www.marinemammalcenter.org/'],
}

var articles = {
	'redcross.org' : ['NPR', 'http://www.npr.org/2015/06/03/411524156/in-search-of-the-red-cross-500-million-in-haiti-relief', 'Time', 'http://time.com/3908457/red-cross-six-homes-haiti/', 'Huffington Post', 'http://www.huffingtonpost.com/2015/06/04/red-cross-haiti-report_n_7511080.html'],
}

function renderStatus1(statusText1) {
  document.getElementById('status1').textContent = statusText1;
}

function renderStatus2(statusText2) {
  document.getElementById('status2').textContent = statusText2;
}

function renderAlternative1(alternativeOrg1) {
  document.getElementById('alternative1').textContent = alternativeOrg1;
}

function renderAlternative2(alternativeOrg2) {
  document.getElementById('alternative2').textContent = alternativeOrg2;
}

function renderAlternative3(alternativeOrg3) {
  document.getElementById('alternative3').textContent = alternativeOrg3;
}

function renderTitle1(title1) {
  document.getElementById('title1').textContent = title1;
}

function renderTitle2(title2) {
  document.getElementById('title2').textContent = title2;
}

function renderTitle3(title3) {
  document.getElementById('title3').textContent = title3;
}

function renderTitle4(title4) {
  document.getElementById('title4').textContent = title4;
}

function renderArticle1(article1) {
  document.getElementById('article1').textContent = article1;
}

function renderArticle2(article2) {
  document.getElementById('article2').textContent = article2;
}

function renderArticle3(article3) {
  document.getElementById('article3').textContent = article3;
}


function getImageUrl(searchTerm, callback, errorCallback) {
  var searchUrl = 'https://www.googleapis.com/customsearch/v1?key=' +
    'AIzaSyAMoq_eJliMHWoApPlUQtXW7ht37WSt4ak&cx=017750922335923786184:5et74q44yxi&q=' + encodeURIComponent(searchTerm) + '&searchType=image';
  var y = new XMLHttpRequest();
  y.open('GET', searchUrl);
  y.responseType = 'json';
  y.onload = function() {
    var response = y.response;
    if (!response || response.items.length === 0) {
      errorCallback('No response from Google Image search!');
      return;
    }
    if (searchTerm === 'World Wildlife Fund' || searchTerm === 'Firefighter\'s Charitable Foundation') {
      var firstResult = response.items[4];
    } else if (searchTerm === 'Autism Speaks' || searchTerm === 'Susan G Komen for the Cure') {
      var firstResult = response.items[1];
    } else if (searchTerm === 'People for the Ethical Treatment of Animals (PETA)') {
      var firstResult = response.items[3];
    } else if (searchTerm === 'Kids Wish Network' || searchTerm === 'Cancer Survivors\' Fund') {
        var firstResult = null;
    } else {
      var firstResult = response.items[0];
    };
    var imageUrl = firstResult.image.thumbnailLink;
    var width = parseInt(firstResult.image.thumbnailWidth);
    var height = parseInt(firstResult.image.thumbnailHeight);
    callback(imageUrl, width, height);
  };
  y.onerror = function() {
    errorCallback('Network error.');
  };
  y.send();
}

//document.addEventListener('DOMContentLoaded', function() {
window.onload =  function(myUrl) {
  getCurrentTabUrl(function(myUrl) {
    for (var x in charities) {
      if (myUrl.indexOf(x) !== -1) {
		      renderTitle1('Organization Name:');
		      renderStatus1(charities[x][0] + '\n');
		      renderTitle2('Charity Navigator Ranking:');
		      renderStatus2(charities[x][1] + '\n');
		      renderTitle3('Alternative Charities:');
          if (charities[x].length === 3) {
            renderAlternative1(charities[x][2] + '\n');
          } else if (charities[x].length === 4) {
            renderAlternative1(charities[x][2] + '\n');
            renderAlternative2(charities[x][3] + '\n');
          } else if (charities[x].length === 5) {
            renderAlternative1(charities[x][2] + '\n');
            renderAlternative2(charities[x][3] + '\n');
            renderAlternative3(charities[x][4] + '\n');
          };
          getImageUrl(charities[x][0], function(imageUrl, width, height) {
              var imageResult = document.getElementById('image-result');
              imageResult.width = width;
              imageResult.height = height;
              imageResult.src = imageUrl;
              imageResult.hidden = false;

            }, function(errorMessage) {
              renderStatus1('Cannot display image. ' + errorMessage);
            });
		document.getElementById('alternative1').addEventListener('click', function() {
			chrome.tabs.create({url : urls[x][0]});
		  });
		document.getElementById('alternative2').addEventListener('click', function() {
			chrome.tabs.create({ url : urls[x][1]});
		  });
		document.getElementById('alternative3').addEventListener('click', function() {
			chrome.tabs.create({ url :urls[x][2]});
		  });
		renderTitle4('Read More:');
		renderArticle1(articles[x][0] + '\n');
		renderArticle2(articles[x][2] + '\n');
		renderArticle3(articles[x][4] + '\n');
		document.getElementById('article1').addEventListener('click', function() {
			chrome.tabs.create({url : articles[x][1]});
		  });
		document.getElementById('article2').addEventListener('click', function() {
			chrome.tabs.create({url : articles[x][3]});
		}); 
		document.getElementById('article3').addEventListener('click', function() {
			chrome.tabs.create({url : articles[x][5]});
		});
      break;
      }
  };
  });
};
