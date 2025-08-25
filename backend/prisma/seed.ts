/**
 * Seed script to populate database with example categories, listings and reviews.
 * Run with `npm run prisma:seed`.
 */
import { PrismaClient, ReviewStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const arzte = await prisma.category.create({
    data: { name: 'Ärzte', slug: 'aerzte', synonyms: ['doctor'] },
  });
  const restaurants = await prisma.category.create({
    data: { name: 'Restaurants', slug: 'restaurants' },
  });

  const addr = await prisma.address.create({
    data: {
      street: 'Domkloster 4',
      zip: '50667',
      city: 'Köln',
      lat: 50.9413,
      lon: 6.9583,
    },
  });

  const listing = await prisma.companyListing.create({
    data: {
      name: 'Hausarzt Dr. Müller',
      slug: 'hausarzt-dr-mueller',
      description: 'Ihr Hausarzt in Köln.',
      addressId: addr.id,
      categories: {
        create: [{ categoryId: arzte.id }],
      },
    },
  });

  await prisma.review.create({
    data: {
      listingId: listing.id,
      rating: 5,
      text: 'Sehr kompetent und freundlich!',
      status: ReviewStatus.APPROVED,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
