INSERT INTO jlpt_levels (code, title, sort_order)
VALUES
  ('N5', 'Foundation', 1),
  ('N4', 'Beginner+', 2),
  ('N3', 'Intermediate', 3),
  ('N2', 'Upper Intermediate', 4),
  ('N1', 'Advanced', 5);

INSERT INTO lessons (id, level_id, title, summary, content)
VALUES
  ('00000000-0000-0000-0000-000000000101', 1, 'Particles は vs が', 'Topic vs subject usage', 'は marks the topic while が marks subject/emphasis.'),
  ('00000000-0000-0000-0000-000000000102', 1, 'です / ます Polite Form', 'Polite sentence forms', 'Use です and ます for polite speech.');

INSERT INTO kanji (id, level_id, character, onyomi, kunyomi, meaning, stroke_order_hint, srs_interval_days)
VALUES
  ('00000000-0000-0000-0000-000000000201', 1, '日', 'ニチ / ジツ', 'ひ / か', 'day, sun', '4 strokes placeholder', 1),
  ('00000000-0000-0000-0000-000000000202', 1, '学', 'ガク', 'まなぶ', 'study, learning', '8 strokes placeholder', 2);

INSERT INTO vocabulary (id, level_id, word, reading, meaning)
VALUES
  ('00000000-0000-0000-0000-000000000301', 1, '友達', 'ともだち', 'friend'),
  ('00000000-0000-0000-0000-000000000302', 1, '学校', 'がっこう', 'school'),
  ('00000000-0000-0000-0000-000000000303', 1, '食べる', 'たべる', 'to eat');

INSERT INTO questions (id, level_id, type, prompt, options, answer_index, explanation)
VALUES
  (
    '00000000-0000-0000-0000-000000000401',
    1,
    'kanji-reading',
    'What is the reading of 学校?',
    '["がっこう", "がくこう", "がっこ", "こうがく"]'::jsonb,
    0,
    '学校 is read がっこう.'
  );
