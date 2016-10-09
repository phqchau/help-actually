function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
}

var charities = {
  'redcross.org' : ['The American Red Cross', '3', 'Doctors Without Borders',  'All Hands Volunteers', 'Haiti Communitiere'],
  'autismspeaks.org' : ['Autism Speaks', '2', 'Organization for Autism Research',  'Autism Research Institute', 'Southwest Autism Research & Resource Center'],
  'komen.org' : ['Susan G Komen for the Cure', '3', 'Living Beyond Breast Cancer',  'National Breast Cancer Foundation Inc.', 'The Rose'],
  'kidswishnetwork.org' : ['Kids Wish Network', '0', 'Make a Wish Foundation'],
  'nvsf.org' : ['National Veterans Services Fund', '0', 'National Military Family Association',  'Fisher House Foundation', 'Homes For Our Troops'],
  'childrenscharityfund.org' : ['Children\'s Charity Fund Inc.', '0', 'The Center for Enriched Living',  'UNICEF', '4 Paws for Ability'],
  'ffcf.org' : ['Firefighter\'s Charitable Foundation', '0', 'National Fallen Firefighters Foundation',  'FDNY Foundation', 'Correctional Peace Officers Foundation'],
  'findthekids.org' : ['The Committee for Missing Children', '0', 'National Center for Missing & Exploited Children'],
  'cancersurvivorsfund.org' : ['Cancer Survivors\' Fund', '0', 'Neuroendocrine Tumor Research Foundation',  'National Pediatric Cancer Foundation', 'Bivona Child Advocacy Group'],
  'spcai.org' : ['SPCA International', '0', 'Animal Welfare Association',  'Animal Welfare League', 'Animal Welfare Society'],
  'peta.org' : ['People for the Ethical Treatment of Animals (PETA)', '3', 'Last Chance for Animals',  'Animal Legal Defense Fund', 'Friends of Animals'],
  'clintonfoundation.org' : ['Clinton Foundation', '4', 'Bill and Melinda Gates Foundation',  'Timmy Global Health', 'World Help'],
  'salvationarmyusa.org' : ['The Salvation Army', 'N/A', 'Goodwill',  'Northwest Harvest', 'The Trevor Project'],
  'pva.org' : ['Paralyzed Veterans of America', '0', 'Congressional Medal of Honor Foundation',  'DAV (Disabled American Veterans) Charitable Service Trust', 'Iraq and Afghanistan Veterans of America'],
  'diabetes.org' : ['American Diabetes Association', '2', 'The Notah Begay III Foundation',  'Taking Control of Your Diabetes', 'Diabetic Youth Foundation'],
  'worldwildlife.org' : ['World Wildlife Fund', '3', 'African Wildlife Foundation',  'International Wolf Center', 'The Marine Mammal Center']
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

function renderAlternatives(alternativeOrg) {
  document.getElementById('alternative').textContent = alternativeOrg;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    for (var x in charities) {
      if (url.indexOf(x) !== -1) {
        renderStatus('Organization name:\n' + charities[x][0] + '\nCharity Navigator Ranking:\n' + charities[x][1]);
        renderAlternatives('Alternative Charities:\n' + charities[x].slice(2).join("\n"));
        break;
      }
      renderStatus('This charity is not in our database!');
    };
  });
});
