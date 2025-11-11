import type { IStatsProps } from "./stats.model";


function StatsList({all, todo, done}: IStatsProps) {



    return(
    <div className="stats">
            Всего: {all} | Активных: {todo} | Завершено: {done}
    </div>
    )
}

export default StatsList;