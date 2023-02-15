var books = [
    {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false,
    coverLink: 'https://m.media-amazon.com/images/I/416Hql52NCL.jpg'
    }, {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    coverLink: 'https://brianchristian.org/images/The-Most-Human-Human-Paperback-Front-Cover.jpg'
    }
];
var myDiv = document.createElement('div');
var ul = document.createElement('ul');

// note to self: javascript does not use a parentheses for its 'length' function
for(var i = 0; i < books.length; i++){
    var myTitle = document.createElement('p');
    var myText = document.createTextNode(books[i].title);
    myTitle.appendChild(myText);
    var myAuthor = document.createElement('p');
    myAuthor.appendChild(document.createTextNode(books[i].author));
    var myReading = document.createElement('p');
    myReading.appendChild(document.createTextNode(books[i].alreadyRead));

    var myCover = document.createElement('img');
    myCover.style.width = '30%';
    myCover.style.height = '40vh';
    myCover.src = books[i].coverLink;
    var li = document.createElement('li');
    if(books[i].alreadyRead == true){
        myCover.style.filter = 'grayscale(100%)';
    }
    li.appendChild(myTitle);
    li.appendChild(myText);
    li.appendChild(myAuthor);
    li.appendChild(myReading);
    li.appendChild(myCover);
    ul.appendChild(li);
}
myDiv.appendChild(ul);
document.body.appendChild(myDiv);
