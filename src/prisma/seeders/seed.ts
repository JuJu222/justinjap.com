import { PrismaClient } from '@prisma/client';
import { seedProjects } from './projects';

const prisma = new PrismaClient();

async function main() {
  await seedProjects(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
