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
// read the textarea value
const tweet = document.getElementById('tweet').value;

// create the  remove button
const removeBtn = document.createElement('a');
removeBtn.classList = 'remove-tweet';
removeBtn.textContent = 'X';


// create an <li> element
const li = document.createElement('li');
li.textContent = tweet;


// Add the remove button to each tweet 
li.appendChild(removeBtn);

// Add to the List
tweetList.appendChild(li);
//add to local storage
addTweetLocalStorage(tweet);

//print the alert
alert('Tweet Added');

this.reset();

}
//Removes tweet from the DOM
function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove();
    }

    // Remove from storage
    removeTweetLocalStorage (e.target.parentElement.textContent);
}

//add the tweets into the local storage
function addTweetLocalStorage(tweet){
    let tweets = getTweetsFromStorage();

   // add the tweet into the array
   tweets.push(tweet);

   //convert tweet array into string
   localStorage.setItem('tweets', JSON.stringify(tweets));

}
function getTweetsFromStorage(){
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    //get the value, if null is returned then we create an empty array
    if(localStorage.getItem('tweets')=== null){
        tweets = [];
    } else {
        tweets = JSON.parse( tweetsLS);
    }
    return tweets;
}
