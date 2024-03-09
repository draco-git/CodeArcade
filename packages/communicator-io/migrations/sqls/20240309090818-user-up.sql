CREATE TABLE IF NOT EXISTS user_info (
    userId uuid default gen_random_uuid(),
    userName varchar NOT NULL,
    phoneNumber varchar PRIMARY KEY NOT NULL,
    password varchar NOT NULL
);