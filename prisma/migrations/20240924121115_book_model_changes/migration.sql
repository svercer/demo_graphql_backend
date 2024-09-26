-- DropIndex
DROP INDEX "Book_userId_fkey";

-- RenameForeignKey
ALTER TABLE "Book" RENAME CONSTRAINT "FK_Book_User" TO "Book_userId_fkey";
