from ..models import communication, user, courses
import json
from server.db import db
from flask import request, json


def getAnnouncements(email):
    user_instance = user.User.query.filter_by(email=email).first()
    if user_instance is None:
        return {"message" : 'User not found. Please enter a valid email id', "status_code" : 404}
    all_courses_of_user = courses.User_Course.query.filter_by(user=email).all()
    announcements_list = []
    for entry in all_courses_of_user:
        announcements = communication.Announcement.query.filter_by(announcement_course=entry.course).all()
        for announcement in announcements:
                static_announcement = communication.Announcement_Attachment.query.filter_by(announcement_attachment_announcement=announcement.announcement_id).all()
                static_files = []
                for static_file in static_announcement:
                    static_files.append(static_file.announcement_attachment_file)
                announcements_list.append({" id" : announcement.announcement_id,
                                            "course_id" : announcement.announcement_course,
                                            "course_name" : courses.Course.query.filter_by(course_id=announcement.announcement_course).first().course_name,
                                            "title" : announcement.announcement_title, 
                                            "body" : announcement.announcement_content, 
                                            "static_files" : static_files, 
                                            "createdAt" : announcement.announcement_date,
                                            "author_id" : announcement.announcement_author})
    return json.dumps({"announcement_list" : announcements_list, "status_code" : 200})

def postAnnouncement(email, course_id, title, body, static_files):
    user_instance = user.User.query.filter_by(email=email).first()
    course = courses.Course.query.filter_by(course_id=course_id).first()
    if(course is None):
        return {"message" : 'Course not found. Please enter a valid course id', "status_code" : 404}
    else:
        mapping = courses.User_Course.query.filter_by(user=email, course=course_id).first()
        if(mapping is None):
            return {"message" : 'Instructor not associated with the course. Unauthorised access', "status_code" : 401}
        else:
            announcement = communication.Announcement(announcement_course=course_id, announcement_title=title, announcement_content=body, announcement_author=email)
            db.session.add(announcement)
            db.session.commit()
            for static_file in static_files:
                announcement_attachment = communication.Announcement_Attachment(announcement_attachment_announcement=announcement.announcement_id, announcement_attachment_file=static_file)
                db.session.add(announcement_attachment)
                db.session.commit()
            return {"message" : 'Announcement posted successfully', "status_code" : 200}

def unreadAnnouncements(email):
    all_announcements = getAnnouncements(email)['announcement_list']
    unread_announcements = []
    for announcement in all_announcements:
        obj = communication.Announcement_Read.query.filter_by(announcement_read_announcement=announcement['id'], announcement_read_user=email).first()
        if(obj is None):
            unread_announcements.append(announcement)
    return {"unread_announcements" : unread_announcements, "status_code" : 200}

def courseAnnouncement(course_id):
    announcements = communication.Announcement.query.filter_by(announcement_course=course_id).all()
    announcement_list = []
    for announcement in announcements:
        static_announcements = communication.Announcement_Attachment.query.filter_by(announcement_attachment_announcement=announcement.announcement_id).all()
        static_files = []
        for fileAnn in static_announcements:
            static_files.append(fileAnn.announcement_attachment_file)
        announcement_list.append({  "id" : announcement.announcement_id,
                                    "course_id" : announcement.announcement_course,
                                    "title" : announcement.announcement_title, 
                                    "body" : announcement.announcement_content, 
                                    "static_files" : static_files, 
                                    "createdAt" : announcement.announcement_date,
                                    "author_id" : announcement.announcement_author})
    return {"announcement_list" : announcement_list, "status_code" : 200}

def markAnnouncementRead(email, announcement_id):
    announcement = communication.Announcement.query.filter_by(announcement_id=announcement_id).first()
    if(announcement is None):
        return {"message" : 'Announcement not found. Please enter a valid announcement id', "status_code" : 404}
    else:
        announcement_read = communication.Announcement_Read(announcement_read_announcement=announcement_id, announcement_read_user=email)
        db.session.add(announcement_read)
        db.session.commit()
        return {"message" : 'Announcement marked as read', "status_code" : 200}

def getPosts(email):
    user_instance = user.User.query.filter_by(email=email).first()
    all_courses_of_user = courses.User_Course.query.filter_by(user=email).all()
    posts_list = []
    for course in all_courses_of_user:
        posts = communication.Post.query.filter_by(post_course=course.course, post_author = email).all()
        for post in posts:
            static_posts = communication.Post_Attachment.query.filter_by(post_attachment_post=post.post_id).all()
            static_files = []
            for static_post in static_posts:
                static_files.append(static_post.post_attachment_file)
            posts_list.append({ "id" : post.post_id,
                                "course_id" : post.post_course,
                                "title" : post.post_title, 
                                "body" : post.post_content, 
                                "static_files" : static_files, 
                                "createdAt" : post.post_date,
                                "author_id" : post.post_author, 
                                "can_comment": True})
    return {"posts_list" : posts_list, "status_code" : 200}


