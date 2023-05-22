CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`avatar` text,
	`created_at` text DEFAULT (CURRENT_TIME),
	`updated_at` text DEFAULT (CURRENT_TIME)
);

CREATE INDEX `email_idx` ON `users` (`email`);