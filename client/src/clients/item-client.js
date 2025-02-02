export default new (class ItemClient {
   async getAllTasks() {
      const response = await fetch("/getAll");

      return await response.json();
   }

   async deleteTask(id) {
      await fetch(`/del/${id}`, { method: "DELETE" });
   }

   async undoDelete() {
      await fetch("/del/undo", { method: "POST" });
   }

   async addTask(task) {
      const reqOptions = {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ task }),
      };
      const response = await fetch("/add", reqOptions);

      return await response.json();
   }

   async clearTasks() {
      await fetch("/del", { method: "DELETE" });
   }

   async checkMarkTask(isChecked, taskID) {
      const reqOptions = {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ isChecked: isChecked, taskID: taskID }),
      };
      return (await fetch("/checkmark", reqOptions)).json();
   }
})();
