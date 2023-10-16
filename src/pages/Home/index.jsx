import styles from "./Home.module.css";
import ReportList from "./components/ReportList";
import Chart from "./components/Chart";

const Home = () => {
  return (
    <main className={styles.container}>
      <ReportList />
      <Chart />
    </main>
  );
};

export default Home;
