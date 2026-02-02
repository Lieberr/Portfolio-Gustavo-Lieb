import HomePage from "./pages/HomePage";
import {Routes, Route} from "react-router"
import Header from "./components/Header";
import ProjectDetailsPage from "./pages/ProjectDetails";
import PageNotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
    
    </>

  );
}
 
export default App;