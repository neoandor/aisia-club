-- AISIA Club Schema (Phase 2 prep)
-- Tables: members, projects, votes, comments

-- Members (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS aisia_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_id UUID UNIQUE, -- links to auth.users
  display_name TEXT NOT NULL,
  bio TEXT,
  avatar_url TEXT,
  badge TEXT DEFAULT 'curious', -- curious | builder | expert
  skills TEXT[], -- e.g. ['python', 'llm', 'computer-vision']
  linkedin_url TEXT,
  github_url TEXT,
  twitter_url TEXT,
  website_url TEXT,
  company TEXT,
  role TEXT, -- e.g. "Founder", "Developer", "Student"
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Projects / Showcase
CREATE TABLE IF NOT EXISTS aisia_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID REFERENCES aisia_members(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL, -- app | research | tutorial | tool | art | business
  tags TEXT[],
  demo_url TEXT,
  github_url TEXT,
  image_url TEXT,
  vote_count INT DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'published', -- draft | published | archived
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Votes (one per member per project)
CREATE TABLE IF NOT EXISTS aisia_votes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID REFERENCES aisia_members(id) ON DELETE CASCADE,
  project_id UUID REFERENCES aisia_projects(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(member_id, project_id)
);

-- Comments on projects
CREATE TABLE IF NOT EXISTS aisia_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID REFERENCES aisia_members(id) ON DELETE CASCADE,
  project_id UUID REFERENCES aisia_projects(id) ON DELETE CASCADE,
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Newsletter signups (no auth needed)
CREATE TABLE IF NOT EXISTS aisia_newsletter (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  email TEXT UNIQUE NOT NULL,
  source TEXT DEFAULT 'website', -- website | event | referral
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_projects_member ON aisia_projects(member_id);
CREATE INDEX IF NOT EXISTS idx_projects_category ON aisia_projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_votes ON aisia_projects(vote_count DESC);
CREATE INDEX IF NOT EXISTS idx_votes_project ON aisia_votes(project_id);
CREATE INDEX IF NOT EXISTS idx_comments_project ON aisia_comments(project_id);
