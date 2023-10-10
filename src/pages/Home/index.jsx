import styles from "./Home.module.css";
import ReportList from "./components/ReportList";
import Chart from "./components/Chart";
import Status from "./components/Status";

const Home = () => {
  return (
    <main className={styles.container}>
      <ReportList />
      <Chart />
      <Status />
    </main>
  );
};

export default Home;
