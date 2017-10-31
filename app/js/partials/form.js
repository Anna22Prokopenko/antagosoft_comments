window.addEventListener('load', function() {
    // getting each progressbar parent element
    var item1 = document.getElementsByClassName('js-services__item1')[0],
    item2 = document.getElementsByClassName('js-services__item2')[0],
    item3 = document.getElementsByClassName('js-services__item3')[0],
    overall = document.getElementsByClassName('js-services__overall')[0];

    // getting each progressbar value element, from it's parent element
    var item1_quantity = document.getElementsByClassName('js-services__quantity1')[0],
    item2_quantity = document.getElementsByClassName('js-services__quantity2')[0],
    item3_quantity = document.getElementsByClassName('js-services__quantity3')[0],
    overallNum = document.getElementsByClassName('js-overall__quantity')[0],
    overallSum;

    // getting current width of the progressbar in pixels
    var progressBarwidth = item2.offsetWidth;
    var item1Rand, item2Rand, item3Rand;

    function progressBar() {
        // generating random html progressbar values
        item1Rand = Math.round(Math.random() * 100);
        item2Rand = Math.round(Math.random() * 100);
        item3Rand = Math.round(Math.random() * 100);

        item1_quantity.innerHTML = item1Rand;
        item2_quantity.innerHTML = item2Rand;
        item3_quantity.innerHTML = item3Rand;

        // setting previously generated progressbar indicator width for ecah progressbar
        item1.style.boxShadow = 'inset ' + item1Rand * item1.offsetWidth / 100 + 'px 0px 0px #b1e19b';
        item2.style.boxShadow = 'inset ' + item2Rand * item2.offsetWidth / 100 + 'px 0px 0px #ace2f8';
        item3.style.boxShadow = 'inset ' + item3Rand * item3.offsetWidth / 100 + 'px 0px 0px #ace2f8';

        // counting overall services sum
        overallSum = parseInt(item1_quantity.innerHTML) + parseInt(item2_quantity.innerHTML) + parseInt(item3_quantity.innerHTML);
        overallNum.innerHTML = overallSum;   
    };

    window.onload = progressBar;
    setInterval(progressBar, 3500);

    // Likes button script
    var likesButton = document.getElementsByClassName('js-commentsControl__like_btn')[0],
    likesCount = document.getElementsByClassName('js-commentsControl__like')[0];

    likesButton.addEventListener('click', function (event) {
        event.preventDefault();
        likesCount.innerHTML = parseInt(likesCount.innerHTML) + 1;
    });

    // comments counter script

    var commentsSection = document.getElementsByClassName('js-comments')[0],
    comments = commentsSection.getElementsByClassName('js-comment__item'),
    commentsCount = document.getElementsByClassName('js-commentsControl__quantity')[0];

    function setCommentsCounter() {
        commentsCount.innerHTML = comments.length;
    };
    setCommentsCounter();

    // addCommentScript

    var commentsTextarea = document.getElementsByClassName('js-commentsForm__text')[0],
    sendComment = document.getElementsByClassName('js-commentsForm__send')[0],
    commentsSection = document.getElementsByClassName('js-comments')[0];

    function addComment() {
        var commentName = document.getElementsByClassName('js-commentsForm__name')[0].value,
            commentDate = today,
            commentText;
        // create comment container
        var newCommentBlock = document.createElement('div');
        newCommentBlock.className = 'col span_12 c-comments__item js-comment__item';

        // create name
        var newCommentName = document.createElement('div');
        newCommentName.innerHTML = commentName;
        newCommentName.className = 'c-comments__name';
        // create date
        var newCommentDate = document.createElement('div');
        newCommentDate.innerHTML = commentDate;
        newCommentDate.className = 'c-comments__date';
        // parseComment

        commentText = document.createElement('div');
        commentText.innerHTML = commentsTextarea.value;
        commentText.className = 'c-comments__text';

        // check, is textarea filled by text?
        var comments = document.getElementsByClassName('js-comment__item');    

        if (commentName.length != 0) {
            if (commentsTextarea.value.length != 0) {
                commentsSection.insertBefore(newCommentBlock, comments[0]);
                newCommentBlock.appendChild(newCommentName);
                newCommentBlock.appendChild(newCommentDate);
                newCommentBlock.appendChild(commentText);
                setCommentsCounter();
                //
                commentsTextarea.value = '';
            } else {
                commentsTextarea.placeholder = "You have not written any text for comment here!";
                commentsTextarea.value = '';
            }
        } else {
            commentsTextarea.placeholder = 'Yor forgot to write your name!';
            commentsTextarea.value = '';
        }
    }

    sendComment.addEventListener('click', function() {
        addComment();
        console.log('ok');
    }); 

    // get date  

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd<10) {
        dd='0'+dd
    } 

    if (mm<10) {
        mm='0'+mm
    } 

    today = mm+' / '+dd+' / '+yyyy;

    // last comments toggle

    var lastcomments = document.getElementById('lastcomments');
    var allcomments = document.getElementById('allcomments');

    lastcomments.addEventListener('click', function () {
        var comments = document.getElementsByClassName('js-comment__item');
        if (comments.length > 2) {
            for (var i = 2; i < comments.length; i++) {
                comments[i].style.display = 'none';
            }
            lastcomments.className = 'c-commentsControl__last--active';
            allcomments.className = 'c-commentsControl__all--notactive';
        }
    });

    // allcomments toggle

    allcomments.addEventListener('click', function () {
    var comments = document.getElementsByClassName('js-comment__item');
    if (comments.length > 2) {
        for (var i = 0; i < comments.length; i++) {
            comments[i].style.display = 'block';
        }
        allcomments.className = 'c-commentsControl__all--active';
        lastcomments.className = 'c-commentsControl__last--notactive';
    }
    });

});