// ================= Client ====================

// ใช้ zodResolver เชื่อม Zod schema กับ React Hook Form
// เพื่อ validate ข้อมูลก่อน submit form
const { register, handleSubmit, formState } = useForm({
  resolver: zodResolver(profileSchema),
});

// useAuth ใช้เข้าถึง authentication state และ getToken ของ Clerk
const { getToken } = useAuth();

// ดึง session token แล้วส่งไปกับ Authorization header
const token = await getToken();

axios.post("/api/profile/create", data, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// ================= Server ====================

// clerkMiddleware ต้องอยู่ก่อน middleware และ routes อื่น
// เพื่อให้ Clerk ตรวจ token และแนบ auth state เข้า request
app.use(clerkMiddleware());

// getAuth(req) ใช้อ่านสถานะ authentication และ userId
const { isAuthenticated, userId } = getAuth(req);

// ถ้าไม่มี session ที่ถูกต้อง ให้ส่ง error 401
if (!isAuthenticated) {
  return renderError(401, "Unauthorized");
}

// ดึงข้อมูล user จาก Clerk แล้วแนบไว้ใน request
const user = await clerkClient.users.getUser(userId);
req.user = user;

// next() ทำให้ request ไปทำงานต่อใน controller
next();

// Error middleware ต้องวางหลัง routes
app.use(handleError);

// renderError ไม่ควรเป็น async หากต้องการ throw error แบบ synchronous
// เพื่อให้ try...catch จับ error แล้วส่งต่อด้วย next(error) ได้