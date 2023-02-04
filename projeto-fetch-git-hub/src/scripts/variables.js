const baseUrl = 'https://api.github.com/users'

const repositoriesQuantity = 4;

export { baseUrl, repositoriesQuantity}




/* for(let i = 0; i<user.events.length; i++) {
    let receiveData = user.events?.[i]?.repo?.name;
    console.log(receiveData);     
} */


/* for (let i = 0; i <= 10; i++) {
  let receiveData = user.events?.[i]?.repo?.name;
  document.querySelector('.commits-data').innerHTML += receiveData;
} */

// let receivedComments = user.events[z]?.payload?.commits?.[0]?.message || "Não há comentários";


/* const listComments = document.querySelector(".list-comments");
        for (let z = 0; z < user.events.length; z++) {
          const span = document.createElement("li");
          if(user.events[z].type === 'PushEvent') {
          let userComments = user.events[z]?.payload?.commits?.[0]?.message;
          const item = userComments[z];
          const content = item?.textContent;
          span.textContent = content;
          listComments.appendChild(span);
          document.querySelector('.list-comments').innerHTML += userComments;
          
        }

          }
          
                  
        ` 
        `
        const listNames = document.querySelector(".list-reponames");
        for (let i = 0; i < user.events.length; i++) {
          const span = document.createElement("li");
          if(user.events[i].type === 'PushEvent') {
          let receiveData = user.events?.[i].repo.name;
          const item = receiveData[i];
          const content = item.textContent;
          span.textContent = content;
          listNames.appendChild(span);
          document.querySelector('.list-reponames').innerHTML += receiveData;
        }
      } */


    /*   for(let i = 0; i<user.events.length; i++) {
        if (user.events[i].type === "PushEvent") {
         var asd = user.events[i]?.payload?.commits?.[0]?.message
        }

      } */