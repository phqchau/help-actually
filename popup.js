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
  });
}

var charities = {
  'redcross.org' : ['The American Red Cross', '3', 'Doctors Without Borders'],//  'All Hands Volunteers', 'Haiti Communitiere'],
  'autismspeaks.org' : ['Autism Speaks', '2', 'Organization for Autism Research'],//  'Autism Research Institute', 'Southwest Autism Research & Resource Center'],
  'komen.org' : ['Susan G Komen for the Cure', '3', 'Living Beyond Breast Cancer'],//  'National Breast Cancer Foundation Inc.', 'The Rose'],
  'kidswishnetwork.org' : ['Kids Wish Network', '0', 'Make a Wish Foundation'],
  'nvsf.org' : ['National Veterans Services Fund', '0', 'National Military Family Association'],//  'Fisher House Foundation', 'Homes For Our Troops'],
  'childrenscharityfund.org' : ['Children\'s Charity Fund Inc.', '0', 'The Center for Enriched Living'],//  'UNICEF', '4 Paws for Ability'],
  'ffcf.org' : ['Firefighter\'s Charitable Foundation', '0', 'National Fallen Firefighters Foundation'],//  'FDNY Foundation', 'Correctional Peace Officers Foundation'],
  'findthekids.org' : ['The Committee for Missing Children', '0', 'National Center for Missing & Exploited Children'],
  'cancersurvivorsfund.org' : ['Cancer Survivors\' Fund', '0', 'Neuroendocrine Tumor Research Foundation'],//  'National Pediatric Cancer Foundation', 'Bivona Child Advocacy Group'],
  'spcai.org' : ['SPCA International', '0', 'Animal Welfare Association'],//  'Animal Welfare League', 'Animal Welfare Society'],
  'peta.org' : ['People for the Ethical Treatment of Animals (PETA)', '3', 'Last Chance for Animals'],//  'Animal Legal Defense Fund', 'Friends of Animals'],
  'clintonfoundation.org' : ['Clinton Foundation', '4', 'Bill and Melinda Gates Foundation'],//  'Timmy Global Health', 'World Help'],
  'salvationarmyusa.org' : ['The Salvation Army', 'N/A', 'Goodwill'],//  'Northwest Harvest', 'The Trevor Project'],
  'pva.org' : ['Paralyzed Veterans of America', '0', 'Congressional Medal of Honor Foundation'],//  'DAV (Disabled American Veterans) Charitable Service Trust', 'Iraq and Afghanistan Veterans of America'],
  'diabetes.org' : ['American Diabetes Association', '2', 'The Notah Begay III Foundation'],//  'Taking Control of Your Diabetes', 'Diabetic Youth Foundation'],
  'worldwildlife.org' : ['World Wildlife Fund', '3', 'African Wildlife Foundation'],//  'International Wolf Center', 'The Marine Mammal Center']
}

var urls = {
	'redcross.org' : ['http://www.doctorswithoutborders.org/', 'https://www.hands.org/', 'http://haiti.communitere.org/'],
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

/*function renderAlternative2(alternativeOrg2) {
  document.getElementById('alternative2').textContent = alternativeOrg2;
}

function renderAlternative3(alternativeOrg3, x) {
  document.getElementById('alternative3').textContent = alternativeOrg3;
}*/

function renderTitle1(title1) {
  document.getElementById('title1').textContent = title1;
}

function renderTitle2(title2) {
  document.getElementById('title2').textContent = title2;
}

function renderTitle3(title3) {
  document.getElementById('title3').textContent = title3;
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
		renderTitle3('Alternative Charity:');
		renderAlternative1(charities[x][2] + '\n');
		/*renderAlternative2(charities[x][3] + '\n');
		renderAlternative3(charities[x][4] + '\n');*/
		document.getElementById('alternative1').addEventListener('click', function() {
			chrome.tabs.create({url : urls[x][0]});
		});
		/*document.getElementById('alternative2').addEventListener('click', function() {
			chrome.tabs.create({ url : urls[x][1]});
		});
		document.getElementById('alternative3').addEventListener('click', function() {
			chrome.tabs.create({ url :urls[x][2]});
		});*/
    };
  }});
};