def postPost(email, course_id, title, body, static_files, can_comment):
    user_instance = user.User.query.filter_by(email=email).first()
    course = courses.Course.query.filter_by(course_id=course_id).first()
    if(course is None):
        return {"message" : 'Course not found. Please enter a valid course id', "status_code" : 404}
    else:
        mapping = courses.User_Course.query.filter_by(user=email, course=course_id).first()
        if(mapping is None):
            return {"message" : 'User not associated with the course. Unauthorised access', "status_code" : 401}
        else:
            post = communication.Post(post_course=course_id, post_title=title, post_content=body, post_author=user_instance.email, post_canComment=can_comment)
            db.session.add(post)
            db.session.commit()
            for static_file in static_files:
                post_attachment = communication.Post_Attachment(post_attachment_post=post.post_id, post_attachment_file=static_file)
                db.session.add(post_attachment)
                db.session.commit()
            return {"message" : 'Post posted successfully', "status_code" : 200}

def coursePost(course_id, email, is_Admin):
        course = courses.Course.query.filter_by(course_id=course_id).first()
        if(course is None):
            return {"message" : 'Course not found. Please enter a valid course id', "status_code" : 404}
        else:
            mapping = courses.User_Course.query.filter_by(user=email, course=course_id).first()
            if(mapping is None and is_Admin == False):
                return {"message" : 'User not associated with the course. Unauthorised access', "status_code" : 401}
            else:
                posts = communication.Post.query.filter_by(post_course=course_id).all()
                posts_list = []
                for post in posts:
                    static_posts = communication.Post_Attachment.query.filter_by(post_attachment_post=post.post_id).all()
                    static_files = []
                    for static_post in static_posts:
                        static_files.append(static_post.post_attachment_file)
                    posts_list.append({ "id" : post.post_id,
                                        "course_id" : post.post_course,
                                        "title" : post.post_title, 
                                        "body" : post.post_content, 
                                        "static_files" : static_files, 
                                        "createdAt" : post.post_date,
                                        "author_id" : post.post_author, 
                                        "can_comment": True})
                return {"posts_list" : posts_list, "status_code" : 200, "course_name" : courses.Course.query.filter_by(course_id=course_id).first().course_name}

def getPostId(post_id, email, is_Admin):
    post = communication.Post.query.filter_by(post_id=post_id).first()
    if(post is None):
        return {"message" : 'Post not found. Please enter a valid post id', "status_code" : 404}
    else:
        course = courses.Course.query.filter_by(course_id=post.post_course).first()
        mapping = courses.User_Course.query.filter_by(user=email, course=course.course_id).first()
        if(mapping is None and is_Admin == False):
            return {"message" : 'User not associated with the course. Unauthorised access', "status_code" : 401}
        else:
            static_posts = communication.Post_Attachment.query.filter_by(post_attachment_post=post.post_id).all()
            static_files = []
            for static_post in static_posts:
                static_files.append(static_post.post_attachment_file)
            post = { "id" : post.post_id,
                    "course_id" : post.post_course,
                    "title" : post.post_title, 
                    "body" : post.post_content, 
                    "static_files" : static_files, 
                    "createdAt" : post.post_date,
                    "author_id": post.post_author,
                    "author_name" : user.User.query.filter_by(email = post.post_author).first().name, 
                    "can_comment": True}
            return {"post" : post, "status_code" : 200}

def deletePost(post_id, email, is_Prof):
    post = communication.Post.query.filter_by(post_id=post_id).first()
    if(post is None):
        return {"message" : 'Post not found. Please enter a valid post id', "status_code" : 404}
    else:
        course = courses.Course.query.filter_by(course_id=post.post_course).first()
        mapping = courses.User_Course.query.filter_by(user=email, course=course.course_id).first()
        if(mapping is None and is_Admin == False):
            return {"message" : 'User not associated with the course. Unauthorised access', "status_code" : 401}
        else:
            if(post.post_author == email or is_Prof == True):
                db.session.delete(post)
                db.session.commit()
                return {"message" : 'Post deleted successfully', "status_code" : 200}
            else:
                return {"message" : 'User not authorised to delete this post', "status_code" : 401}

