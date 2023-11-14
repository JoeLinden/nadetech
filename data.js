import { sql } from '@vercel/postgres';

export async function fetchVideos() {
    try {
        const data = await sql`
            SELECT * 
            FROM videos`;
        return data.rows;
    } catch (error) {
        console.error("Database Error: ", error);
        throw new Error("Failed to fetch videos");
    }
}