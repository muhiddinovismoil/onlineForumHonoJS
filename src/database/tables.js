import db from './db.js'
import { logger } from '../utils/index.js'
export const createTables = async () => {
    try {
        if (!(await db.schema.hasTable('users'))) {
            await db.schema.createTable('users', (table) => {
                table.increments('user_id').primary()
                table.string('username').notNullable().unique()
                table.string('email').notNullable().unique()
                table.string('password').notNullable()
                table.timestamp('created_at').defaultTo(db.fn.now())
                table.timestamp('updated_at').defaultTo(db.fn.now())
                table.timestamp('deleted_at')
            })
            logger.info('Users table created.')
        }
        if (!(await db.schema.hasTable('otp_codes'))) {
            await db.schema.createTable('otp_codes', (table) => {
                table.increments('id')
                table.string('otp_code').notNullable()
                table
                    .integer('user_id')
                    .unsigned()
                    .references('user_id')
                    .inTable('users')
            })
        }
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
                table.timestamp('deleted_at')
            })
            logger.info(`Posts table created.`)
        }
    } catch (error) {
        logger.error(error.message)
    }
}
