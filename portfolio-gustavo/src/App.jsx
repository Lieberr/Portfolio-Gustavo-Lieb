import HomePage from "./pages/homePage";
import {Routes, Route} from "react-router"
import Header from "./components/Header";
import ProjectDetailsPage from "./pages/projectDetails";
import PageNotFound from "./pages/notFound";
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
      </main>
      <Footer />
      </div>
    
    </>

  );
}
 
export default App;