import React from 'react';
import styles from './CardGrid.css';
import useMedia, { MediaSize } from './useMedia';

const Card = ({
  children,
  media
}: {
  children: Node | string;
  media: MediaSize;
}) => {
  const cardStyle = media === 'xs' ? styles.cardXs : styles.card;
  return <div className={cardStyle}>{children}</div>;
};

// const CARDS = ['moi', 'hei', 'joo', 'lii', 'laa', 'lee', 'loo'];
interface CardGridProps {
  cards?: string[];
}

export const CardGrid = ({ cards = [] }: CardGridProps) => {
  const { media } = useMedia();
  return (
    <div className={styles.page}>
      <div className={styles.pageTitle}>Number of Cards: {cards.length}</div>
      <div className={styles.cardGrid}>
        {cards.map(card => (
          <Card key={card} media={media}>
            {card}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
