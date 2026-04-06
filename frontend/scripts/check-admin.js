const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.findUnique({
    where: { email: "admin@gmail.com" },
    include: {
      accounts: true,
    },
  });

  if (admin) {
    console.log("Admin user found:", JSON.stringify(admin, null, 2));
  } else {
    console.log("Admin user NOT FOUND.");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
