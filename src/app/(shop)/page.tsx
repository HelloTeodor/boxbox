import { Suspense } from 'react';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
import { HeroSection } from '@/components/home/HeroSection';
import { CategoriesGrid } from '@/components/home/CategoriesGrid';
import { WhyGiftora } from '@/components/home/WhyGiftora';
import { NewsletterBanner } from '@/components/home/NewsletterBanner';
import { Sustainability } from '@/components/home/Sustainability';
import { SustainabilityBanner } from '@/components/home/SustainabilityBanner';
import { LovedByThousands } from '@/components/home/LovedByThousands';

async function getCategories() {
  return prisma.category.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: 'asc' },
    take: 8,
  });
}

export default async function HomePage() {
  const categories = await getCategories();

  return (
    <>
      <HeroSection />
      <CategoriesGrid categories={categories} />
      <Sustainability />
      <SustainabilityBanner />
      <WhyGiftora products={[]} />
      <LovedByThousands />
      <NewsletterBanner />
    </>
  );
}
