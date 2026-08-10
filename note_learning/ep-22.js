// prisma
// ตอนนี้ใช้ adapter ด้วย เพราะว่าใช้ประโยชน์ในการสร้าง Pool ให้ด้วย
import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@prisma/client";
const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });

export default prisma;

// การใช้ upsert ==== Create or Update ถ้าเจอข้อมูลก็จะ update ถ้าไม่มีก็ Create