import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Simulate database user check (replace with real DB logic)
    const user = { id: 1, email };

    if (email === "test@example.com" && password === "password123") {
      // Generate JWT token
      const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });

      // Redirect to Netlify with the token as a query parameter
      return res.redirect(
        `https://your-netlify-site.netlify.app/settings?token=${token}`
      );
    }

    return res.status(401).json({ message: "Invalid credentials" });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
