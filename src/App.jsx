import Header from "./components/Header";
import Section1 from "./components/Section1";

function App() {
  return (
    <div className="flex flex-col items-center min-h-[100vh] bg-gray-400 overflow-auto">
      <div className="w-full sm:w-9/12  md:w-7/12 lg:w-6/12 xl:w-[31rem] bg-gray-100 h-full relative">
        <Header />
        <Section1 />
      </div>
    </div>
  );
}

export default App;
