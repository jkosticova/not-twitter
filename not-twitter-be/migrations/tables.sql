CREATE TABLE "public"."users" (
    "id" varchar(100) NOT NULL,
    "avatar" varchar(100) NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE "public"."messages" (
    "id" varchar(100) NOT NULL,
    "user_id" varchar(100) NOT NULL,
    "text" text NOT NULL,
    PRIMARY KEY ("id")
    CONSTRAINT "messages_user_fk" FOREIGN KEY ("user_id") 
REFERENCES "public"."users" ("id") ON DELETE CASCADE
);


INSERT INTO "public"."users"(id, avatar) VALUES 
('sampleUser123', 'images/person-circle.svg');
COMMIT;