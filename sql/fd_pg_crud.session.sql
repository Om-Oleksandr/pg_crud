CREATE TABLE "things"(
    "id" SERIAL PRIMARY KEY,
    "description" TEXT NOT NULL CHECK ("description" != ''),
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)