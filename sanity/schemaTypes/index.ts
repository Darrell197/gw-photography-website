import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {eventType} from './eventType'
import {weddingType} from './weddingType'
import {lifestyleType} from './lifestyleType'
import {studioType} from './studioType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    eventType,
    weddingType,
    lifestyleType,
    studioType,
  ],
}