import type { NextPage } from "next";
import styles from "./williams.module.css";

export type WilliamsType = {
  className?: string;
};

const Williams: NextPage<WilliamsType> = ({ className = "" }) => {
  return (
    <section className={[styles.williams, className].join(" ")}>
      <div className={styles.title}>
        <h1 className={styles.exploreOurFull}>
          Explore our full range of excavation services below
        </h1>
      </div>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceList}>
          <div className={styles.septicSystemInstallation}>
            Septic System Installation
          </div>
        </div>
        <div className={styles.serviceList}>
          <div className={styles.landAndTree}>Land and Tree Clearing</div>
        </div>
        <div className={styles.serviceList}>
          <div className={styles.septicSystemInstallation}>
            Retaining Wall Construction
          </div>
        </div>
        <div className={styles.serviceList3}>
          <div className={styles.landAndTree}>
            Basement and Pond Excavations
          </div>
        </div>
        <div className={styles.serviceList}>
          <div className={styles.septicSystemInstallation}>
            Gravel Pad Preparation
          </div>
        </div>
        <div className={styles.serviceList3}>
          <div className={styles.septicSystemInstallation}>
            Site Development for New Homes
          </div>
        </div>
        <div className={styles.serviceList3}>
          <div className={styles.septicSystemInstallation}>
            Driveway Installation and Grading
          </div>
        </div>
        <div className={styles.serviceList3}>
          <div className={styles.septicSystemInstallation}>
            Foundation Repair and Waterproofing
          </div>
        </div>
        <div className={styles.serviceList3}>
          <div className={styles.culvertAndEntrance}>
            Culvert and Entrance Installation
          </div>
        </div>
        <div className={styles.serviceList3}>
          <div className={styles.septicSystemInstallation}>
            Ditching and Tile Drainage Solutions
          </div>
        </div>
        <button className={styles.serviceList10}>
          <div className={styles.demolitionServices}>Demolition Services</div>
        </button>
      </div>
    </section>
  );
};

export default Williams;
