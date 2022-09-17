/*
  Warnings:

  - You are about to drop the column `taskListId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the `TaskList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_taskListId_fkey";

-- DropForeignKey
ALTER TABLE "TaskList" DROP CONSTRAINT "TaskList_accountId_fkey";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "taskListId",
ADD COLUMN     "taskDocketId" TEXT;

-- DropTable
DROP TABLE "TaskList";

-- CreateTable
CREATE TABLE "TaskDocket" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "TaskDocket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TaskDocket_accountId_key" ON "TaskDocket"("accountId");

-- AddForeignKey
ALTER TABLE "TaskDocket" ADD CONSTRAINT "TaskDocket_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_taskDocketId_fkey" FOREIGN KEY ("taskDocketId") REFERENCES "TaskDocket"("id") ON DELETE CASCADE ON UPDATE CASCADE;
