import axios from 'axios';
import constantes from '../const';
import getToken from '../resolvers/getToken';


export default (data) => {
  let {id,rate} = data;
  // avant la ligne en dessous mais comme ça marchait pas let newRate = JSON.stringify({rate:rate}); // convertit l'objet en string 
  let newPost = `{
    description: '${data.description},
    name:'${data.name}',
    imageUrl:'${data.image_url}',
    location: '${data.location}'
  }`;
  return axios({
    url:constantes.url+'graphql',
    method:'post',
    data:{
      mutation:`
        mutation{
          addPost(data:${newPost}){
            _id, 
            name,
            imageUrl,
            location
          }
        }
      `
    },headers:{'Authorization':'JWT'+getToken()}
  })
}
