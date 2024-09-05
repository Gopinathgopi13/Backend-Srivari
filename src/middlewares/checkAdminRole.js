import { prisma } from "../utils/prisma.js";

export const checkAdminRole = async (req, res, next) => {
  const userId = req.user.id;

  try {
    // Fetch the user's roles
    const userWithRoles = await prisma.user.findUnique({
      where: { user_id: userId },
      include: { UserRole: { include: { role: true } } },
    });

    if (!userWithRoles) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the user has the "admin" role
    const isAdmin = userWithRoles.UserRole.some(
      (userRole) => userRole.role.role_name === "admin"
    );

    if (!isAdmin) {
      return res
        .status(403)
        .json({ error: "You do not have permission to perform this action" });
    }

    // Proceed to the next middleware/controller if the user is an admin
    next();
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
