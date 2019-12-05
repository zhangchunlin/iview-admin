#coding=utf-8
from uliweb import expose, functions, models
from uliweb.contrib.auth import set_user_session, logout
from json import loads as json_loads
from operator import itemgetter

@expose('/bapi')
class BackendAuth(object):
    def login(self):
        d = json_loads(request.data)
        username = d.get("userName")
        password = d.get("password")
        token = None
        if username and password:
            f, d = functions.authenticate(username=username, password=password)
            if f:
                User = models.user
                user = User.get(User.c.username==username)
                set_user_session(user)
                token = request.session.key

        return json({"token":token})

    def logout(self):
        logout()
        return json({})

    def message_count(self):
        return json(0)
