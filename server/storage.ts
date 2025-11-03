import { type User, type InsertUser } from "@shared/schema";
import mysql from "mysql2/promise";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MySQLStorage implements IStorage {
  private pool: mysql.Pool;

  constructor() {
    this.pool = mysql.createPool({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "Password",
      database: process.env.DB_NAME || "ai_legal_advisor",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  async initialize() {
    const connection = await this.pool.getConnection();
    try {
      await connection.query(`
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
    } finally {
      connection.release();
    }
  }

  async getUser(id: number): Promise<User | undefined> {
    const [rows] = await this.pool.query<mysql.RowDataPacket[]>(
      "SELECT id, email, password, created_at as createdAt FROM users WHERE id = ?",
      [id]
    );
    return rows[0] as User | undefined;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [rows] = await this.pool.query<mysql.RowDataPacket[]>(
      "SELECT id, email, password, created_at as createdAt FROM users WHERE email = ?",
      [email]
    );
    return rows[0] as User | undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [result] = await this.pool.query<mysql.ResultSetHeader>(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [insertUser.email, insertUser.password]
    );

    const user = await this.getUser(result.insertId);
    if (!user) {
      throw new Error("Failed to create user");
    }
    return user;
  }
}

// In-memory storage for development when MySQL is not available
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private nextId: number;

  constructor() {
    this.users = new Map();
    this.nextId = 1;
  }

  async initialize() {
    // No initialization needed for in-memory storage
    console.log("Using in-memory storage (development mode)");
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find((user) => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.nextId++;
    const user: User = {
      id,
      email: insertUser.email,
      password: insertUser.password,
      createdAt: new Date(),
    };
    this.users.set(id, user);
    return user;
  }
}

// Use MySQL if environment variables are set, otherwise use in-memory storage
const useMysql = process.env.USE_MYSQL === "true";

export const storage: IStorage = useMysql ? new MySQLStorage() : new MemStorage();
