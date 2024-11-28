import db from './db.js'
import { logger } from '../utils/index.js'
export const createTables = async () => {
    try {
        //Users
        if (!(await db.schema.hasTable('users'))) {
            await db.schema.createTable('users', (table) => {
                table.increments('user_id').primary()
                table.string('username').notNullable().unique()
                table.string('email').notNullable().unique()
                table.string('password').notNullable()
                table.timestamp('created_at').defaultTo(db.fn.now())
                table.timestamp('updated_at').defaultTo(db.fn.now())
                table.timestamp('deleted_at').notNullable()
            })
            logger.info('Users table created.')
        }
        // Categories
        if (!(await db.schema.hasTable('categories'))) {
            await db.schema.createTable('categories', (table) => {
                table.increments('category_id').primary()
                table.string('name').notNullable()
                table.timestamp('created_at').defaultTo(db.fn.now())
                table.timestamp('updated_at').defaultTo(db.fn.now())
                table.timestamp('deleted_at').notNullable()
            })
            logger.info('Categories table created.')
        }
        // Tags
        if (!(await db.schema.hasTable('tags'))) {
            await db.schema.createTable('tags', (table) => {
                table.increments('tags_id').primary()
                table.string('name').notNullable()
                table.timestamp('created_at').defaultTo(db.fn.now())
                table.timestamp('updated_at').defaultTo(db.fn.now())
                table.timestamp('deleted_at').notNullable()
            })
            logger.info('Tags table created.')
        }
        //Posts
        if (!(await db.schema.hasTable('posts'))) {
            await db.schema.createTable('posts', (table) => {
                table.increments('post_id').primary()
                table
                    .integer('user_id')
                    .unsigned()
                    .references('user_id')
                    .inTable('users')
                    .notNullable()
                table.string('title').notNullable()
                table.string('body').notNullable()
                table
                    .integer('category_id')
                    .unsigned()
                    .references('category_id')
                    .inTable('categories')
                    .notNullable()
                table.timestamp('created_at').defaultTo(db.fn.now())
                table.timestamp('updated_at').defaultTo(db.fn.now())
                table.timestamp('deleted_at').notNullable()
            })
        }
        // Comments
        if (!(await db.schema.hasTable('comments'))) {
            await db.schema.createTable('comments', (table) => {
                table.increments('comments_id').primary()
                table
                    .integer('user_id')
                    .unsigned()
                    .references('user_id')
                    .inTable('users')
                    .notNullable()
                table
                    .integer('posts_id')
                    .unsigned()
                    .references('posts_id')
                    .inTable('Posts')
                    .notNullable()
                table.string('title').notNullable()
                table.text('body').notNullable()
                table.timestamp('created_at').defaultTo(db.fn.now())
                table.timestamp('updated_at').defaultTo(db.fn.now())
                table.timestamp('deleted_at').notNullable()
            })
        }
        //PostTags
        if (!(await db.schema.hasTable('post_tags'))) {
            await db.schema.createTable('post_tags', (table) => {
                table.increments('post_tags_id').primary()
                table
                    .integer('post_id')
                    .unsigned()
                    .references('post_id')
                    .inTable('posts')
                    .notNullable()
                table
                    .integer('posts_id')
                    .unsigned()
                    .references('posts_id')
                    .inTable('Posts')
                    .notNullable()
                table.timestamp('created_at').defaultTo(db.fn.now())
            })
        }

    } catch (error) {
        logger.error(error.message)
    }
}
