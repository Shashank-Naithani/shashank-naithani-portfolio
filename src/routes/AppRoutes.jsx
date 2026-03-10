import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import HeroPage from "../pages/HeroPage";
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import ProjectsPage from "../pages/ProjectsPage";
import ExperiencePage from "../pages/ExperiencePage";
import EducationPage from "../pages/EducationPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <>
                <HeroPage />
                <AboutPage />
                <SkillsPage />
                <ProjectsPage />
                <ExperiencePage />
                <EducationPage />
                <ContactPage />
              </>
            }
          />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
