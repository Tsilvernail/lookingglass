import DarkSkyApi from 'dark-sky-api';

DarkSkyApi.apiKey = '3f02c1ffe4ebb690c445c94382508bf2';

  DarkSkyApi.loadCurrent()
    .then(result => console.log(result));
