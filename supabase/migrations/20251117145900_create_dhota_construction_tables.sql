/*
  # Dhota Construction Database Schema

  1. New Tables
    - `contact_queries`
      - `id` (uuid, primary key)
      - `full_name` (text, required) - Name of the person making the query
      - `email` (text, required) - Contact email address
      - `phone_number` (text, required) - Contact phone number
      - `message` (text, required) - Query message content
      - `status` (text, default 'new') - Query status (new, contacted, resolved)
      - `created_at` (timestamptz) - Timestamp when query was submitted
    
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text, required) - Project name/title
      - `description` (text, required) - Project description
      - `location` (text, required) - Project location
      - `area_sqft` (numeric, required) - Total area in square feet
      - `stories` (integer, required) - Number of stories
      - `completion_year` (integer, required) - Year of completion
      - `image_url` (text, required) - Project image URL
      - `featured` (boolean, default false) - Whether to feature on homepage
      - `created_at` (timestamptz) - Timestamp when project was added
    
    - `cost_estimates`
      - `id` (uuid, primary key)
      - `area_sqft` (numeric, required) - Land area in square feet
      - `stories` (integer, required) - Number of stories requested
      - `estimated_cost` (numeric, required) - Calculated cost estimate
      - `email` (text) - Optional email for follow-up
      - `phone_number` (text) - Optional phone for follow-up
      - `created_at` (timestamptz) - Timestamp when estimate was calculated

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access on projects
    - Add policies for public insert on contact_queries and cost_estimates
    - Restrict admin operations to authenticated users
*/

CREATE TABLE IF NOT EXISTS contact_queries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone_number text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  location text NOT NULL,
  area_sqft numeric NOT NULL,
  stories integer NOT NULL,
  completion_year integer NOT NULL,
  image_url text NOT NULL,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS cost_estimates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  area_sqft numeric NOT NULL,
  stories integer NOT NULL,
  estimated_cost numeric NOT NULL,
  email text,
  phone_number text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_queries ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE cost_estimates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  USING (true);

CREATE POLICY "Anyone can submit contact queries"
  ON contact_queries FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can create cost estimates"
  ON cost_estimates FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact queries"
  ON contact_queries FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can view cost estimates"
  ON cost_estimates FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage projects"
  ON projects FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

INSERT INTO projects (title, description, location, area_sqft, stories, completion_year, image_url, featured) VALUES
('Green Valley Residency', 'Luxury residential complex with modern amenities and sustainable design features. Includes landscaped gardens and community spaces.', 'Mumbai, Maharashtra', 45000, 15, 2023, 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200', true),
('Silverstone Commercial Hub', 'State-of-the-art commercial building featuring premium office spaces with advanced infrastructure and smart building systems.', 'Pune, Maharashtra', 62000, 8, 2022, 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200', true),
('Heritage Villa Complex', 'Premium villa development combining traditional architecture with modern comfort. Each villa features private gardens.', 'Bangalore, Karnataka', 35000, 2, 2023, 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200', true),
('Tech Park Tower', 'Modern IT park with flexible workspace solutions, cafeteria, and recreational facilities for tech companies.', 'Hyderabad, Telangana', 85000, 12, 2021, 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200', false),
('Sunrise Apartments', 'Affordable housing project with excellent connectivity and basic amenities for middle-income families.', 'Ahmedabad, Gujarat', 28000, 6, 2022, 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200', false),
('Industrial Warehouse Complex', 'Large-scale warehousing facility with loading docks, climate control, and 24/7 security systems.', 'Chennai, Tamil Nadu', 120000, 3, 2023, 'https://images.pexels.com/photos/1172849/pexels-photo-1172849.jpeg?auto=compress&cs=tinysrgb&w=1200', false);