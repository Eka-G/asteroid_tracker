import Image from "next/image";
import { DangerousWarning } from "@components";
import { formatDate } from "@shared/helpers";
import { getAsteroidInfo } from "./_helpers";
import styles from "./page.module.scss";

export default async function OrderPage({
  params,
}: {
  params: { id: string };
}) {
  const asteroidInfo = await getAsteroidInfo(params.id);

  const aproachList = asteroidInfo.closeAproach.map(
    ({ date, distanceKm, speedKmPerH, orbitingBody }) => {
      const formatedDate = formatDate(date);

      return (
        <li key={formatedDate} className={styles.approach__item}>
          <p className={styles.approach__date}>{formatedDate}</p>
          <p>
            <strong>Дистанция:</strong> {distanceKm} км
          </p>
          <p>
            <strong>Cкорость:</strong> {speedKmPerH} км/ч
          </p>
          <p>
            <strong>Орбита:</strong> {orbitingBody}
          </p>
        </li>
      );
    },
  );

  return (
    <section>
      <h2>Параметры астероида</h2>
      <div className={styles.profile}>
        <Image
          className=""
          width="92"
          height="100"
          src="/img/asteroid-avatar.png"
          alt="asteroid"
        />
        <div className={styles.profile__characteristics}>
          <h3>Наименование: {asteroidInfo.name}</h3>
          <h3>Размер: {asteroidInfo.size} км</h3>
          {asteroidInfo.isDangerous && <DangerousWarning />}
        </div>
      </div>

      <div className={styles.approach}>
        <h3 className={styles.approach__title}>Cписок сближений:</h3>
        <ul>{aproachList}</ul>
      </div>
    </section>
  );
}
