import { type SchemaTypeDefinition } from 'sanity'
import { articles } from './schema/articles'
import { comments } from './schema/comments'
import { topics } from './schema/topics'
import { author } from './schema/author'
import { polls } from './schema/polls'
import { reviews } from './schema/reviews'
import { subject } from './schema/subject'
import { subTopics } from './schema/subtopics'
import { questions } from './schema/questions'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [articles, subject, topics, subTopics, questions, comments, author, polls, reviews],
}