def postComment(email, parentpost_id, body, static_files):
    userObj = user.User.query.filter_by(email=email).first()
    post = communication.Post.query.filter_by(post_id=parentpost_id).first()
    if(post is None):
        return {"message" : 'Post not found. Please enter a valid post id', "status_code" : 404}
    else:
        course = courses.Course.query.filter_by(course_id=post.post_course).first()
        mapping = courses.User_Course.query.filter_by(user=email, course=course.course_id).first()
        if(mapping is None):
            return {"message" : 'User not associated with the course. Unauthorised access', "status_code" : 401}
        else:
            
            comment = communication.Comment(comment_post= parentpost_id, comment_parentPost=parentpost_id, comment_content=body, comment_author=userObj.email)
            db.session.add(comment)
            db.session.commit()
            for static_file in static_files:
                comment_attachment = communication.Comment_Attachment(comment_attachment_comment=comment.comment_id, comment_attachment_file=static_file)
                db.session.add(comment_attachment)
                db.session.commit()
            return {"message" : 'Comment posted successfully', "status_code" : 200}
            

def getCommentById(comment_id, email, is_Admin):
    comment = communication.Comment.query.filter_by(comment_id=comment_id).first()
    if(comment is None):
        return {"message" : 'Comment not found. Please enter a valid comment id', "status_code" : 404}
    else:
        post = communication.Post.query.filter_by(post_id=comment.comment_post).first()
        course = courses.Course.query.filter_by(course_id=post.post_course).first()
        mapping = courses.User_Course.query.filter_by(user=email, course=course.course_id).first()
        if(mapping is None and is_Admin == False):
            return {"message" : 'User not associated with the course. Unauthorised access', "status_code" : 401}
        else:
            static_comments = communication.Comment_Attachment.query.filter_by(comment_attachment_comment=comment.comment_id).all()
            static_files = []
            for static_comment in static_comments:
                static_files.append(static_comment.comment_attachment_file)
            comment = { "id" : comment.comment_id,
                        "post_id" : comment.comment_post,
                        "parent_id" : comment.comment_parent, 
                        "body" : comment.comment_content, 
                        "static_files" : static_files, 
                        "createdAt" : comment.comment_date,
                        "author_id" : comment.comment_author, 
                        "can_comment": True}
            return {"comment" : comment, "status_code" : 200}


def getCommentsByPostId(post_id):
    post = communication.Post.query.filter_by(post_id=post_id).first()
    if(post is None):
        return {"message" : 'Post not found. Please enter a valid post id', "status_code" : 404}
    else:
        comments = communication.Comment.query.filter_by(comment_post=post_id).all()
        comments_list = []
        for comment in comments:
            static_comments = communication.Comment_Attachment.query.filter_by(comment_attachment_comment=comment.comment_id).all()
            static_files = []
            for static_comment in static_comments:
                static_files.append(static_comment.comment_attachment_file)
            comments_list.append({ "id" : comment.comment_id,
                                    "post_id" : comment.comment_post,
                                    "body" : comment.comment_content, 
                                    "static_files" : static_files, 
                                    "createdAt" : comment.comment_date,
                                    "author_id" : comment.comment_author, 
                                    "author_name" : user.User.query.filter_by(email = comment.comment_author).first().name, 
                                    "can_comment": True})
        return {"comments_list" : comments_list, "status_code" : 200}

def getReplies(parentcomment_id):
    comments = communication.Comment.query.filter_by(comment_parentComment=parentcomment_id).all()
    comments_list = []
    for comment in comments:
        static_comments = communication.Comment_Attachment.query.filter_by(comment_attachment_comment=comment.comment_id).all()
        static_files = []
        for static_comment in static_comments:
            static_files.append(static_comment.comment_attachment_file)
        comments_list.append({ "id" : comment.comment_id,
                                "post_id" : comment.comment_post,
                                "parent_id" : comment.comment_parent, 
                                "body" : comment.comment_content, 
                                "static_files" : static_files, 
                                "createdAt" : comment.comment_date,
                                "author_id" : comment.comment_author, 
                                "can_comment": True})
    return json.dumps({"comments_list" : comments_list, "status_code" : 200})

def deleteComment(comment_id, email, is_Prof):
    comment = communication.Comment.query.filter_by(comment_id=comment_id).first()
    if(comment is None):
        return {"message" : 'Comment not found. Please enter a valid comment id', "status_code" : 404}
    else:
        post = communication.Post.query.filter_by(post_id=comment.comment_post).first()
        course = courses.Course.query.filter_by(course_id=post.post_course).first()
        mapping = courses.User_Course.query.filter_by(user=email, course=course.course_id).first()
        if(mapping is None and is_Admin == False):
            return {"message" : 'User not associated with the course. Unauthorised access', "status_code" : 401}
        else:
            if(comment.comment_author == email or is_Prof == True):
                db.session.delete(comment)
                db.session.commit()
                return {"message" : 'Comment deleted successfully', "status_code" : 200}
            else:
                return {"message" : 'User not authorised to delete this comment', "status_code" : 401}