from flask import Blueprint, request
from ..services import communication, users

#Blueprint for the submodule
communication_app = Blueprint('communication', __name__)

#Endpoints for announcements
@communication_app.route('/announcement', methods=['GET', 'POST']) #Only Prof can post announcements for the courses they're taking (add a check for that)
def handleAnnouncements():
    user_obj = users.getUser()
    req = request.get_json(force=True)
    if(user_obj['status_code'] != 200):
        return {"message" : 'User not authenticated to perform this action. Please login', "status_code" : 401}
    if request.method == 'GET': # Get all announcements for all the courses user is enrolled in
        return communication.getAnnouncements(user_obj['email'])
    else:
        if(user_obj['is_Prof'] == True):
            return communication.postAnnouncement(user_obj['email'], req['course_id'], req['title'], req['body'], req['static_files']) #Create a new annoncement
        else:
            return {"message" : 'User not authorized to perform this action', "status_code" : 401}

@communication_app.route('/announcement/unread', methods = ['GET'])
def unreadAnnouncements(): #Get unread announcements for all courses the user is enrolled in
    user_obj = users.getUser()
    if(user_obj['status_code'] != 200):
        return {"message" : 'User not authenticated to perform this action. Please login first', "status_code" : 401}
    else:
        return communication.unreadAnnouncements(user_obj['email'])

@communication_app.route('/announcement/<course_id>', methods = ['GET'])
def fetchAnnouncement(course_id): #Get all announcements for the course specified
    return communication.courseAnnouncement(course_id)

#Endpoints for posts

@communication_app.route('/post', methods = ['GET', 'POST'])
def handlePosts():
    user_obj = users.getUser()
    req = request.get_json(force=True)
    if(user_obj['status_code'] != 200):
        return {"message" : 'User not authenticated to perform this action. Please login', "status_code" : 401}
    else:
        if request.method == 'GET': #Get all the posts made by the user
            return communication.getPosts(user_obj['email'])
        else: #Create a new post
            return communication.postPost(user_obj['email'], req['course_id'], req['title'], req['body'], req['static_files'], req['can_comment'])

@communication_app.route('/post/<course_id>', methods = ['GET'])
def getPosts(course_id): #Get all the posts corresponding to a course
    user = users.getUser()
    if(user['status_code'] != 200):
        return {"message" : 'User not authenticated to perform this action. Please login', "status_code" : 401}
    else:
        return communication.coursePost(course_id, user['email'], user['is_Admin'])

@communication_app.route('/post/<post_id>', methods = ['GET'])
def getPostById(post_id): #Get all the post by postid
    user = users.getUser()
    if(user['status_code'] != 200):
        return {"message" : 'User not authenticated to perform this action. Please login', "status_code" : 401}
    else:
        return communication.getPostId(post_id, user['email'], user['is_Admin'])

@communication_app.route('/post/delete', methods = ['DELETE']) #User can only delete posts if they are a prof or the post was made by them
def deletePost(): #Delete post by postid
    post_id = request.get_json(force=True)['id']
    user_obj = users.getUser()
    if(user_obj['status_code'] != 200):
        return {"message" : 'User not authenticated to perform this action. Please login', "status_code" : 401}
    else:
        return communication.deletePost(post_id, user_obj['email'], user_obj['is_Prof'])

#OPTIONAL APIS: WILL IMPLEMENT IF TIME PERMITS
############################################################################################################
# @communication_app.route('/post/edit', methods = ['PUT'])
# def editPost():
#     return communication.editPost()

# @communication_app.route('/post/like', methods = ['POST'])
# def likePost():
#     return communication.likePost()

# @communication_app.route('/post/unlike', methods = ['POST'])
# def unlikePost():
#     return communication.unlikePost()


@communication_app.route('/comment', methods = ['POST'])
def postComment(): #Create a new comment
    user_obj = users.getUser()
    req = request.get_json(force=True)
    if(user_obj['status_code'] != 200):
        return {"message" : 'User not authenticated to perform this action. Please login', "status_code" : 401}
    else:
        return communication.postComment(user_obj['email'], req['parentpost_id'], req['parentcomment_id'], req['body'], req['static_files'])

@communication_app.route('/comment/<comment_id>', methods = ['GET'])
def getCommentById(comment_id): #Get comment by commentid
    user = users.getUser()
    if(user['status_code'] != 200):
        return {"message" : 'User not authenticated to perform this action. Please login', "status_code" : 401}
    else:
        return communication.getCommentById(comment_id, user['email'], user['is_Admin'])


@communication_app.route('/comment/<parentpost_id>', methods = ['GET'])
def getComments(parentpost_id): #Get all the comments for a post
    return communication.getCommentsByPostId(parentpost_id)

@communication_app.route('/comment/<parentcomment_id>', methods = ['GET'])
def getReplies(parentcomment_id): #Get all the replies for a comment
    return communication.getReplies(parentcomment_id)

#OPTIONAL APIS: WILL IMPLEMENT IF TIME PERMITS
############################################################################################################
# @communication_app.route('/comment/edit', methods = ['PUT'])
# def editComment():
#     return communication.editComment()


# @communication_app.route('/comment/like', methods = ['POST'])
# def likeComment():
#     return communication.likeComment()

# @communication_app.route('/comment/unlike', methods = ['POST'])
# def unlikeComment():
#     return communication.unlikeComment()
    
@communication_app.route('/comment/delete', methods = ['DELETE'])
def deleteComment(): #Delete comment by commentid
    comment_id = request.get_json(force=True)['id']
    user_obj = users.getUser()
    if(user_obj['status_code'] != 200):
        return {"message" : 'User not authenticated to perform this action. Please login', "status_code" : 401}
    else:
        return communication.deleteComment(comment_id, user_obj['email'], user_obj['is_Prof'])


