import { Router } from "express";
import { getUsers, getUsersById, Register, CreateUser, deleteUser, updateUser, Login, Logout } from "../controllers/Users.js";
// import { getUsers, getUsersById, Register,  CreateUser, deleteUser, updateUser, Login, Logout } from "../controllers/Users.js";
import { getCostumer, getCostumerById, updateCostumer, CreateCostumer, deleteCostumer } from "../controllers/Costumer.js";
// import { getBayar, getBayarById, updateBayar, CreateBayar, deleteBayar } from "../controllers/Bayar.js";
import { getSiteplan, getSiteplanById, CreateSiteplan, updateSiteplan, deleteSiteplan } from "../controllers/SitePlan.js";
import { getKaryawan, getKaryawanById, CreateKaryawan, deleteKaryawan, updateKaryawan } from "../controllers/karyawan.js";
import { verifytoken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = Router();

router.get('/users', verifytoken, getUsers);
router.get('/users/:id', getUsersById);
router.post('/register', Register);
router.post('/users', CreateUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

// costumer
router.get('/costumer', getCostumer);
router.get('/costumer/:id', getCostumerById);
router.post('/costumer', CreateCostumer);
router.patch('/costumer/:id', updateCostumer);
router.delete('/costumer/:id', deleteCostumer);


// Karyawan
router.get('/karyawan', getKaryawan);
router.get('/karyawan/:id', getKaryawanById);
router.post('/karyawan', CreateKaryawan);
router.patch('/karyawan/:id', updateKaryawan);
router.delete('/karyawan/:id', deleteKaryawan);

// Bayar
// router.get('/bayar', getBayar);
// router.get('/bayar/:id', getBayarById);
// router.post('/bayar', CreateBayar);
// router.patch('/bayar/:id', updateBayar);
// router.delete('/bayar/:id', deleteBayar);

// Siteplan
router.get('/siteplan', getSiteplan);
router.get('/siteplan/:id', getSiteplanById);
router.post('/siteplan', CreateSiteplan);
router.patch('/siteplan/:id', updateSiteplan);
router.delete('/siteplan/:id', deleteSiteplan);


export default router;