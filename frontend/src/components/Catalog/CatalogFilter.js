import React from 'react';

const CatalogFilters = (props) =>{

    return(
      <div className="row">
        <div className="col-md-4">
          <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Сортировать по
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <span className="dropdown-item" onClick={()=>props.changeFilterPar("?likes=more")}>Возрасравстанию лайков</span>
            <span className="dropdown-item" onClick={()=>props.changeFilterPar("?likes=less")}>Убыванию лайков</span>
            <span className="dropdown-item" onClick={()=>props.changeFilterPar("?year_of_publish=more")}>Дате: от новых к старым</span>
            <span className="dropdown-item" onClick={()=>props.changeFilterPar("?year_of_publish=less")}>Дате: от старых к товым</span>
            <span className="dropdown-item" onClick={()=>props.changeFilterPar("?updated=more")}>Обновлениям: от недавних к старым</span>
            <span className="dropdown-item" onClick={()=>props.changeFilterPar("?updated=less")}>Обновлению: от старых к недавним</span>
          </div>
         </div>
        </div>
      </div>
    )

}

export default CatalogFilters