import { Toaster } from "./components/ui/toast";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
     <AppRoutes/>
     <Toaster/>
    </>
  )
}
export default App