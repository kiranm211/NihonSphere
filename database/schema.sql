CREATE TABLE jlpt_levels (
  id SERIAL PRIMARY KEY,
  code VARCHAR(2) UNIQUE NOT NULL,
  title VARCHAR(50) NOT NULL,
  sort_order INT NOT NULL
);

CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  display_name VARCHAR(100),
  current_level_id INT REFERENCES jlpt_levels(id),
  streak_days INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE lessons (
  id UUID PRIMARY KEY,
  level_id INT NOT NULL REFERENCES jlpt_levels(id),
  title VARCHAR(255) NOT NULL,
  summary TEXT,
  content TEXT NOT NULL
);

CREATE TABLE kanji (
  id UUID PRIMARY KEY,
  level_id INT NOT NULL REFERENCES jlpt_levels(id),
  character VARCHAR(5) NOT NULL,
  onyomi TEXT,
  kunyomi TEXT,
  meaning TEXT NOT NULL,
  stroke_order_hint TEXT,
  srs_interval_days INT NOT NULL DEFAULT 1
);

CREATE TABLE vocabulary (
  id UUID PRIMARY KEY,
  level_id INT NOT NULL REFERENCES jlpt_levels(id),
  word VARCHAR(100) NOT NULL,
  reading VARCHAR(100) NOT NULL,
  meaning TEXT NOT NULL
);

CREATE TABLE questions (
  id UUID PRIMARY KEY,
  level_id INT NOT NULL REFERENCES jlpt_levels(id),
  type VARCHAR(30) NOT NULL,
  prompt TEXT NOT NULL,
  options JSONB NOT NULL,
  answer_index INT NOT NULL,
  explanation TEXT NOT NULL
);

CREATE TABLE progress_items (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  item_type VARCHAR(20) NOT NULL,
  item_id UUID NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT false,
  next_review_at TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE bookmarks (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  item_type VARCHAR(20) NOT NULL,
  item_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
