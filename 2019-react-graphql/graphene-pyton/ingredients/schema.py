# cookbook/ingredients/schema.py
import graphene
from graphql_extensions.exceptions import GraphQLError
from graphene_django.types import DjangoObjectType
from time import sleep

from ingredients.models import Category


class CategoryType(DjangoObjectType):
    class Meta:
        model = Category


class Query(object):
    all_categories = graphene.List(CategoryType)
    error_400 = graphene.String()
    error_403 = graphene.String()
    error_500 = graphene.String()

    @staticmethod
    def resolve_all_categories(self, info, **kwargs):
        sleep(2)

        category_count = Category.objects.all().count()
        # category_count = 2

        if category_count >= 1:
            return Category.objects.all()
        else:
            # Something went wrong, Throw GraphQL Error
            raise GraphQLError(
                message="No categories found, please try again",
                code=400
            )

    @staticmethod
    def resolve_error_400(self, info, **kwargs):
        sleep(2)
        # Your actual code
        # ...


        raise GraphQLError(
            message="Something went wrong, please try again",
            code=400
        )

    @staticmethod
    def resolve_error_403(self, info, **kwargs):
        # Your actual code
        # ...

        raise GraphQLError(
            message="You are not authorized. Please login first",
            code=403
        )

    @staticmethod
    def resolve_error_500(self, info, **kwargs):
        # Your actual code
        # ...

        raise GraphQLError(
            message="Server crashed",
            code=500
        )


# Add New Category Mutation
class AddCategory(graphene.Mutation):
    class Arguments:
        # The input arguments for this mutation
        categoryName = graphene.String(required=True)

    # The class attributes define the response of the mutation
    category = graphene.Field(CategoryType)


    @staticmethod
    def mutate(self, info, categoryName):
        _category = Category.objects.create(name=categoryName)

        if not _category:
            raise GraphQLError(
                message="An error occurred while adding category",
                code=401
            )

        # Notice we return an instance of this mutation
        return AddCategory(category=_category)


class Mutation(object):
    add_category = AddCategory.Field()
