const express = require("express");
const { body, query } = require("express-validator");
const authMiddleware = require("../middlewares/auth");
const {
    createEvent,
    getEvents,
    getEvent,
    getPublicEvent,
    toggleShare,
} = require("../controllers/eventsController");

const router = express.Router();

// Protected
router.post(
    "/",
    authMiddleware,
    [
        body("title").notEmpty(),
        body("datetime").isISO8601(),
        body("location").notEmpty(),
    ],
    createEvent
);

router.get("/", authMiddleware, getEvents);
router.get("/:id", authMiddleware, getEvent);
router.post("/:id/toggle-share", authMiddleware, toggleShare);

// Public
router.get("/public/:shareId", getPublicEvent);

module.exports = router;
