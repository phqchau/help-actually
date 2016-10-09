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
  'redcross.org' : ['The American Red Cross', '3', 'Doctors Without Borders',  'All Hands Volunteers', ' Haiti Communitiere'],
  'autismspeaks.org' : 'Autism Speaks',
  'komen.org' : 'Susan G Komen for the Cure',
  'kidswishnetwork.org' : 'Kids Wish Network',
  'nvsf.org' : 'National Veterans Services Fund',
  'childrenscharityfund.org' : 'Children\'s Charity Fund Inc.',
  'ffcf.org' : 'Firefighter\'s Charitable Foundation',
  'findthekids.org' : 'The Committee for Missing Children',
  'cancersurvivorsfund.org' : 'Cancer Survivors\' Fund',
  'spcai.org' : 'SPCA International',
  'peta.org' : 'People for the Ethical Treatment of Animals (PETA)',
  'clintonfoundation.org' : 'Clinton Foundation',
  'salvationarmyusa.org' : 'The Salvation Army',
  'pva.org' : 'Paralyzed Veterans of America',
  'diabetes.org' : 'American Diabetes Association',
  'worldwildlife.org' : 'World Wildlife Fund'
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    for (var x in charities) {
      if (url.indexOf(x) !== -1) {
        renderStatus('Organization name:\n' + charities[x][0] + '\nCharity Navigator Ranking:\n' + charities[x][1]);
        break;
      }
      renderStatus('This charity is not in our database!');
    };
  });
});
