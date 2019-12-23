import  {tablo} from '../tabloAndClasses.js';

export async function changeBackgroundViaApi (destinationText) {

  //как перезаписать эту функцию в функциональном стиле???

  // console.log('APIChangeBackgroundIsRuning');
  // const response =await fetch(`https://api.flickr.com/services/rest?format=json&method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags=${destinationText}&format=json&jsoncallback= `);
  // //const myJson = await response.json();
  // console.log(response.url);


     fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags=${destinationText}&per_page=10&page=1&format=json&nojsoncallback=1`)
     .then(function(response){
       return response.json();
     })
     .then(function(j){
       //alert(JSON.stringify(j));
       //console.log(j.photos.photo[1]);
       console.log('APIChangeBackgroundIsRuning');
       var srcPath = 'https://farm'+j.photos.photo[1].farm+'.staticflickr.com/'+j.photos.photo[1].server+'/'+j.photos.photo[1].id+'_'+j.photos.photo[1].secret+'.jpg';
       document.querySelector('body').style.background = `url(${srcPath})`;
     })
       //let picture = j.photos.photo.map((pic) => {}









}
