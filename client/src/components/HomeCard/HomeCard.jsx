import homeCardCSS from "./HomeCard.module.css";
import AddBarConnector from "../AddBar/AddBarConnector";
import TaskListConnector from "../TaskList/TaskListConnector";
import LoaderConnector from "../Loader/LoaderConnector";
import PendingTasksConnector from "../PendingTasks/PendingTasksConnector";
import SortButtonsConnector from "../SortButtons/SortButtonsConnector";
import SearchConnector from "../Search/SearchConnector";
import DropdownFilterConnector from "../DropdownFilter/DropdownFilterConnector";
import Button from "../Button";
import Titles from "../Titles";
import { useCallback } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

function HomeCard({ tasks, clearTasksAction, onUndo, canUndo, setTasksAction, addTaskAction }) {
   const clearButtonHandler = useCallback(async () => {
      try {
         await clearTasksAction();
      } catch (error) {
         console.error(error);
      }
   }, [clearTasksAction]);

   const onUndoHandle = useCallback(async () => {
      onUndo();
   }, [onUndo]);

   return (
      <div className={homeCardCSS.card}>
         <Titles />
         <AddBarConnector />
         <div
            className={classNames({
               [homeCardCSS.container]: true,
               [homeCardCSS["sort-btns-container"]]: true,
               [homeCardCSS.visible]: tasks.length >= 1,
            })}
         >
            <SortButtonsConnector />
            <SearchConnector />
            <DropdownFilterConnector />
         </div>
         <div className={homeCardCSS["tasks-and-clear-container"]}>
            <TaskListConnector />
            <LoaderConnector />
            <div className={homeCardCSS["footer-container"]}>
               <PendingTasksConnector />
               <div className={homeCardCSS["clear-undo-btns-container"]}>
                  <Button
                     onClick={clearButtonHandler}
                     innerText={"Clear All"}
                     className={homeCardCSS["clear-all"]}
                  />
                  <Button
                     onClick={onUndoHandle}
                     innerText={"Undo"}
                     className={homeCardCSS["undo"]}
                     disabled={!canUndo}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

HomeCard.propTypes = {
   clearTasksAction: PropTypes.func,
};

export default HomeCard;
