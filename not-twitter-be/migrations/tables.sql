CREATE TABLE "public"."users" (
    "id" varchar(100) NOT NULL,
    "username" varchar(100) NOT NULL,
    "password" varchar(100) NOT NULL,
    "avatar" varchar(100) NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE "public"."messages" (
    "id" varchar(100) NOT NULL,
    "user_id" varchar(100) NOT NULL,
    "text" text NOT NULL,
    PRIMARY KEY ("id"),
    CONSTRAINT "messages_user_fk" FOREIGN KEY ("user_id") 
REFERENCES "public"."users" ("id") ON DELETE CASCADE
);

-- sampleUser1, password1
INSERT INTO "public"."users"(id, avatar) VALUES 
('100','sampleUser1', '$2a$12$56oXZAghALRjfiZgJWEQS.1f3NIidXsDe8nrxBe0RO7w1Il7.Y81S', 'images/person-circle.svg');
-- sampleUser2, password2
INSERT INTO "public"."users"(id, avatar) VALUES 
('200','sampleUser2', '$2a$12$.Mj67PkM8s3W6Xyplc.AEu52UscuEfxhHOJIeZAkZy.dAlyYnikKa', 'images/person-circle.svg');
COMMIT;