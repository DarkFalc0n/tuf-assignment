CREATE TABLE `submissions` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`name` text NOT NULL,
	`language` enum('CPP','PYTHON','JAVA','JAVASCRIPT'),
	`stdin` text DEFAULT (''),
	`code` text NOT NULL,
	CONSTRAINT `submissions_id` PRIMARY KEY(`id`)
);
