import { type SchemaTypeDefinition } from 'sanity'
import { articles } from './schema/articles'
import { comments } from './schema/comments'
import { topics } from './schema/topics'
import { author } from './schema/author'
import { polls } from './schema/polls'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [articles, topics, comments, author, polls],
}
