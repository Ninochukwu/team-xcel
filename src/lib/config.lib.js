import dotenv from 'dotenv';
dotenv.config();

export const config = {
    get( key )
    {
        return process.env[key];
    },

    getOrThrow(key) {
        const value = this.get(key);

        if(!value) {
            throw new Error(`Missing environment variable: ${key}`);
        }

        return value;
    }
}
export default {
    getOrThrow ( key )
    {
        const value = process.env[ key ];

        if ( !value ) throw new Error( `Missing required environment variable: ${key}` );

        return value;
    },

    getEnvironment ()
    {
        return process.env.NODE_ENV || 'development';
    }
}