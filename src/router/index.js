import { createWebHistory, createRouter } from "vue-router";

import Home from "../components/Home";
import Profile from "../components/Profile";
import Strength from "../components/Strength";
import Career from "../components/Career";
import Project from "../components/Projects/Project";
import CalendarApp from "../components/Projects/CalendarApp";
import ShoppingMall from "../components/Projects/ShoppingMall";
import Contest from "../components/Projects/Contest";
import VisitingStudent from "../components/Activities/VisitingStudent";
import Club from "../components/Activities/Club";
import Bootcamp from "../components/Activities/Bootcamp";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/profile",
        component: Profile
    },
    {
        path: "/strength",
        component: Strength
    },
    {
        path: "/career",
        component: Career
    },
    {
        path: "/project",
        component: Project
    },
    {
        path: "/first_project",
        component: CalendarApp
    },
    {
        path: "/second_project",
        component: ShoppingMall
    },
    {
        path: "/contest",
        component: Contest
    },
    {
        path: "/visiting_student",
        component: VisitingStudent
    },
    {
        path: "/club",
        component: Club
    },
    {
        path: "/bootcamp",
        component: Bootcamp
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;