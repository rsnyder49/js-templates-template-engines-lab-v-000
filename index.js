function createPost() {
   //event.preventDefault();
 
    let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
   let postTemplate = _.template(document.getElementById("post-template").innerHTML);
    var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
 
    var title = document.getElementById("postTitle").value;
   var body = document.getElementById("postBody").value;
   var author = document.getElementById("postAuthor").value;
 
    document.getElementById("post-form").innerHTML += pageTemplate();
 
    var blog = postTemplate({ 'title': title, 'body': body, 'author': author });
   var comments = commentsTemplate();
   var post = document.getElementById("post");
 
     post.innerHTML = blog;
   post.getElementsByTagName("footer")[0].innerHTML = comments;
}