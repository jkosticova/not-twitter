CREATE TABLE "public"."users" (
    "user_id" varchar(100) NOT NULL,
    "username" varchar(100) NOT NULL,
    "password" varchar(100) NOT NULL,
    "avatar" varchar(100) NOT NULL,
    PRIMARY KEY ("user_id")
);

CREATE TABLE "public"."messages" (
    "message_id" varchar(100) NOT NULL,
    "author" varchar(100) NOT NULL,
    "text" text NOT NULL,
    PRIMARY KEY ("message_id"),
    CONSTRAINT "fk_messages_author_user_id" FOREIGN KEY ("author") 
    REFERENCES "public"."users" ("user_id") 
    ON DELETE CASCADE
);

CREATE TABLE "public"."friends" (    
    "user1_id" varchar(100) NOT NULL,
    "user2_id" varchar(100) NOT NULL,
    PRIMARY KEY ("user1_id", "user2_id"),
    CONSTRAINT "user_user_fk1" FOREIGN KEY ("user1_id") REFERENCES "public"."users" ("user_id") ON DELETE CASCADE, 
    CONSTRAINT "user_user_fk2" FOREIGN KEY ("user2_id") REFERENCES "public"."users" ("user_id") ON DELETE CASCADE, 
    CONSTRAINT "unique_friendship" CHECK (
        ("user1_id" < "user2_id") 
        OR ("user1_id" > "user2_id")
    )
);

CREATE TABLE "session" (
    "sid" varchar NOT NULL PRIMARY KEY,
    "sess" json NOT NULL,
    "expire" timestamp(6) NOT NULL
);

-- sampleUser1, password1
INSERT INTO "public"."users"(user_id, username, password, avatar) VALUES 
('100','sampleUser1', '$2a$12$56oXZAghALRjfiZgJWEQS.1f3NIidXsDe8nrxBe0RO7w1Il7.Y81S', 'images/person-circle.svg');
-- sampleUser2, password2
INSERT INTO "public"."users"(user_id, username, password, avatar) VALUES 
('200','sampleUser2', '$2a$12$.Mj67PkM8s3W6Xyplc.AEu52UscuEfxhHOJIeZAkZy.dAlyYnikKa', 'images/person-circle.svg');

-- sampleUser1 and sampleUser2 are friends
INSERT INTO "public"."friends" (user1_id, user2_id) VALUES
('100', '200');
