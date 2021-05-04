//variables 
const tweetList = document.getElementById('tweet-list');



//Event Listeners
eventListerners();
function eventListerners(){

 document.querySelector('#form').addEventListener('submit', newTweet);

 // Remove tweet from the list
 tweetList.addEventListener('click', removeTweet);

 // Document 
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}


//Functions
function newTweet(e){
e.preventDefault();