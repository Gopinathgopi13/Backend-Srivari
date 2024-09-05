import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Entering seeding process");

  // Create roles
  const superAdminRole = await prisma.role.create({
    data: {
      role_name: "super_admin",
    },
  });

  const adminRole = await prisma.role.create({
    data: {
      role_name: "admin",
    },
  });

  const userRole = await prisma.role.create({
    data: {
      role_name: "user",
    },
  });

  // Hash password
  const hashedPassword = await bcrypt.hash("Admin123!", 10);

  // Create users
  const user1 = await prisma.user.create({
    data: {
      email: "user1@example.com",
      password: hashedPassword,
      first_name: "John",
      last_name: "Doe",
      address: {
        create: [
          {
            street: "123 Elm Street",
            city: "Somewhere",
            state: "CA",
            zip: "12345",
            country: "USA",
          },
        ],
      },
      UserRole: {
        create: [
          {
            role: { connect: { role_id: adminRole.role_id } },
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "user2@example.com",
      password: hashedPassword,
      first_name: "Jane",
      last_name: "Smith",
      address: {
        create: [
          {
            street: "456 Oak Avenue",
            city: "Elsewhere",
            state: "NY",
            zip: "67890",
            country: "USA",
          },
        ],
      },
      UserRole: {
        create: [
          {
            role: { connect: { role_id: userRole.role_id } },
          },
        ],
      },
    },
  });

  console.log("Seed data has been added successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error during seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
