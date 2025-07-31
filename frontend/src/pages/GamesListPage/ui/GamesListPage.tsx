import { PageHeader } from "@widgets/PageHeader";

import { CustomGrid } from "@widgets/CustomGrid/ui/CustomGrid";
import { GameCard } from "@entities/GameCard";

import './GamesListPage.scss';

export function GamesListPages() {
  const gamesData = [
    {
      id: 3,
      title: "Флажки",
      gameIcon: '/images/gameIcons/flags.png',
      isCompleted: false,
    },
    {
      id: 1,
      title: "Факты о себе",
      gameIcon: '/images/gameIcons/facts.png',
      isCompleted: false,
    },
    {
      id: 2,
      title: "Факты о себе 18+",
      gameIcon: '/images/gameIcons/factsAdult.png',
      isCompleted: false,
    },
    {
      id: 4,
      title: "Короткие рассказы",
      gameIcon: '/images/gameIcons/stories.png',
      isCompleted: false,
    },
  ];
  return (
    <>
      <PageHeader title="Игры" />
      <div className="page games">
        <CustomGrid hasLabel={false}>
          {gamesData && gamesData.length > 0 ? (
            gamesData.map((game, i) => {
              return <GameCard key={`game-${i}`} game={game} />;
            })
          ) : (
            <></>
          )}
        </CustomGrid>
      </div>
    </>
  );
}
