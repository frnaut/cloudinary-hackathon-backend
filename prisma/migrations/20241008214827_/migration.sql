/*
  Warnings:

  - Added the required column `example` to the `Filter` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Filter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "public_id" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "example" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Filter" ("created_at", "description", "height", "id", "name", "prompt", "public_id", "updated_at", "width") SELECT "created_at", "description", "height", "id", "name", "prompt", "public_id", "updated_at", "width" FROM "Filter";
DROP TABLE "Filter";
ALTER TABLE "new_Filter" RENAME TO "Filter";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
