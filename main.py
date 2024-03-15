import sqlite3

conn = sqlite3.connect('blog.db')
cur = conn.cursor()

def create_user_table():
    cur.execute('''CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    username TEXT,
                    email TEXT,
                    password TEXT
                )''')
    conn.commit()
    print('Users table created successfully')

create_user_table()

conn.close()