from django.conf.urls import url, include
from django.contrib import admin


from graphql_extensions.views import GraphQLView


from cookbook.schema import schema

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^graphql$', GraphQLView.as_view(graphiql=True, schema=schema)),
]
