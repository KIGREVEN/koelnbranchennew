-- Prisma migration for initial schema
CREATE TABLE "User" (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  "passwordHash" TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'USER'
);

CREATE TABLE "Category" (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  "parentId" INTEGER REFERENCES "Category"(id) ON DELETE SET NULL,
  synonyms TEXT[]
);

CREATE TABLE "Address" (
  id SERIAL PRIMARY KEY,
  street TEXT NOT NULL,
  zip TEXT NOT NULL,
  city TEXT NOT NULL,
  district TEXT,
  lat DOUBLE PRECISION NOT NULL,
  lon DOUBLE PRECISION NOT NULL
);

CREATE TABLE "CompanyListing" (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  "addressId" INTEGER REFERENCES "Address"(id),
  contacts JSONB,
  "openingHours" JSONB,
  plan TEXT,
  "sponsoredRank" INTEGER DEFAULT 0,
  verified BOOLEAN DEFAULT FALSE,
  "claimedBy" INTEGER REFERENCES "User"(id),
  "createdAt" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "ListingCategory" (
  "listingId" INTEGER REFERENCES "CompanyListing"(id) ON DELETE CASCADE,
  "categoryId" INTEGER REFERENCES "Category"(id) ON DELETE CASCADE,
  PRIMARY KEY ("listingId", "categoryId")
);

CREATE TABLE "Review" (
  id SERIAL PRIMARY KEY,
  "listingId" INTEGER REFERENCES "CompanyListing"(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL,
  text TEXT NOT NULL,
  status TEXT DEFAULT 'PENDING',
  "createdAt" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "ProductPlan" (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  features JSONB NOT NULL,
  price DOUBLE PRECISION NOT NULL
);
