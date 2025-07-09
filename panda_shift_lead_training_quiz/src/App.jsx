import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import AllQuizzesPage from "./pages/quizzes/AllQuizzesPage";
import ChowMeinQuizPage from "./pages/quizzes/ChowMeinQuiz";
import FriedRiceQuizPage from "./pages/quizzes/FriedRiceQuiz";
import CompanyCultureQuizPage from "./pages/quizzes/CompanyCultureQuiz";
import AllInformationPage from "./pages/information/AllInformationPage";
import ChowMeinInformationPage from "./pages/information/ChowMeinInformationPage";
import FriedRiceInformationPage from "./pages/information/FriedRiceInformationPage";
import CompanyCultureInformationPage from "./pages/information/CompanyCultureInformationPage";

// Layout
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page without DockNavigation */}
        <Route path="/" element={<LandingPage />} />

        {/* Pages with DockNavigation */}
        <Route
          path="/home"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/quizzes"
          element={
            <MainLayout>
              <AllQuizzesPage />
            </MainLayout>
          }
        />
        <Route
          path="/quizzes/chow-mein"
          element={
            <MainLayout>
              <ChowMeinQuizPage />
            </MainLayout>
          }
        />
        <Route
          path="/quizzes/fried-rice"
          element={
            <MainLayout>
              <FriedRiceQuizPage />
            </MainLayout>
          }
        />
        <Route
          path="/quizzes/company-culture"
          element={
            <MainLayout>
              <CompanyCultureQuizPage />
            </MainLayout>
          }
        />
        <Route
          path="/information"
          element={
            <MainLayout>
              <AllInformationPage />
            </MainLayout>
          }
        />
        <Route
          path="/information/chow-mein"
          element={
            <MainLayout>
              <ChowMeinInformationPage />
            </MainLayout>
          }
        />
        <Route
          path="/information/fried-rice"
          element={
            <MainLayout>
              <FriedRiceInformationPage />
            </MainLayout>
          }
        />
        <Route
          path="/information/company-culture"
          element={
            <MainLayout>
              <CompanyCultureInformationPage />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
