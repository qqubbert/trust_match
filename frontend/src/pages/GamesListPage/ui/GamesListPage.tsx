import { PageHeader } from "@widgets/PageHeader";

import { CustomGrid } from "@widgets/CustomGrid/ui/CustomGrid";
import { GameCard } from "@entities/GameCard";

import "./GamesListPage.css";

import { testGamesData } from "@shared/data/testData/testGames";

export function GamesListPages() {
  const gamesData = testGamesData;

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
